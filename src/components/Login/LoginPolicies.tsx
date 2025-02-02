import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPolicies = () => (
  <Typography variant="body1" textAlign="center" color="gray">
    Secure Login with reCAPTCHA subject to{" "}
    <Link to="https://policies.google.com/terms" target="_blank" style={{ color: "#333131", textDecoration: "underline" }}>
      Google Terms
    </Link>{" "}
    &{" "}
    <Link to="https://policies.google.com/privacy" target="_blank" style={{ color: "#333131", textDecoration: "underline" }}>
      Privacy
    </Link>
  </Typography>
);

export default LoginPolicies;
