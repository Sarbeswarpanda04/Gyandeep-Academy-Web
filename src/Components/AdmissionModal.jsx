import { useEffect, useRef } from "react";
import "./AdmissionModal.css";

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
    const message = [
      "New admission enquiry - Gyandeep Academy, Khordha",
      "",
      `Parent/Guardian name: ${guardianName}`,
      `Student name: ${studentName}`,
      `Phone number: ${phone}`,
      `Admission for: Class ${classNumber}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/918342916384?text=${encodeURIComponent(message)}`;

    window.location.assign(whatsappUrl);
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
        <p className="admission-modal__eyebrow">Gyandeep Academy · Khordha</p>
        <h2 id="admission-title">Start your admission enquiry</h2>
        <p className="admission-modal__description" id="admission-description">
          Share a few details and we’ll be ready to help with the next steps.
        </p>

        <form className="admission-form" onSubmit={handleSubmit}>
          <label>
            Parent or guardian name
            <input name="guardianName" autoComplete="name" required />
          </label>
          <label>
            Student name
            <input name="studentName" autoComplete="off" required />
          </label>
          <div className="admission-form__row">
            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                pattern="[0-9+() -]{7,20}"
                title="Enter a phone number with 7 to 20 digits or phone symbols."
                required
              />
            </label>
            <label>
              Class
              <select name="class" defaultValue="" required>
                <option value="" disabled>Select class</option>
                {[6, 7, 8, 9, 10].map((classNumber) => (
                  <option value={classNumber} key={classNumber}>
                    Class {classNumber}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className="admission-form__submit" type="submit">
            Continue to WhatsApp <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdmissionModal;
