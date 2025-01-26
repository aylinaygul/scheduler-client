import React, { useState } from "react";
import {
  Grid,
  Card as MuiCard,
  CardContent,
  Typography,
  Button,
  Container,
  CssBaseline,
  Avatar,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          // minHeight: "100vh",
          // backgroundImage: "url('/images/bg.jpg')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          // width: "100%",
          // height: "100%",
          // position: "fixed",
        }}
      >
        <Grid item xs={12} sm={10} md={8}>
          <MuiCard sx={{ boxShadow: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={4} alignItems="center" justifyContent="center">
                {/* Left Side: Login Form */}
                <Grid item xs={10} md={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {/* Log in Title */}
                    <Typography
                      variant="h4"  
                      sx={{
                        fontFamily: "'Lato', sans-serif",  
                        fontWeight: "bold",
                        color: "#333131",
                        mb: 3,  // space between title and email.
                      }}
                    >
                      Log in
                    </Typography>

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      sx={{
                        maxWidth: "300px",
                        width: "100%",
                      }}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email" // 
                      InputProps={{
                        sx: {
                          borderRadius: "50px",
                          bgcolor: "#f0f0f0",
                          "&:hover": { bgcolor: "#e0e0e0" },
                        },
                      }}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      sx={{
                        maxWidth: "300px",
                        width: "100%",
                      }}
                      id="password"
                      label="Password"
                      type={showPassword ? "text" : "password"} 
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      sx={{
                        mt: 3,
                        mb: 2,
                        bgcolor: "#333131",
                        "&:hover": { bgcolor: "#808080" },
                        maxWidth: "300px",
                        width: "100%",
                        fontFamily: "'Lato', sans-serif",  
                        fontWeight: "bold", 
                        textTransform: "none",
                      }}
                      onClick={handleLogin}
                    >
                      Log in
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link
                          to="/register"
                          style={{
                            color: "#333131",
                            textDecoration: "none",
                            fontFamily: "'Lato', sans-serif",  
                            textTransform: "none",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#333131")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
                        >
                          Don't have an account? Register.
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

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
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{ fontFamily: "'Lato', sans-serif", fontWeight: "bold", color: "#333131", mb: 3 }}
                  >
                    Log in
                  </Typography>

                  {/* Vertical Line */}
                  <Box
                    sx={{
                      height: "150px",
                      width: "2px",
                      backgroundColor: "#333131",
                      position: "relative",
                    }}
                  />

                  {/* OR Text */}
                  <Typography
                    variant="body1"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      bgcolor: "white",
                      px: 2,
                      color: "#333131",
                      zIndex: 1,
                      fontFamily: "'Lato', sans-serif",  
                    }}
                  >
                    OR
                  </Typography>

                  {/* Bottom Line */}
                  <Box
                    sx={{
                      height: "200px",
                      width: "2px",
                      backgroundColor: "#333131",
                      position: "relative",
                      bottom: "50px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline", 
                      color: "#333131",
                      zIndex: 1,
                      mt: 2, // Make bottom part upper.
                      fontFamily: "'Lato', sans-serif",  
                    }}
                  >
                    <Link
                      to="/register"
                      style={{
                        color: "#333131",
                        textDecoration: "underline",
                        display: "inline",
                        fontFamily: "'Lato', sans-serif", 
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#333131")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
                    >
                      Can't log in?
                    </Link>
                  </Typography>
                </Grid>

                {/* Right Side: Google & Email Buttons */}
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        width: "100%",
                        maxWidth: "300px",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50px",
                        borderColor: "#333131",
                        color: "#333131",
                        fontFamily: "'Lato', sans-serif",  
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#555555",
                          backgroundColor: "#f0f0f0",
                        },
                      }}
                    >
                      <img
                        src="/images/google.png"
                        alt="Google"
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      Continue with Google
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        width: "100%",
                        maxWidth: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50px",
                        borderColor: "#333131",
                        color: "#333131",
                        fontFamily: "'Lato', sans-serif",  
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#555555",
                          backgroundColor: "#f0f0f0",
                        },
                      }}
                    >
                      <img
                        src="/images/email.png"
                        alt="Email"
                        style={{
                          height: "20px",
                          marginRight: "10px",
                          filter: "grayscale(100%)",
                        }}
                      />
                      Sign up with email
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              {/* Secure Login with reCAPTCHA text */}
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  color: "gray",
                  fontFamily: "'Lato', sans-serif",  
                }}
              >
                <span>
                  Secure Login with reCAPTCHA subject to
                  <Link
                    to="https://policies.google.com/terms"
                    target="_blank"
                    style={{
                      color: "#333131",
                      textDecoration: "underline",
                      display: "inline",
                    }}
                  >
                    <span> Google Terms</span>
                  </Link>
                  <span> & </span>
                  <Link
                    to="https://policies.google.com/privacy"
                    target="_blank"
                    style={{
                      color: "#333131",
                      textDecoration: "underline",
                      display: "inline",
                    }}
                  >
                    Privacy
                  </Link>
                </span>
              </Typography>
            </CardContent>
          </MuiCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
