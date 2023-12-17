const Input = ({ placeholder, type, name, onChange }) => {
  return (
    <input
      className="h-10 w-[388px] border p-6 outline-none rounded-3xl font-light"
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}

    />
  );
};

export default Input;
