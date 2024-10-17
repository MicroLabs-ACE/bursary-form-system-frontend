import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { json, useParams } from "react-router-dom";

function Forms() {
  let params = useParams();
  // console.log(params.formId);
  // console.log(useLocation().state.id)
  const formValues = {
    amount: 100,
    bankName: "ugh bank",
    callCentre: "testing",
    objectCode: "this is test",
    purposeOfAdvance: "Test",
    sortCode: "7272",
  };

  const sendForm = async () => {
    try {
      console.log("Sending form...");
      const response = await fetch(
        "https://bursary-form-system-backend.onrender.com/forms/cashAdvance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("xToken"),
            "x-refresh-token": localStorage.getItem("rToken"),
          },
          body: JSON.stringify(formValues),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response, response.status);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    sendForm();
  }, []);
  return (
    <div className="form">
      <Navbar />
      <div className="form-section">
        <h4>{params.formId.split("-").join(" ")}</h4>
        <button className="variant-b">Faculty/Department/Institute/Unit</button>
        <button className="variant-b">Fund/Cost Center</button>
        <button className="variant-b">Estimated Cost(N)</button>
        <button className="variant-b">Amount in words</button>
        <button className="variant-b">Name</button>
        <button className="variant-b">Email Address:</button>
        <button className="variant-b">
          Upload a clear image of your signature
        </button>
        <button className="variant-b">
          Upload a clear image of your signature
        </button>
        <button className="variant-a">Generate Receipt</button>
      </div>
    </div>
  );
}

export default Forms;
