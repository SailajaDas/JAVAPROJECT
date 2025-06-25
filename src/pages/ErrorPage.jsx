import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white font-serif px-4">
      <div className="text-center w-full max-w-2xl">
        {/* Background 404 GIF */}
        <div
          className="h-[400px] bg-center bg-no-repeat bg-cover flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-black">404</h1>
        </div>

        {/* Error Text Content */}
        <div className="mt-[-50px]">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Oops! Looks like you're lost,{" "}
            <span className="text-green-700">buddy</span>
          </h3>
          <p className="mt-2 text-gray-800">
            The page you are looking for is not available!
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <NavLink
              to="/"
              className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-900 transition"
            >
              Go to Home
            </NavLink>

            <button
              type="button"
              onClick={handleGoBack}
              className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
