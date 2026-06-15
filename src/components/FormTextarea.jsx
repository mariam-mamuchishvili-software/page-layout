export default function FormTextarea({
  id,
  name,
  label,
  placeholder,
  rows,
  required,
  minLength,
  requiredMsg,
  invalidMsg,
  successMsg,
}) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{label}</label>
      <textarea
        className="form-input form-textarea"
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        minLength={minLength}
      />
      {requiredMsg && <span className="form-message form-message--required">{requiredMsg}</span>}
      {invalidMsg && <span className="form-message form-message--invalid">{invalidMsg}</span>}
      {successMsg && <span className="form-message form-message--success">{successMsg}</span>}
    </div>
  )
}
