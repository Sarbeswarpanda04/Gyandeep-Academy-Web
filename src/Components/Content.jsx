import { useState } from "react";
import "./Content.css";

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.9 5.8L20 10.7l-5.2 3.7L16.7 20 12 16.5 7.3 20l1.9-5.6L4 10.7l6.1-1.9Z" />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const highlights = [
  {
    title: "Clear foundations",
    description: "Make room for understanding, practice, and steady progress.",
    Icon: SparkIcon,
  },
  {
    title: "Curiosity encouraged",
    description: "Ask questions, explore ideas, and learn with confidence.",
    Icon: CompassIcon,
  },
  {
    title: "Ready for what’s next",
    description: "Build skills that help students move forward with purpose.",
    Icon: TargetIcon,
  },
];

const classes = [
  { name: "Class 5", title: "Spark early curiosity", track: "Foundation" },
  { name: "Class 6", title: "Build strong foundations", track: "Foundation" },
  { name: "Class 7", title: "Learn through discovery", track: "Foundation" },
  { name: "Class 8", title: "Grow skills and confidence", track: "Pre-Board" },
  { name: "Class 9", title: "Prepare for new challenges", track: "Board Track" },
  { name: "Class 10", title: "Take the next step with confidence", track: "Board Track" },
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
  const [failedTeachers, setFailedTeachers] = useState({});

  const markTeacherImageFailed = (teacherName) => {
    setFailedTeachers((prev) =>
      prev[teacherName] ? prev : { ...prev, [teacherName]: true }
    );
  };

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
          {highlights.map(({ title, description, Icon }, index) => (
            <article className="highlight-card" key={title}>
              <div className="highlight-card__top">
                <span className="highlight-card__icon">
                  <Icon />
                </span>
                <span className="highlight-card__number" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
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
          <p className="section-copy">
            Dedicated mentors guiding students with clarity, patience, and
            consistent attention.
          </p>
        </div>

        <div className="teachers__grid">
          {teachers.map((teacher) => {
            const showPhoto =
              teacher.imageUrl && !failedTeachers[teacher.name];

            return (
              <article className="teacher-card" key={teacher.name}>
                <div className="teacher-card__portrait">
                  {showPhoto ? (
                    <img
                      src={teacher.imageUrl}
                      alt={teacher.name}
                      loading="lazy"
                      onError={() => markTeacherImageFailed(teacher.name)}
                    />
                  ) : (
                    <span
                      role="img"
                      aria-label={`Portrait placeholder for ${teacher.name}`}
                    >
                      {teacher.initials}
                    </span>
                  )}
                </div>
                <h3>{teacher.name}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="classes" id="classes" aria-labelledby="classes-title">
        <div className="section-wrap">
          <div className="classes__heading">
            <div>
              <p className="section-eyebrow">Learning for every next step</p>
              <h2 className="section-title" id="classes-title">
                Classes <span>5 to 10</span>
              </h2>
            </div>
            <p className="section-copy">
              Structured coaching for CBSE and BSE students from Class 5 through
              Class 10.
            </p>
          </div>

          <div className="classes__grid">
            {classes.map((item, index) => (
              <article className="class-card" key={item.name}>
                <div className="class-card__top">
                  <span className="class-card__index">0{index + 1}</span>
                  <span className="class-card__pill">
                    <BookIcon />
                    {item.track}
                  </span>
                </div>
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
            Visit Gyandeep Academy or get in touch to learn more about classes,
            batches, and admissions.
          </p>

          <div className="contact__cards">
            <div className="contact__card">
              <span className="contact__card-icon">
                <MapPinIcon />
              </span>
              <div className="contact__card-body">
                <span className="contact__card-label">Address</span>
                <strong>Gyandeep Academy</strong>
                <span className="contact__card-sub">Khordha, Odisha, India</span>
              </div>
            </div>

            <a
              className="contact__card contact__card--link"
              href="mailto:gyandeep.ac.khordha@gmail.com"
            >
              <span className="contact__card-icon">
                <MailIcon />
              </span>
              <div className="contact__card-body">
                <span className="contact__card-label">Email</span>
                <strong>gyandeep.ac.khordha@gmail.com</strong>
              </div>
            </a>

            <div className="contact__card">
              <span className="contact__card-icon">
                <WhatsAppIcon />
              </span>
              <div className="contact__card-body">
                <span className="contact__card-label">WhatsApp</span>
                <div className="contact__whatsapp-links">
                  <a
                    href="https://wa.me/916370464705"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 6370464705
                  </a>
                  <a
                    href="https://wa.me/918342916384"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 8342916384
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            className="contact__directions"
            href="https://www.google.com/maps/search/?api=1&query=Gyandeep+Academy+Khordha"
            target="_blank"
            rel="noopener noreferrer"
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