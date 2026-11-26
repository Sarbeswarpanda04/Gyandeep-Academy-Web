import { useEffect, useRef } from "react";
import "./AdmissionModal.css";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const AdmissionModal = ({ onClose }) => {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])'
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const guardianName = formData.get("guardianName").trim();
    const studentName = formData.get("studentName").trim();
    const phone = formData.get("phone").trim();
    const classNumber = formData.get("class");
    const board = formData.get("board");

    const message = [
      "New admission enquiry - Gyandeep Academy, Khordha",
      "",
      `Parent/Guardian name: ${guardianName}`,
      `Student name: ${studentName}`,
      `Phone number: ${phone}`,
      `Admission for: Class ${classNumber} (${board})`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/918342916384?text=${encodeURIComponent(message)}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(whatsappUrl);
    }
    onClose();
  };

  return (
    <div
      className="admission-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="admission-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admission-title"
        aria-describedby="admission-description"
        ref={dialogRef}
      >
        <button
          className="admission-modal__close"
          type="button"
          aria-label="Close admission enquiry"
          onClick={onClose}
          ref={closeButtonRef}
        >
          ×
        </button>

        <div className="admission-modal__badge">
          <BookIcon />
          <span>Gyandeep Academy · Khordha</span>
        </div>

        <h2 id="admission-title">Start your admission enquiry</h2>
        <p className="admission-modal__description" id="admission-description">
          Share a few details and we’ll be ready to guide you on batches,
          timings, and admission steps.
        </p>

        <form className="admission-form" onSubmit={handleSubmit}>
          <label>
            Parent or guardian name
            <input
              name="guardianName"
              autoComplete="name"
              placeholder="Enter parent or guardian name"
              required
            />
          </label>

          <label>
            Student name
            <input
              name="studentName"
              autoComplete="off"
              placeholder="Enter student full name"
              required
            />
          </label>

          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. +91 98765 43210"
              pattern="[0-9+() -]{7,20}"
              title="Enter a phone number with 7 to 20 digits or phone symbols."
              required
            />
          </label>

          <div className="admission-form__row">
            <label>
              Class
              <select name="class" defaultValue="" required>
                <option value="" disabled>
                  Select class
                </option>
                {[5, 6, 7, 8, 9, 10].map((classNumber) => (
                  <option value={classNumber} key={classNumber}>
                    Class {classNumber}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Board
              <select name="board" defaultValue="" required>
                <option value="" disabled>
                  Select board
                </option>
                <option value="CBSE">CBSE</option>
                <option value="BSE">BSE (Odia Medium)</option>
              </select>
            </label>
          </div>

          <button className="admission-form__submit" type="submit">
            <WhatsAppIcon />
            <span>Continue to WhatsApp</span>
            <span className="admission-form__arrow" aria-hidden="true">→</span>
          </button>

          <p className="admission-form__note">
            Opens WhatsApp with your enquiry details pre-filled.
          </p>
        </form>
      </section>
    </div>
  );
};

export default AdmissionModal;