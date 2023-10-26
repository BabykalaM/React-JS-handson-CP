import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Info from "./Info";

import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getFormData, postData, resetForm, submitForm } from "../actions";

const RegForm = () => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   gender: "female",
  //   languages: [],
  //   address: "",
  //   state: "",
  // });
  const formData = useSelector((state) => state.form.formData);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "language") {
      const languageArray = formData.languages;
      if (languageArray.includes(value)) {
        const updatedLanguages = languageArray.filter((lang) => lang !== value);
        dispatch(submitForm({ ...formData, languages: updatedLanguages }));
      } else {
        dispatch(
          submitForm({ ...formData, languages: [...languageArray, value] })
        );
      }
    } else {
      dispatch(submitForm({ ...formData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // setFlag(true);
    dispatch(submitForm(formData));
    dispatch(postData(formData));
    navigate("/info");
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return (
    <>
      <Container sx={{ m: 4 }} style={{ maxWidth: "800px" }}>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <Typography variant="h5" style={{ marginBottom: "15px" }}>
            Registration Form
          </Typography>
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl component="fieldset" fullWidth>
            <Typography>Gender</Typography>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
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
                  checked={formData.languages.includes("English")}
                  onChange={handleChange}
                />
              }
              label="English"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="language"
                  value="Hindi"
                  checked={formData.languages.includes("Hindi")}
                  onChange={handleChange}
                />
              }
              label="Hindi"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="language"
                  value="Tamil"
                  checked={formData.languages.includes("Tamil")}
                  onChange={handleChange}
                />
              }
              label="Tamil"
            />
          </FormControl>
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={formData.address}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            style={{ marginBottom: "15px" }}
          />
          <FormControl fullWidth style={{ marginBottom: "15px" }}>
            <InputLabel>State</InputLabel>
            <Select name="state" value={formData.state} onChange={handleChange}>
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
};

// export default RegForm;
const mapStateToProps = (state) => ({
  formData: state.form.formData,
  postData: state.post.formData,
});

const mapDispatchToProps = {
  submitForm: submitForm,
  resetForm: resetForm,
  postData: postData,
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
