import "./Books.css";

const classNumbers = [6, 7, 8, 9, 10];
const books = [
  {
    classNumber: 10,
    title: "Odia (ସାହିତ୍ୟ)",
    thumbnail: "/book-thumbnails/Class-10/Sahitya-sindhu-class-10.webp",
    file: "/books/Class-10/Sahitya-sindhu-class-10-odia.pdf",
    fileName: "Class-10-Odia.pdf",
  },
  {
    classNumber: 10,
    title: "Odia Grammar",
    thumbnail: "/book-thumbnails/Class-10/Odia-grammar-class-10.webp",
    file: "/books/Class-10/Odia-grammar-class-10.pdf",
    fileName: "Class-10-Odia-Grammar.pdf",
  },
  {
    classNumber: 10,
    title: "English",
    thumbnail: "/book-thumbnails/Class-10/English-class-10.webp",
    file: "/books/Class-10/English-class-10.pdf",
    fileName: "Class-10-English.pdf",
  },
  {
    classNumber: 10,
    title: "English Grammar",
    thumbnail: "/book-thumbnails/Class-10/English-grammar-class-10.webp",
    file: "/books/Class-10/English-grammar-class-10.pdf",
    fileName: "Class-10-English-Grammar.pdf",
  },
  {
    classNumber: 10,
    title: "Hindi Saurabh (हिंदी सौरभ)",
    thumbnail: "/book-thumbnails/Class-10/hindi-saurabh.webp",
    file: "/books/Class-10/hindi-saurabh.pdf",
    fileName: "Class-10-Hindi-Saurabh.pdf",
  },
  {
    classNumber: 10,
    title: "Hindi Grammar",
    thumbnail: "/book-thumbnails/Class-10/hindi-grammar.webp",
    file: "/books/Class-10/hindi-grammar.pdf",
    fileName: "Class-10-Hindi-Grammar.pdf",
  },
  {
    classNumber: 10,
    title: "Sanskrit Saurav",
    thumbnail: "/book-thumbnails/Class-10/sanskrit-saurav.webp",
    file: "/books/Class-10/sanskrit-saurav.pdf",
    fileName: "Class-10-Sanskrit-Saurav.pdf",
  },
  {
    classNumber: 10,
    title: "Sanskrit Grammar",
    thumbnail: "/book-thumbnails/Class-10/sanskrit-grammar.webp",
    file: "/books/Class-10/sanskrit-grammar.pdf",
    fileName: "Class-10-Sanskrit-Grammar.pdf",
  },
  {
    classNumber: 10,
    title: "Algebra (ବୀଜଗଣିତ)",
    thumbnail: "/book-thumbnails/Class-10/algebra.webp",
    file: "/books/Class-10/algebra.pdf",
    fileName: "Class-10-Algebra.pdf",
  },
  {
    classNumber: 10,
    title: "Geometry (ଜ୍ୟାମିତି)",
    thumbnail: "/book-thumbnails/Class-10/geometry.webp",
    file: "/books/Class-10/geometry.pdf",
    fileName: "Class-10-Geometry.pdf",
  },
  {
    classNumber: 10,
    title: "Physical Science (ଭୌତିକ ବିଜ୍ଞାନ)",
    thumbnail: "/book-thumbnails/Class-10/physical-science.webp",
    file: "/books/Class-10/physical-science.pdf",
    fileName: "Class-10-Physical-Science.pdf",
  },
  {
    classNumber: 10,
    title: "Life Science (ଜୀବ ବିଜ୍ଞାନ)",
    thumbnail: "/book-thumbnails/Class-10/life-science.webp",
    file: "/books/Class-10/life-science.pdf",
    fileName: "Class-10-Life-Science.pdf",
  },
  {
    classNumber: 10,
    title: "History (ଇତିହାସ)",
    thumbnail: "/book-thumbnails/Class-10/history.webp",
    file: "/books/Class-10/history.pdf",
    fileName: "Class-10-History.pdf",
  },
  {
    classNumber: 10,
    title: "Geography (ଭୂଗୋଳ)",
    thumbnail: "/book-thumbnails/Class-10/geography.webp",
    file: "/books/Class-10/geography.pdf",
    fileName: "Class-10-Geography.pdf",
  },
  {
    classNumber: 10,
    title: "Syllabus 2026-27",
    thumbnail: "/book-thumbnails/Class-10/syllabus-2026-27.webp",
    file: "/books/Class-10/syllabus-2026-27.pdf",
    fileName: "Class-10-Syllabus-2026-27.pdf",
  },
];

const Books = ({ selectedClass, onSelectClass }) => {
  const selectedBooks = books.filter((book) => book.classNumber === selectedClass);

  return (
    <section className="books-page" id="books" aria-labelledby="books-title">
      <div className="books-page__content">
        <p className="books-page__eyebrow">Gyandeep Academy library</p>
        <h1 className="books-page__title" id="books-title">
          Books for every <span>class.</span>
        </h1>
        <p className="books-page__description">
          Choose your class to browse available books and learning resources.
        </p>

        <div
          className="books-page__classes"
          role="group"
          aria-label="Select a class"
        >
          {classNumbers.map((classNumber) => (
            <a
              className={`books-page__class${selectedClass === classNumber ? " books-page__class--selected" : ""}`}
              href={`/books/class-${classNumber}/`}
              key={classNumber}
              aria-current={selectedClass === classNumber ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                onSelectClass(classNumber);
              }}
            >
              Class {classNumber}
            </a>
          ))}
        </div>

        <div className="books-page__results" aria-live="polite">
          <div className="books-page__results-heading">
            <h2>
              {selectedClass ? `Class ${selectedClass} books` : "Choose a class"}
            </h2>
            {selectedClass !== null && (
              <span>
                {selectedBooks.length} {selectedBooks.length === 1 ? "book" : "books"}
              </span>
            )}
          </div>

          {selectedBooks.length > 0 ? (
            <div className="books-page__grid">
              {selectedBooks.map((book) => (
                <article className="book-card" key={`${book.classNumber}-${book.title}`}>
                  <div className="book-card__cover">
                    <img src={book.thumbnail} alt="" loading="lazy" />
                  </div>
                  <div className="book-card__details">
                    <p className="book-card__class">Class {book.classNumber}</p>
                    <h3>{book.title}</h3>
                    {book.description && <p>{book.description}</p>}
                    <a
                      className="book-card__download"
                      href={book.file}
                      download={book.fileName || book.title}
                    >
                      Download<span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="books-page__empty">
              <span className="books-page__empty-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 13.5c-5.2-4.1-11.2-4.4-17-2.8v24.1c5.8-1.6 11.8-1.3 17 2.8m0-24.1c5.2-4.1 11.2-4.4 17-2.8v24.1c-5.8-1.6-11.8-1.3-17 2.8m0-24.1v24.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {selectedClass ? (
                <>
                  <h3>No books available yet</h3>
                  <p>
                    Books for Class {selectedClass} will appear here when they
                    are added to the library.
                  </p>
                </>
              ) : (
                <>
                  <h3>Select a class to get started</h3>
                  <p>Choose one of the classes above to view its book resources.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Books;
