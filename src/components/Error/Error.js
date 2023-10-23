import './Error.css';

function Error({ isActive, text }) {
  return <p className={`error ${isActive ? 'error_active' : ''}`}>{text}</p>;
}

export default Error;
