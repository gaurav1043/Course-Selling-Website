import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, password);
    try {
      const response = await axios.post(
        "/admin/login",
        null,
        // JSON.stringify({ username, password }),
        {
          headers: {
            // "Content-Type": "application/json",
            username: username,
            password: password,
          },
        }
      );
      //   console.log(response.data.token);

      localStorage.setItem("token", response.data.token);
      setUsername("");
      setPassword("");
      //   setIsLoggedIn(true);
      // navigate("/addcourse");
      // const data = res.data;
      // console.log(response.data.message);
      window.location = "/";
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
          <Typography variant={"h6"}>Welcome back. Sign in below</Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
            <TextField
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth={true}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
            />
            <br />
            <br />
            <TextField
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              fullWidth={true}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <br />
            <br />

            <Button size={"large"} variant="contained" type="submit">
              {" "}
              Signin
            </Button>
          </Card>
        </div>
      </form>
    </div>
  );
}

export default Signin;
