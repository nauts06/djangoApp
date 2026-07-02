import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      password: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(
          "http://127.0.0.1:8001/register/",
          formData
        );

      console.log(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button type="submit">
        Register
      </button>

    </form>
  );
}

export default Register;