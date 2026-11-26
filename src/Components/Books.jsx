import { useState } from "react";
import "./Books.css";

const classNumbers = [6, 7, 8, 9, 10];

const books = [
  // Class 6
  {
    classNumber: 6,
    title: "English (Jasmine)",
    thumbnail: "/book-thumbnails/Class-6/class-6-english-jasmine.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/English_Jashmine-6_Web.pdf",
    fileName: "Class-6-English-Jasmine.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Hindi (Kalika)",
    thumbnail: "/book-thumbnails/Class-6/class-6-hindi-kalika.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Hindi_Kalika_C-6_FINAL_Web.pdf",
    fileName: "Class-6-Hindi-Kalika.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Computer Education (Hindi)",
    thumbnail: "/book-thumbnails/Class-6/computer.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Computer-I-VI-Hindi.pdf",
    fileName: "Class-6-Computer.pdf",
    source: "OSEPA Official",
  },

  // Class 7
  {
    classNumber: 7,
    title: "English (Jasmine)",
    thumbnail: "/book-thumbnails/Class-7/class-7-english-jasmine.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Jasmine_VII-P_1-232_Web.pdf",
    fileName: "Class-7-English-Jasmine.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Hindi",
    thumbnail: "/book-thumbnails/Class-7/class-7-hindi.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Hindi_Class_7_Final_Web.pdf",
    fileName: "Class-7-Hindi.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Meri Hindi Pustak",
    thumbnail: "/book-thumbnails/Class-7/class-7-meri-hindi.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Meri-Hindi-Pustak-P-1-88_compressed.pdf",
    fileName: "Class-7-Meri-Hindi-Pustak.pdf",
    source: "OSEPA Official",
  },

  // Class 8
  {
    classNumber: 8,
    title: "English (Jasmine)",
    thumbnail: "/book-thumbnails/Class-8/english-jasmine.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/revised_books/Jasmine_(Class-VIII).pdf",
    fileName: "Class-8-English-Jasmine.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Stories Past and Present",
    thumbnail: "/book-thumbnails/Class-8/stories-past-present.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Stories-Past-and-Present.pdf",
    fileName: "Class-8-Stories-Past-and-Present.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "A New Approach to English",
    thumbnail: "/book-thumbnails/Class-8/new-approach-english.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/A-New-Approach-to-English-(-1-168-).pdf",
    fileName: "Class-8-New-Approach-English.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Hindi (Kalika)",
    thumbnail: "/book-thumbnails/Class-8/hindi-kalika.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Hindi_Kalika_Final_2025_Web.pdf",
    fileName: "Class-8-Hindi-Kalika.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Saral Hindi Byakaran",
    thumbnail: "/book-thumbnails/Class-8/hindi-grammar.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Saral-Hindi-Byakaran-Class-8.pdf",
    fileName: "Class-8-Hindi-Grammar.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Algebra (Hindi)",
    thumbnail: "/book-thumbnails/Class-8/algebra.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Algebra_Hindi.pdf",
    fileName: "Class-8-Algebra.pdf",
    source: "OSEPA Official",
  },

  // Class 9
  {
    classNumber: 9,
    title: "English (Skills of Communicative English)",
    thumbnail: "/book-thumbnails/Class-9/english.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/80%20-%20OD_ENGLISH_ENGLISH_CLASS9_TERM1.pdf",
    fileName: "Class-9-English.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "English Grammar (Learn & Practise)",
    thumbnail: "/book-thumbnails/Class-9/english-grammar.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/79%20-%20OD_ENGLISH_ENGLISHGRAMMAR_CLASS9_TERM1.pdf",
    fileName: "Class-9-English-Grammar.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Hindi (Manjari)",
    thumbnail: "/book-thumbnails/Class-9/hindi.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/83%20-%20OD_HINDI_HINDI_CLASS9_TERM1.pdf",
    fileName: "Class-9-Hindi-Manjari.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Hindi Grammar",
    thumbnail: "/book-thumbnails/Class-9/hindi-grammar.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/84%20-%20OD_HINDI_HINDIGRAMMAR_CLASS9_TERM1.pdf",
    fileName: "Class-9-Hindi-Grammar.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Odia (ସାହିତ୍ୟ)",
    thumbnail: "/book-thumbnails/Class-10/Sahitya-sindhu-class-10.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/10th-01A-MIL_Odia_Class_X.pdf",
    fileName: "Class-10-Odia.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Odia Grammar",
    thumbnail: "/book-thumbnails/Class-10/Odia-grammar-class-10.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/92%20-%20OD_ODIA_ODIAGRAMMAR_CLASS10_TERM1.pdf",
    fileName: "Class-10-Odia-Grammar.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "English",
    thumbnail: "/book-thumbnails/Class-10/English-class-10.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/10th-02A-English_Text_Class_X.pdf",
    fileName: "Class-10-English.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "English Grammar",
    thumbnail: "/book-thumbnails/Class-10/English-grammar-class-10.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/94%20-%20OD_ENGLISH_ENGLISHGRAMMAR_CLASS10_TERM1.pdf",
    fileName: "Class-10-English-Grammar.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Hindi Saurabh (हिंदी सौरभ)",
    thumbnail: "/book-thumbnails/Class-10/hindi-saurabh.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/97%20-%20OD_HINDI_HINDI_CLASS10_TERM1.pdf",
    fileName: "Class-10-Hindi-Saurabh.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Hindi Grammar",
    thumbnail: "/book-thumbnails/Class-10/hindi-grammar.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/98%20-%20OD_HINDI_HINDIGRAMMAR_CLASS10_TERM1.pdf",
    fileName: "Class-10-Hindi-Grammar.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Sanskrit Saurav",
    thumbnail: "/book-thumbnails/Class-10/sanskrit-saurav.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/95%20-%20OD_SANSKRIT_SANSKRITLANGUAGE_CLASS10_TERM1.pdf",
    fileName: "Class-10-Sanskrit-Saurav.pdf",
    source: "OSEPA Official",
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
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/99%20-%20OD_ODIA_MATH_CLASS10_TERM1.pdf",
    fileName: "Class-10-Algebra.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Geometry (ଜ୍ୟାମିତି)",
    thumbnail: "/book-thumbnails/Class-10/geometry.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/100%20-%20OD_ODIA_GEOMETRY_CLASS10_TERM1.pdf",
    fileName: "Class-10-Geometry.pdf",
    source: "OSEPA Official",
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
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/103%20-%20OD_ODIA_HISTORYCIVICS_CLASS10_TERM1.pdf",
    fileName: "Class-10-History.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Geography (ଭୂଗୋଳ)",
    thumbnail: "/book-thumbnails/Class-10/geography.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/104%20-%20OD_ODIA_GEOGRAPHYECONOMICS_CLASS10_TERM1.pdf",
    fileName: "Class-10-Geography.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Syllabus 2026-27",
    thumbnail: "/book-thumbnails/Class-10/syllabus-2026-27.webp",
    file: "/books/Class-10/syllabus-2026-27.pdf",
    fileName: "Class-10-Syllabus-2026-27.pdf",
  },
];

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Books = ({ selectedClass, onSelectClass }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [failedCovers, setFailedCovers] = useState({});

  const activeClass = selectedClass ?? 10;
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const classBooks = books.filter((book) => book.classNumber === activeClass);
  const filteredBooks = normalizedQuery
    ? classBooks.filter((book) =>
        book.title.toLowerCase().includes(normalizedQuery)
      )
    : classBooks;

  const markCoverFailed = (key) => {
    setFailedCovers((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  };

  return (
    <section className="books-page" id="books" aria-labelledby="books-title">
      <div className="books-hero">
        <div className="books-hero__inner">
          <div className="books-hero__badge">
            <BookIcon />
            <span>Gyandeep Academy Library</span>
          </div>

          <h1 className="books-hero__title" id="books-title">
            Books for every <span>class.</span>
          </h1>
          <p className="books-hero__description">
            Browse textbooks and study resources by class, or search directly by
            subject name.
          </p>

          <div className="books-hero__controls">
            <div className="books-search">
              <span className="books-search__icon">
                <SearchIcon />
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={`Search Class ${activeClass} books (e.g. Odia, Algebra, Science)...`}
                aria-label="Search books by title"
              />
              {searchQuery && (
                <button
                  className="books-search__clear"
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery("")}
                >
                  ×
                </button>
              )}
            </div>

            <div
              className="books-page__classes"
              role="group"
              aria-label="Select a class"
            >
              {classNumbers.map((classNumber) => (
                <a
                  className={`books-page__class${
                    activeClass === classNumber ? " books-page__class--selected" : ""
                  }`}
                  href={`/books/class-${classNumber}/`}
                  key={classNumber}
                  aria-current={activeClass === classNumber ? "page" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    onSelectClass?.(classNumber);
                  }}
                >
                  Class {classNumber}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="books-page__content">
        <div className="books-page__results" aria-live="polite">
          <div className="books-page__results-heading">
            <h2>Class {activeClass} books</h2>
            <span>
              {filteredBooks.length}{" "}
              {filteredBooks.length === 1 ? "book" : "books"}
              {normalizedQuery ? ` matching “${searchQuery.trim()}”` : ""}
            </span>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="books-page__grid">
              {filteredBooks.map((book) => {
                const bookKey = `${book.classNumber}-${book.title}`;
                const isExternal = /^https?:\/\//i.test(book.file);
                const showCover = book.thumbnail && !failedCovers[bookKey];

                return (
                  <article className="book-card" key={bookKey}>
                    <div className="book-card__cover">
                      {showCover ? (
                        <img
                          src={book.thumbnail}
                          alt={book.title}
                          loading="lazy"
                          onError={() => markCoverFailed(bookKey)}
                        />
                      ) : (
                        <div className="book-card__cover-fallback" aria-hidden="true">
                          <BookIcon />
                          <span>{book.title}</span>
                        </div>
                      )}
                      {book.source && (
                        <span className="book-card__source">{book.source}</span>
                      )}
                    </div>

                    <div className="book-card__details">
                      <p className="book-card__class">Class {book.classNumber}</p>
                      <h3>{book.title}</h3>
                      {book.description && <p>{book.description}</p>}

                      <a
                        className="book-card__download"
                        href={book.file}
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : { download: book.fileName || book.title })}
                      >
                        {isExternal ? "Open PDF" : "Download"}
                        <span aria-hidden="true">{isExternal ? "↗" : "↓"}</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="books-page__empty">
              <span className="books-page__empty-icon" aria-hidden="true">
                <BookIcon />
              </span>
              {normalizedQuery ? (
                <>
                  <h3>No matching books found</h3>
                  <p>
                    No books in Class {activeClass} match “{searchQuery.trim()}”.
                  </p>
                  <button
                    className="books-page__reset"
                    type="button"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear search
                  </button>
                </>
              ) : (
                <>
                  <h3>No books available yet</h3>
                  <p>
                    Books for Class {activeClass} will appear here when they are
                    added to the library.
                  </p>
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