import AuthForm from "./AuthForm";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center font-lato">
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
        ]}
        submitButtonLabel="Sign In"
      ></AuthForm>
    </div>
  );
};

export default SignInPage;
