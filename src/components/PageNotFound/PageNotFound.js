import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1, { replace: true });
  }

  return (
    <main className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <p onClick={goBack} className="page-not-found__link">
        Назад
      </p>
    </main>
  );
}

export default PageNotFound;
