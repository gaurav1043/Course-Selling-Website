import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Appbar() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/user/me", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.username);
        if (res.data.username) {
          setUserEmail(res.data.username);
          // console.log(userEmail);
        }
      });
  }, []);
  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div style={{ marginLeft: 10 }}>
          <Typography variant={"h6"}>User App</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </Button>
            </div>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/purchased");
                }}
              >
                My Courses
              </Button>
            </div>

            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Courses
              </Button>
            </div>
            <div style={{ marginRight: 10, marginTop: 10 }}>
              <Typography variant={"h7"}>{userEmail}</Typography>
            </div>
            <Button
              variant={"contained"}
              onClick={() => {
                localStorage.setItem("token", null);
                window.location = "/";
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div style={{ marginLeft: 10 }}>
          <Typography variant={"h6"}>User App</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              User Signup
            </Button>
          </div>
          <div>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signin");
              }}
            >
              User Signin
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Appbar;
