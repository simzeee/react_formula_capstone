import { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import * as userService from "../../services/user";

const SignUpPage = () => {
  const [error, setError] = useState("");

  return (
    <FormContainer>
      <div className="text-red-700 font-lato">{error}</div>
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
          { label: "confirm password", type: "password" },
        ]}
        submitButtonLabel="create account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError("username too short");
            return;
          }
          if (values.password.length < 4) {
            setError("password too short");
            return;
          }
          if (values.password !== values["confirm password"]) {
            setError("passwords do not match");
            return;
          }
          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });
          if (response.status == 201) {
            console.log("user created!");
            setError("");
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link className="text-sm text-green-600 underline" to="/">
        sign in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
