import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const SignUpPage = () => {
  return (
    <FormContainer>
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
          { label: "confirm password", type: "password" },
        ]}
        submitButtonLabel="create account"
      />
      <Link className="text-sm text-green-600 underline" to="/">
        sign in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
