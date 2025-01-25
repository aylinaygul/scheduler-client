import React, { useState } from "react";
import { Grid, Card as MuiCard, CardContent, Typography, Button, Container, CssBaseline, Avatar, TextField, Box } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
// const bgImage = '/images/bg.jpg';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      {/* <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cage:over",
          backgroundPosition: "center",
        }}
      > */}
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          {/* Left Side: Login Form */}
          <Grid item xs={12} sm={6} md={5}>
            <MuiCard className="shadow-lg w-full">
              <CardContent className="p-8">
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
                  <Avatar sx={{ m: 1, bgcolor: "#333131" }}>
                    <LockOutlined />
                  </Avatar>
                  <Typography variant="h5" component="h1" className="text-gray-700 mb-6">
                    Login
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: "#333131", 
                        "&:hover": {
                        backgroundColor: "#808080", 
                        },
                    }}
                    onClick={handleLogin}
                    >
                    Login
                    </Button>

                    <Grid container justifyContent={"flex-end"}>
                      <Grid item>
                      <Link
                        to="/register"
                        style={{
                            color: "#333131", 
                            textDecoration: "none", 
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#333131")} // Hover, koyu gri 
                        onMouseLeave={(e) => (e.currentTarget.style.color = "gray")} 
                        >
                        Don't have an account? Register.
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </CardContent>
            </MuiCard>
          </Grid>

          {/* Divider with OR */}
          <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <Box sx={{ width: "100%", height: "1px", backgroundColor: "black", margin: "0 10px" }} />
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                px: 1,
                zIndex: 1,
              }}
            >
              OR
            </Typography>
            <Box sx={{ width: "100%", height: "1px", backgroundColor: "gray", margin: "0 10px" }} />
          </Grid>

          {/* Right Side: Google & Sign-Up Buttons */}
          <Grid item xs={12} sm={6} md={5}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <Button variant="outlined" className="w-64 flex items-center justify-center" sx={{ marginBottom: 2 }}>
                <img
                  src="/google-icon.svg"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Continue with Google
              </Button>

              <Button variant="outlined" className="w-64 flex items-center justify-center">
                <img
                  src="/email-icon.svg"
                  alt="Email"
                  className="h-5 w-5 mr-2"
                  style={{ filter: "grayscale(100%)" }} 
                />
                Sign up with email
              </Button>
            </Box>
          </Grid>
        </Grid>
    </Container>
  );
}

export default Login;
