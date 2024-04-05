import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, checkValidFullName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux-slices/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../config/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data here
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!isSignInForm) {
      setErrorMessage(checkValidFullName(name.current.value));
    }

    if (errorMessage !== null) return;

    if (!isSignInForm) {
      // Sign Up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;
          setErrorMessage(errCode + " " + errMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {})
        .catch((error) => {
          const errCode = error.code;
          //const errMessage = error.message;
          if (errCode === "auth/invalid-credential")
            setErrorMessage("Invalid credentials, please check again ");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-[100%]">
        <img
          className="w-full h-full bg-blend-overlay"
          src={BG_IMAGE}
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black  w-3/12 absolute right-0 left-0 mx-auto my-36 p-12 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 text-white w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          onClick={toggleSignInForm}
          className="cursor-pointer hover:underline text-md my-4"
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
