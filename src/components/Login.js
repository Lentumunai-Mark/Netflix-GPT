import Header from "./Header";

import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/KE-en-20250303-TRIFECTA-perspective_4f49559a-3a86-4877-8dd4-b8c0f7bb04f4_large.jpg"
          alt=""
        ></img>
      </div>

      <form className="w-100 absolute p-8  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 bg-gray-700 text-white rounded-md w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 bg-gray-700 text-white rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-gray-700 text-white rounded-md w-full"
        />
        <button className="p-3 my-2 bg-red-600 text-white w-full rounded-md font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-white cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="hover:underline">Sign up Now</span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span className="hover:underline">Sign In Now</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
