import type { FormInputType } from '../types/form.types'

interface Props {
  id: string
  name: string
  type?: FormInputType
  label: string
  placeholder: string
  autoComplete?: string
  required?: boolean
  minLength?: number
  requiredMsg?: string
  invalidMsg?: string
  successMsg?: string
}

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
}: Props) {
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
