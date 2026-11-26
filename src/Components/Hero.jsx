import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import "./Hero.css";

const heroImages = Object.values(
  import.meta.glob("../assets/Hero/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  })
).slice(0, 10);

const instituteId = import.meta.env.VITE_INSTITUTE_ID;
const studentBucket =
  import.meta.env.VITE_SUPABASE_STUDENT_BUCKET || "student-photos";

const resolvePhotoUrl = (photoPath) => {
  if (!photoPath) return "";
  if (/^https?:\/\//i.test(photoPath)) return photoPath;
  if (!supabase) return "";

  const cleanPath = photoPath.replace(/^\/+/, "");
  const { data } = supabase.storage
    .from(studentBucket)
    .getPublicUrl(cleanPath);

  return data?.publicUrl || "";
};

const Hero = ({ onAdmissionClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [students, setStudents] = useState([]);
  const [failedPhotos, setFailedPhotos] = useState({});
  const touchStartX = useRef(null);

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

  useEffect(() => {
    if (!supabase || !instituteId) return undefined;

    let isMounted = true;

    const loadStudents = async () => {
      const { data, error } = await supabase.rpc("get_public_hero_students", {
        p_institute_id: instituteId,
      });

      if (error) {
        console.error("Failed to load hero students:", error.message);
        return;
      }

      if (isMounted && Array.isArray(data)) {
        const formatted = data.map((student) => {
          const firstName = student.first_name?.trim() || "Student";
          return {
            id: student.id,
            firstName,
            initial: firstName.charAt(0).toUpperCase(),
            photoUrl: resolvePhotoUrl(student.photo_path),
          };
        });

        setStudents(formatted);
      }
    };

    loadStudents();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || heroImages.length < 2) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 40) return;

    setActiveSlide((currentSlide) =>
      deltaX < 0
        ? (currentSlide + 1) % heroImages.length
        : (currentSlide - 1 + heroImages.length) % heroImages.length
    );
  };

  const markPhotoFailed = (studentId) => {
    setFailedPhotos((prev) =>
      prev[studentId] ? prev : { ...prev, [studentId]: true }
    );
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div
        className="hero__carousel"
        role="group"
        aria-label="Featured images"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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

      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span aria-hidden="true" />
          Learning begins with inspiration
        </p>
        <h1 id="hero-title">
          Gyandeep Academy <span>Khordha.</span>
        </h1>
        <p className="hero__description">
          Coaching classes in Khordha for Classes 5–10 (CBSE and BSE).
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
      </div>

      {students.length > 0 && (
        <div className="hero__marquee" aria-label="Our students">
                  <p className="hero__students-label" aria-hidden="true">
          Our Students.
        </p>
          <div className="hero__marquee-track">
            {[0, 1].map((copyIndex) => (
              <div
                className="hero__marquee-group"
                key={copyIndex}
                aria-hidden={copyIndex === 1}
              >
                {students.map((student) => {
                  const showPhoto =
                    student.photoUrl && !failedPhotos[student.id];

                  return (
                    <div
                      className="hero__student"
                      key={`${copyIndex}-${student.id}`}
                    >
                      {showPhoto ? (
                        <img
                          className="hero__student-avatar"
                          src={student.photoUrl}
                          alt={copyIndex === 0 ? student.firstName : ""}
                          loading="lazy"
                          onError={() => markPhotoFailed(student.id)}
                        />
                      ) : (
                        <span
                          className="hero__student-avatar hero__student-avatar--fallback"
                          aria-hidden="true"
                        >
                          {student.initial}
                        </span>
                      )}
                      <span className="hero__student-name">
                        {student.firstName}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;