import { useEffect, useState } from "react";
import "./Hero.css";

const heroImages = Object.values(
  import.meta.glob("../assets/Hero/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  })
).slice(0, 5);

const Hero = ({ onAdmissionClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (
      heroImages.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span aria-hidden="true" />
          Learning begins with inspiration
        </p>
        <h1 id="hero-title">
          Gyandeep Academy <span>Khordha.</span>
        </h1>
        <p className="hero__description">
          Coaching Classes in Khordha. for Class 5th to 10th CBSE and BSE.
        </p>
        <div className="hero__actions">
          <button
            className="hero__button hero__button--primary"
            type="button"
            onClick={onAdmissionClick}
          >
            Admission Now <span aria-hidden="true">→</span>
          </button>
          <a className="hero__button hero__button--secondary" href="#about">
            Discover Gyandeep
          </a>
        </div>
        <p className="hero__promise">
          A brighter day starts with a curious mind.
        </p>
      </div>

      <div className="hero__carousel" role="group" aria-label="Featured images">
        {heroImages.map((image, index) => (
          <img
            className={`hero__image${index === activeSlide ? " hero__image--active" : ""}`}
            key={image}
            src={image}
            alt={index === activeSlide ? "Gyandeep Academy students learning" : ""}
            aria-hidden={index !== activeSlide}
          />
        ))}
        {heroImages.length > 1 && (
          <div className="hero__indicators" aria-label="Featured image controls">
            {heroImages.map((image, index) => (
              <button
                className={`hero__indicator${index === activeSlide ? " hero__indicator--active" : ""}`}
                key={image}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
