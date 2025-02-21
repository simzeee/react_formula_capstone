const Field = (props) => {
  const { field, onChange, value } = props;
  return (
    <div className="flex flex-col my-4">
      <label className="pl-1 text-slate-500" htmlFor={field.label}>
        {field.label}
      </label>
      <input
        className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg focus:outline-emerald-600 w-64"
        id={field.label}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};

export default Field;
