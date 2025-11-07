// src/components/screens/Authentication/Signup.jsx
import React, { useEffect, useState } from "react";
import Button from "../../custom/Button";
import toast from 'react-hot-toast';

const Signup = ({ onLoginClick }) => {
  const initialValues = { username: "", email: "", password: "" };
  const [inputValue, setInputValue] = useState(initialValues);
  const [submitForm, setSubmitForm] = useState(false);
  const [errors, setErrors] = useState({});

   const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(inputValue);
    setErrors(validation);
    setSubmitForm(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitForm) {
      toast.success("Signup successful!");
    }
  }, [errors, submitForm]);

     const validate = (value) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value.username) {
            errors.username = "username is required!"
        } else if (value.username.length < 4) {
            errors.username = "name should be more then 4 character!"
        }
        if (!value.email) {
            errors.email = "email is required!"
        } else if (!regex.test(value.email)) {
            errors.email = "This is not valid email format!"
        }
        if (!value.password) {
            errors.password = "password is required!"
        } else if (value.password.length < 4) {
            errors.password = "password must be more then 4 characters!"
        }
        return errors
        
    }

  return (
    <form noValidate
      onSubmit={handleSubmit}
      className="w-[320px] p-4 mt-2 font-mono border-2 border-gray-300 rounded-md bg-white"
    >
      <div className="flex items-center justify-center mb-4">
        <p className="text-2xl font-semibold">Sign Up</p>
      </div>

      {/* Username */}
      <div className="flex flex-col gap-1 mb-2">
        <label>Username</label>
        <input
          name="username"
          value={inputValue.username}
          onChange={handleChange}
          placeholder="Enter username"
          type="text"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm">{errors.username}</p>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 mb-2">
        <label>Email</label>
        <input
          name="email"
          value={inputValue.email}
          onChange={handleChange}
          placeholder="Enter email"
          type="email"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm">{errors.email}</p>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1 mb-3">
        <label>Password</label>
        <input
          name="password"
          value={inputValue.password}
          onChange={handleChange}
          placeholder="Set password"
          type="password"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm">{errors.password}</p>
      </div>

      {/* Submit button */}
      <div className="mb-3">
        <Button type="submit" buttonName="Sign Up" className="w-full" />
      </div>

      {/* Switch to login */}
      <div className="text-center text-sm">
        <p>
          Already have an account?{" "}
          <span
            onClick={() => onLoginClick && onLoginClick()}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default Signup;
