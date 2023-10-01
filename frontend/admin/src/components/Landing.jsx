import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h4">Welcome to Course selling website</Typography>
    </div>
  );
}

export default Landing;
