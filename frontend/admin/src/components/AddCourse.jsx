import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useState } from "react";
import axios from "../../../../../../Assignments/Week -3-Assignments/Course-App/src/api/axios";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/admin/courses",
        {
          title: title,
          description: description,
          imageLink: image,
          published: true,
          price,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(JSON.stringify(response.data.message));
      // setTitle("");
      // setDescription("");
      // setImage("");
      // setPrice(0);
      navigate("/courses");
      // alert("Added course!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          varint={"outlined"}
          style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ marginBottom: 10 }}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              fullWidth={true}
              label="Title"
              variant="outlined"
            />

            <TextField
              style={{ marginBottom: 10 }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              fullWidth={true}
              label="Description"
              variant="outlined"
            />

            <TextField
              style={{ marginBottom: 10 }}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              fullWidth={true}
              label="Image link"
              variant="outlined"
            />

            <TextField
              style={{ marginBottom: 10 }}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              fullWidth={true}
              label="Price"
              variant="outlined"
            />

            <Button size={"large"} variant="contained" type={"submit"}>
              {" "}
              Add course
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
