import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";

const SignInPage = () => {
  return (
    <FormContainer>
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
        ]}
        submitButtonLabel="Sign In"
      />
      <Link className="text-sm text-green-600 underline" to="/sign-up">
        create a new account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
