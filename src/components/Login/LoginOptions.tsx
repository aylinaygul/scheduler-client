import React from "react";
import { Box, Button, Grid } from "@mui/material";

// Define the props interface for IconButton
interface IconButtonProps {
  iconSrc: string;
  altText: string;
  text: string;
  onClick?: () => void;
}

// Reusable button styles
const buttonStyles = {
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
};

// Reusable IconButton component
const IconButton: React.FC<IconButtonProps> = ({ iconSrc, altText, text, onClick }) => (
  <Button variant="outlined" sx={buttonStyles} onClick={onClick} aria-label={altText}>
    <img src={iconSrc} alt={altText} style={{ height: 20, marginRight: 10 }} />
    {text}
  </Button>
);

const LoginOptions: React.FC = () => {
  const buttons = [
    { iconSrc: "/images/google.png", altText: "Google login button", text: "Continue with Google", onClick: () => console.log("Google login clicked") },
    { iconSrc: "/images/email.png", altText: "Email signup button", text: "Sign up with Email", onClick: () => console.log("Email signup clicked") },
  ];

  return (
    <Grid item xs={12} md={5}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
        {buttons.map((btn, index) => (
          <IconButton key={index} {...btn} />
        ))}
      </Box>
    </Grid>
  );
};

export default LoginOptions;
