import { Home } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Home />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ maxWidth: "fit-content", paddingRight: "30px" }}
            >
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                About us
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/form"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Form
              </Link>
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
