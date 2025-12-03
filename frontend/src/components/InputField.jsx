const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error
}) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default InputField;
