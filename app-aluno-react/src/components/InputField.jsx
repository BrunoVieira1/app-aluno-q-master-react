export function InputField({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder,
  autoComplete,
  error,
  children,
}) {
  return (
    <div className="input-field">
      <label htmlFor={id} className="input-field__label">
        <span>{label}</span>
        {children}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {error && <p className="input-field__error">{error}</p>}
    </div>
  )
}
