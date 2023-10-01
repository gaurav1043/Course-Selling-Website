import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import { Button } from "@mui/material";

const Course = () => {
  let { courseId } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("/user/courses/" + courseId, null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.message);
        // setCourse(res.data);
      });
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          navigate("/purchased");
        }}
      >
        My Courses
      </Button>
    </div>
  );
};

export default Course;
