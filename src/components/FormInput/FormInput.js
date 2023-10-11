import './FormInput.css';

function FormInput({ name, type, text }) {
  return (
    <>
      <label className="form-label" htmlFor={name}>
        {text}
      </label>
      <input className="form-input" id={name} name={name} type={type} required />
    </>
  );
}

export default FormInput;
