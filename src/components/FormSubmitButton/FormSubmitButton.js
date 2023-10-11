import './FormSubmitButton.css';

function FormSubmitButton({ text }) {
  return (
    <button className="form-submit-button" type="submit">
      {text}
    </button>
  );
}

export default FormSubmitButton;
