import './AboutMe.css';
import avatar from '../../images/avatar.png';
import SectionHeader from '../SectionHeader/SectionHeader';

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <SectionHeader text="Студент" />
      <div className="about-me__container">
        <div>
          <h2 className="about-me__name">Виталий</h2>
          <p className="about-me__title">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__info">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__github"
            href="https://github.com/BuyanauskasAA"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар" />
      </div>
    </section>
  );
}

export default AboutMe;
