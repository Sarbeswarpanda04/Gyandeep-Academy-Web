import "./Content.css";

const highlights = [
  {
    title: "Clear foundations",
    description: "Make room for understanding, practice, and steady progress.",
  },
  {
    title: "Curiosity encouraged",
    description: "Ask questions, explore ideas, and learn with confidence.",
  },
  {
    title: "Ready for what’s next",
    description: "Build skills that help students move forward with purpose.",
  },
];

const classes = [
  { name: "Class 6", title: "Build strong foundations" },
  { name: "Class 7", title: "Learn through discovery" },
  { name: "Class 8", title: "Grow skills and confidence" },
  { name: "Class 9", title: "Prepare for new challenges" },
  { name: "Class 10", title: "Take the next step with confidence" },
];

const teachers = [
  { name: "Avijit Panda", initials: "AP", imageUrl: "./Teachers/Avijit-panda.png" },
  { name: "Sarbeswar Panda", initials: "SP", imageUrl: "./Teachers/Sarbeswar-panda.png" },
  { name: "Gyanaranjan Panda", initials: "GP", imageUrl: "./Teachers/Gyanaranjan-panda.png" },
  { name: "Chumki Behera", initials: "CB", imageUrl: "./Teachers/Chumki-behera.png" },
  { name: "Bishnupriya Panda", initials: "BP", imageUrl: "./Teachers/Bishnupriya-panda.png" },
  { name: "Sandhyarani Panda", initials: "SP", imageUrl: "./Teachers/Sandhyarani-panda.png" },
];

const Content = ({ onAdmissionClick }) => {
  return (
    <>
      <section className="about section-wrap" id="about" aria-labelledby="about-title">
        <div className="about__intro">
          <p className="section-eyebrow">Welcome to Gyandeep Academy</p>
          <h2 className="section-title" id="about-title">
            A supportive place to <span>learn and grow.</span>
          </h2>
          <p className="section-copy">
            Every student deserves a place where questions are encouraged and
            progress is celebrated. We help learners build strong foundations,
            develop confidence, and take pride in every step forward.
          </p>
        </div>
        <div className="about__highlights">
          {highlights.map((highlight, index) => (
            <article className="highlight-card" key={highlight.title}>
              <span className="highlight-card__number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="teachers section-wrap" id="teachers" aria-labelledby="teachers-title">
        <div className="teachers__intro">
          <p className="section-eyebrow">Our faculty</p>
          <h2 className="section-title" id="teachers-title">
            Meet our <span>teachers.</span>
          </h2>
        </div>
        <div className="teachers__grid">
          {teachers.map((teacher) => (
            <article className="teacher-card" key={teacher.name}>
              <div className="teacher-card__portrait">
                {teacher.imageUrl ? (
                  <img src={teacher.imageUrl} alt={teacher.name} />
                ) : (
                  <span role="img" aria-label={`Placeholder portrait for ${teacher.name}`}>
                    {teacher.initials}
                  </span>
                )}
              </div>
              <h3>{teacher.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="classes" id="classes" aria-labelledby="classes-title">
        <div className="section-wrap">
          <div className="classes__heading">
            <div>
              <p className="section-eyebrow">Learning for every next step</p>
              <h2 className="section-title" id="classes-title">
                Classes <span>6 to 10</span>
              </h2>
            </div>
            <p className="section-copy">
              A welcoming learning environment for students from Class 6 through
              Class 10.
            </p>
          </div>
          <div className="classes__grid">
            {classes.map((item, index) => (
              <article className="class-card" key={item.name}>
                <span className="class-card__index">0{index + 1}</span>
                <p>{item.name}</p>
                <h3>{item.title}</h3>
                <span className="class-card__line" aria-hidden="true" />
              </article>
            ))}
          </div>
          <button
            className="content-cta"
            type="button"
            onClick={onAdmissionClick}
          >
            Ask about admissions <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
        <div className="contact__info">
          <p className="section-eyebrow">Come say hello</p>
          <h2 className="section-title" id="contact-title">
            Find us in <span>Khordha.</span>
          </h2>
          <p className="section-copy">
            Visit Gyandeep Academy or get in touch to learn more about classes
            and admissions.
          </p>
          <p className="contact__address">
            <strong>Gyandeep Academy</strong>
            <span>Khordha, Odisha, India</span>
          </p>
          <a
            className="contact__directions"
            href="https://www.google.com/maps/search/?api=1&query=Gyandeep+Academy+Khordha"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact__map">
          <iframe
            title="Map showing Gyandeep Academy in Khordha"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.573724967314!2d85.63332499947224!3d20.1796329830624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19ad57067d40c9%3A0xd909226a27691bb7!2sGyandeep%20Academy%20Khordha!5e1!3m2!1sen!2sin!4v1794925283749!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
};

export default Content;
