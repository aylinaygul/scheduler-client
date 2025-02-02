import React, { useState } from "react";
import { Grid, Box, Typography, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Email doğrulama 
  const validateEmail = (email) => {
    if (email === "") return false; 
    return !email.includes("@"); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    if (name === "email") {
      setEmailError(validateEmail(value));
    }
  };

  // Kullanıcı email kutusundan çıktığında hata kontrolü
  const handleBlur = () => {
    if (credentials.email === "") {
      setEmailError(false); 
    }
  };

  return (
    <Grid item xs={10} md={5}>
      <Box display="flex" flexDirection="column" alignItems="center" width="100%">
        <Typography variant="h4" fontWeight="bold" color="#333131" mb={3}>
          Log in
        </Typography>

        {/* Email Input */}
        <TextField
          margin="normal"
          required
          fullWidth
          sx={{ maxWidth: "300px", width: "100%" }}
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          value={credentials.email}
          onChange={handleChange}
          onBlur={handleBlur} 
          type="email"
          error={emailError}
          helperText={emailError ? "Email adresi '@' içermelidir!" : ""}
          InputProps={{
            sx: {
              borderRadius: "50px",
              bgcolor: "#f0f0f0",
              "&:hover": { bgcolor: "#e0e0e0" },
            },
          }}
        />

        {/* Password Input */}
        <TextField
          margin="normal"
          required
          fullWidth
          sx={{ maxWidth: "300px", width: "100%" }}
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={credentials.password}
          onChange={handleChange}
          InputProps={{
            sx: {
              borderRadius: "50px",
              bgcolor: "#f0f0f0",
              "&:hover": { bgcolor: "#e0e0e0" },
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: "#333131" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, bgcolor: "#333131", "&:hover": { bgcolor: "#808080" }, maxWidth: "300px", fontWeight: "bold" }}
        >
          Log in
        </Button>

        <Grid container justifyContent="center" mt={3}>
          <Grid item>
            <Link to="/register" style={{ color: "#333131", textDecoration: "none" }}>
              Don't have an account? Register.
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default LoginForm;
