import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/admin/signup",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("token", response.data.token);
      //   window.location = "/";
      console.log(JSON.stringify(response.data.message));
      setUsername("");
      setPassword("");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant={"h6"}>
            Welcome to Coursera. Sign up below
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
            <TextField
              type={"text"}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              fullWidth={true}
              label="Email"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth={true}
              label="Password"
              variant="outlined"
              type={"password"}
            />
            <br />
            <br />

            <Button size={"large"} variant="contained" type="submit">
              {" "}
              Signup
            </Button>
          </Card>
        </div>
      </form>
    </div>
  );
}

export default Signup;

//   onClick={() => {
//     function callback2(data) {
//       localStorage.setItem("token", data.token);
//     }
//     function callback1(res) {
//       res.json().then(callback2);
//     }
//     fetch("http://localhost:3000/admin/signup", {
//       method: "POST",
//       body: JSON.stringify({
//         username: email,
//         password: password,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     }).then(callback1);
//   }}
