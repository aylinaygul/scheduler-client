import React from "react";
import { Grid, Card, CardContent, Container, CssBaseline } from "@mui/material";
import LoginOptions from "../components/Login/LoginOptions.tsx";
import LoginForm from "../components/Login/LoginForm.tsx";
import LoginHeader from "../components/Login/LoginHeader.tsx";
import LoginPolicies from "../components/Login/LoginPolicies.tsx";

const Login = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Grid container justifyContent="center" alignItems="center" width="100%" height="100%">
        <Grid item xs={12} sm={10} md={8}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={4} alignItems="center" justifyContent="center">
                <LoginForm />
                <LoginHeader />
                <LoginOptions />
              </Grid>
              <LoginPolicies />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
