import { LockOutlined } from "@mui/icons-material";
import { Grid, Avatar, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const commonStyles = {
  color: "#333131",
  fontFamily: "'Lato', sans-serif",
};

const LoginHeader: React.FC = () => (
  <Grid
    item
    xs={12}
    md={2}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: "#333131" }}>
      <LockOutlined />
    </Avatar>

    <Typography variant="h5" component="h1" sx={{ ...commonStyles, fontWeight: "bold", mb: 3 }}>
      Log in
    </Typography>

    {/* Vertical Line with "OR" text */}
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
      <Box sx={{ height: "150px", width: "2px", bgcolor: "#333131" }} />
      <Typography
        variant="body1"
        sx={{
          ...commonStyles,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "white",
          px: 1.5,
          zIndex: 1,
        }}
      >
        OR
      </Typography>
      <Box sx={{ height: "200px", width: "2px", bgcolor: "#333131" }} />
    </Box>

    {/* Forgot Password Link */}
    <Typography variant="body1" sx={{ ...commonStyles, mt: 2 }}>
      <Link
        to="/register"
        style={{ ...commonStyles, textDecoration: "underline" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#555555")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#333131")}
      >
        Can't log in?
      </Link>
    </Typography>
  </Grid>
);

export default LoginHeader;
