import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";

const Purchased = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("/user/purchasedCourses", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.purchasedCourses);
        setCourses(res.data.purchasedCourses);
      });
  }, []);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <Course course={course} key={course._id} />;
      })}
    </div>
  );
};
function Course({ course }) {
  const navigate = useNavigate();
  // console.log(course._id);
  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20,
      }}
    >
      <Typography textAlign={"center"} variant="h5">
        {course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {course.description}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        Created on :{course.createdAt}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        Updated on :{course.updatedAt}
      </Typography>
      <img src={course.imageLink} style={{ width: 300 }}></img>
      {/* <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              navigate("/course/" + course._id);
            }}
          >
            Edit
          </Button>
        </div> */}
    </Card>
  );
}
export default Purchased;
