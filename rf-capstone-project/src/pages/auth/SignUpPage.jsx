import AuthForm from "./AuthForm";
const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center font-lato">
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
          { label: "confirm password", type: "password" },
        ]}
        submitButtonLabel="Sign Up"
      ></AuthForm>
    </div>
  );
};

export default SignUpPage;
