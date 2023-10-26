import React from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Info from "./Info";
import { connect } from "react-redux";
import { resetForm, submitForm } from "../store/posts/actions";

class RegFormClass extends React.Component {
  constructor() {
    super();
    this.state = { flag: false };
    // this.state = {
    //   formData: {
    //     firstName: "",
    //     lastName: "",
    //     gender: "female",
    //     languages: [],
    //     address: "",
    //     state: "",
    //   },
    // };
  }
  handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "language") {
      let updatedLanguages;
      if (checked) {
        updatedLanguages = [...this.props.formData.languages, value];
      } else {
        updatedLanguages = this.props.formData.languages.filter(
          (lang) => lang !== value
        );
      }

      this.props.submitForm({
        ...this.props.formData,
        languages: updatedLanguages,
      });
    } else {
      this.props.submitForm({
        ...this.props.formData,
        [name]: value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.formData);
    this.props.submitForm(this.props.formData);
    // this.setState({ flag: true });
    this.props.history.push("/info");
  };

  handleReset = () => {
    this.props.resetForm();
  };

  render() {
    return (
      <>
        <Container sx={{ m: 4 }} style={{ maxWidth: "800px" }}>
          <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <Typography variant="h5" style={{ marginBottom: "15px" }}>
              Registration Form
            </Typography>
            <TextField
              label="First Name"
              variant="outlined"
              name="firstName"
              value={this.props.formData.firstName}
              onChange={this.handleChange}
              fullWidth
              required
              style={{ marginBottom: "15px" }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={this.props.formData.lastName}
              onChange={this.handleChange}
              fullWidth
              required
            />
            <FormControl component="fieldset" fullWidth>
              <Typography>Gender</Typography>
              <RadioGroup
                row
                name="gender"
                value={this.props.formData.gender}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <Typography>Languages</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    name="language"
                    value="English"
                    checked={this.props.formData.languages.includes("English")}
                    onChange={this.handleChange}
                  />
                }
                label="English"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="language"
                    value="Hindi"
                    checked={this.props.formData.languages.includes("Hindi")}
                    onChange={this.handleChange}
                  />
                }
                label="Hindi"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="language"
                    value="Tamil"
                    checked={this.props.formData.languages.includes("Tamil")}
                    onChange={this.handleChange}
                  />
                }
                label="Tamil"
              />
            </FormControl>
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={this.props.formData.address}
              onChange={this.handleChange}
              multiline
              rows={4}
              fullWidth
              style={{ marginBottom: "15px" }}
            />
            <FormControl fullWidth style={{ marginBottom: "15px" }}>
              <InputLabel>State</InputLabel>
              <Select
                name="state"
                value={this.props.formData.state}
                onChange={this.handleChange}
              >
                <MenuItem value="Tamilnadu">Tamilnadu</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button type="reset" variant="contained" color="primary">
              Reset
            </Button>
          </form>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  formData: state.form.formData,
});

const mapDispatchToProps = {
  submitForm,
  resetForm,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(RegFormClass);
