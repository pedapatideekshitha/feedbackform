import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
// import axios from "axios";
import top from "../images/top.png";
import html2pdf from "html2pdf.js";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Data from "./Data";
import { Link } from "react-router-dom";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    RegisteredNumber: "",
    dob: "",
    fatherName: "",
    fatherProfession: "",
    fatherMobile: "",
    fatherEmail: "",
    address: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const docRef = await addDoc(
        collection(db, "feedbackdata"),
        formData
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveAsPDF = () => {
    const element = document.getElementById("pageToSave");
    html2pdf()
      .set({ html2canvas: { scale: 2 } })
      .from(element)
      .save();
  };

  return (
    <Box>
      <form
        style={{ textAlign: "center", width: "70%", margin: "auto" }}
        id="pageToSave"
        onSubmit={handleSubmit}
      >
        <img width={"100%"} src={top} alt="top-image" />
        <TextField
          name="name"
          label="Name"
          value={formData.Name}
          onChange={handleChange}
          required
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="registeredNumber"
          label="Registered Number"
          value={formData.RegisteredNumber}
          onChange={handleChange}
          required
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="dob"
          label="Date of Birth"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <br />
        <TextField
          name="fatherName"
          label="Father's Name"
          value={formData.fatherName}
          onChange={handleChange}
          required
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="fatherProfession"
          label="Father's Profession"
          value={formData.fatherProfession}
          onChange={handleChange}
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="fatherMobile"
          label="Father's Mobile Number"
          value={formData.fatherMobile}
          onChange={handleChange}
          required
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="fatherEmail"
          label="Father's Email"
          type="email"
          value={formData.fatherEmail}
          onChange={handleChange}
          required
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="address"
          label="Permanent Address"
          multiline
          rows={4}
          value={formData.address}
          onChange={handleChange}
          required
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="feedback"
          label="Feedback"
          multiline
          rows={4}
          value={formData.feedback}
          onChange={handleChange}
          required
          fullWidth
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <br />
        <br />
        <Button variant="contained" onClick={handlePrint}>
          Print
        </Button>
        <br />
        <br />
        <Button variant="contained" onClick={handleSaveAsPDF}>
          Save as PDF
        </Button>
        <br />
        <br />
        <Button variant="contained" LinkComponent={Link} to="/data">
          Data
        </Button>
      </form>
    </Box>
  );
};

export default FeedbackForm;
