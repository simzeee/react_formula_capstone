import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
      className="font-lato bg-white border border-slate-200 rounded-lg m-4 p-4"
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
          field={field}
        ></Field>
      ))}
      <button className="bg-emerald-700 text-white w-full rounded-lg py-2 mt-4 relative ">
        {submitButtonLabel}
        <div className="absolute top-0 right-4 flex items-center h-full">
          {loading && (
            <i className="fa-solid fa-spinner-third text-green-300 text-xl animate-spin"></i>
          )}
        </div>
      </button>
    </form>
  );
};

export default AuthForm;
