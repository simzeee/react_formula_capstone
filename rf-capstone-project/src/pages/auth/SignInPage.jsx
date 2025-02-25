import { Link, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import * as userService from "services/user";
import { useState } from "react";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  return (
    <FormContainer>
      <div className="text-red-700 font-lato">{error}</div>
      {location.state?.accountCreated && (
        <div className="p-4 mb-8 mt-2 bg-green-200 border rounded-lg border-emerald-500 text-emerald-700">
          Account created successfully. Please sign in.{" "}
        </div>
      )}
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
        ]}
        submitButtonLabel="Sign In"
        onSubmit={async (values) => {
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });
          if (response.status == 201) {
            console.log("sign in successful!");
            setError("");
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link className="text-sm text-green-600 underline" to="/sign-up">
        create a new account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
