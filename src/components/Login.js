import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-[100%]">
        <img
          className="w-full h-full bg-blend-overlay"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <form className="bg-black  w-3/12 absolute right-0 left-0 mx-auto my-36 p-12 text-white rounded-lg bg-opacity-80">
        <h1 class="font-bold text-3xl py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />

        <input
          type="password"
          placeholder="Password"
          class="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-4 bg-red-600 text-white w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          class="text-md"
          onClick={toggleSignInForm}
          className="cursor-pointer hover:underline"
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
