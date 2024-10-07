import React, { useState } from "react";

const SignIn: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [isTokenSent, setIsTokenSent] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const handleRequestOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);

    const response = await fetch(
      "https://bursary-form-system-backend.onrender.com/auth/otp/request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to send OTP");
    }

    console.log("Token sent");
    setIsTokenSent(true);
  };

  const handleVerifyOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Token:", token);

    const response = await fetch(
      "https://bursary-form-system-backend.onrender.com/auth/otp/verification",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, token }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to send OTP");
    }

    console.log("Headers:", response.headers);
  };

  let content;
  if (!isTokenSent) {
    content = (
      <form onSubmit={handleRequestOtp}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Request OTP</button>
      </form>
    );
  } else {
    content = (
      <form onSubmit={handleVerifyOtp}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} disabled />
        <label htmlFor="token">Token:</label>
        <input
          type="text"
          id="token"
          name="token"
          value={token}
          onChange={handleTokenChange}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    );
  }

  return (
    <div>
      <h1>Sign In</h1>
      {content}
    </div>
  );
};

export default SignIn;
