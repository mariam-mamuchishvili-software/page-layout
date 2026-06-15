export default function FormInput({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  autoComplete,
  required,
  minLength,
  requiredMsg,
  invalidMsg,
  successMsg,
}) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        className="form-input"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
      />
      {requiredMsg && <span className="form-message form-message--required">{requiredMsg}</span>}
      {invalidMsg && <span className="form-message form-message--invalid">{invalidMsg}</span>}
      {successMsg && <span className="form-message form-message--success">{successMsg}</span>}
    </div>
  )
}
