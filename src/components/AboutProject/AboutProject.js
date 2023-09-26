import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h3 className="about-project__header">О проекте</h3>
      <div className="about-project__content">
        <div>
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__infographics">
        <div>
          <p className="about-project__item about-project__item_color_green">1 неделя</p>
          <p className="about-project__item about-project__item_color_black">Back-end</p>
        </div>
        <div>
          <p className="about-project__item about-project__item_color_grey">4 недели</p>
          <p className="about-project__item about-project__item_color_black">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
