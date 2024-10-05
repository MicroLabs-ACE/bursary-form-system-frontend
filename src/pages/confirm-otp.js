import React, { useContext, useEffect, useState } from "react";
import FormHeader from "../components/formHeader";
import { EmailContext } from "../Context/EmailContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { AuthContext } from "../Context/AuthContext";
import instance from "../Context/Base_url";

function ConfirmOtp() {
  const Auth = useContext(AuthContext);
  const [showModal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const emailcontext = useContext(EmailContext);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (emailcontext.email.length < 3) {
      navigate("/sign-in");
    }
    setEmail(emailcontext.email);
  }, [emailcontext.email, navigate]);
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };
  useEffect(() => {
    const fullotp = otp.join("");
    if (fullotp.length === 6) {
      setToken(fullotp);
    }
  }, [otp]);
  const handleOTPsubmit = async () => {
    setSubmitting(true);
    try {
      const response = await 
        instance.post('/auth/otp/verify',
        { email, token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        Auth.setAuth(true);
        localStorage.setItem("zcode", true);
        navigate(`${Auth.history}`);
        setSubmitting(false);
      } else if (response.status === 400) {
        setMessage("Wrong OTP!");
        setType("error");
        setModal(true);
        setSubmitting(false);
      }
    } catch (error) {
      setMessage("Error! Make sure OTP is correct");
      setType("error");
      setModal(true);
      setSubmitting(false);
    }
  };
  return (
    <div className="form-wrapper">
      <FormHeader />
      <div className="otp">
        {showModal && <Modal type={type} msg={message} />}
        <label htmlFor="otpcode">
          <p>Enter otp code</p>
        </label>
        <div className="otp-code">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              value={otp[index]}
              maxLength="1"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-input-box"
            />
          ))}
        </div>
        <button className="variant-a" onClick={handleOTPsubmit}>
          {submitting ? "Verifying OTP..." : "Verify OTP"}
        </button>
        <p className="resend-code">
          Didn't receive code? <span>Resend</span>
        </p>
      </div>
    </div>
  );
}

export default ConfirmOtp;
