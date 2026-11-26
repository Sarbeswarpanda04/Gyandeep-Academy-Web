import { useState } from "react";
import "./Books.css";

const classNumbers = [6, 7, 8, 9, 10];

const books = [
  // Class 6
  {
    classNumber: 6,
    title: "Odia — ସାହିତ୍ୟ ସୁଧା (Sahitya Sudha)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Sahitya_Sudha_Final_176_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "English (Jasmine)",
    thumbnail: "/book-thumbnails/Class-6/class-6-english-jasmine.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/English_Jashmine-6_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Math — ଗଣିତ ପ୍ରକାଶ (Ganita Prakash)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Math_Class_6_Final_18_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Science — ଜିଜ୍ଞାସା (Jigyansa)",
    thumbnail: "/book-thumbnails/Class-6/class-6-jingyasa-science.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Science-VI-P_1-264-18_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Social Science — ସାମାଜିକ ବିଜ୍ଞାନ (Bharat O Ama Pruthibi)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Social_Science-6-Final_232_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Hindi — ହିନ୍ଦୀ କଳିକା (Hindi Kalika)",
    thumbnail: "/book-thumbnails/Class-6/class-6-hindi-kalika.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Hindi_Kalika_C-6_FINAL_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Sanskrit — ସଂସ୍କୃତ କଳିକା - 1",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Sanskrit_Kalika_Cl-6_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Art — କଳାକୁଞ୍ଜ (Kalakunja)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Kalakunja_6th_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Physical Education — ଖେଳ ଶିକ୍ଷା",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Khela_Sikshya-VI-P_1-208_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Work Education — କୌଶଳ ବୋଧ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/Koshal_Bodh-VI_Final_176_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 6,
    title: "Urdu — ତଲାଶ୍ (Talash)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VI/6-urdu_Print.pdf",
    source: "OSEPA Official",
  },

  // Class 7
  {
    classNumber: 7,
    title: "Odia — ସାହିତ୍ୟ ସୁମନ (Sahitya Suman)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Sahitya_Suman-7_FINAL_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "English (Jasmine)",
    thumbnail: "/book-thumbnails/Class-7/class-7-english-jasmine.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Jasmine_VII-P_1-232_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Math — ଗଣିତ ପ୍ରକାଶ (Ganita Prakash)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Math_Class_7_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Science — ଜିଜ୍ଞାସା (Jigyansa)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Science-VII-P_1-200_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Social Science — ସାମାଜିକ ବିଜ୍ଞାନ (Bharat O Ama Pruthibi)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Social_Science-7_Final-312_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Hindi — ହିନ୍ଦୀ କଳିକା (Hindi Kalika)",
    thumbnail: "/book-thumbnails/Class-7/class-7-hindi-kalika.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Hindi_Class_7_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Sanskrit — ସଂସ୍କୃତ କଳିକା - 2",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Sanskrit_Class_7_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Art — କୃତି (Kruti)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Kala_Kruti-7_FINAL_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Physical Education — ଖେଳ ଶିକ୍ଷା",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Khel_Shikhya_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Work Education — କୌଶଳ ବୋଧ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/Koshalbodha_7_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 7,
    title: "Urdu — ତଲାଶ୍ (Talash)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VII/7-Urdu-print.pdf",
    source: "OSEPA Official",
  },

  // Class 8
  {
    classNumber: 8,
    title: "Odia — ସାହିତ୍ୟ ସୁରଭି (Sahitya Suravi)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Sahitya_Suravi-192_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "English (Jasmine)",
    thumbnail: "/book-thumbnails/Class-8/class-7-english-jasmine.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Eng-VIII_Jasmine_Final-P_1-264_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Math — ଗଣିତ ପ୍ରକାଶ (Ganita Prakash)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Math_VIII-P_1-192_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Science — ଜିଜ୍ଞାସା (Jigyansa)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Jigyansya_Class-8_248_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Social Science — ସାମାଜିକ ବିଜ୍ଞାନ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Social_Science-8-208_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Hindi — ହିନ୍ଦୀ କଳିକା (Hindi Kalika)",
    thumbnail: "/book-thumbnails/Class-8/class-8-hindi-kalika.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Hindi_Kalika_Final_2025_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Sanskrit — ସଂସ୍କୃତ କଳିକା - 3",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Sanskrit_Class_8_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Art — କୃତି (Kruti)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Kruti_Class_8_Final_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Physical Education — ଖେଳ ଶିକ୍ଷା",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Khela_Siskhya_inner_264_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Work Education — କୌଶଳ ବୋଧ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Koshal_Bodh_VIII_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Urdu — ତଲାଶ୍ (Talash)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/Urdu_Talas_8-152_Web.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 8,
    title: "Corrigendum for Class 8 Textbook",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-VIII/6350_merged.pdf",
    source: "OSEPA Official",
  },

  // Class 9
  {
    classNumber: 9,
    title: "Odia — ସାହିତ୍ୟ ଧାରା (Sahitya Dhara)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/77%20-%20OD_ODIA_MIL_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Odia Grammar — ମାଧ୍ୟମିକ ବ୍ୟାକରଣ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/78%20-%20OD_ODIA_ODIYAGRAMMAR_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "English (Skills of Communicative English)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/80%20-%20OD_ENGLISH_ENGLISH_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "English Grammar (Learn & Practice)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/79%20-%20OD_ENGLISH_ENGLISHGRAMMAR_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Sanskrit (Sanskruta Ballari)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/81%20-%20OD_SANSKRIT_SANSKRITLANGUAGE_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Sanskrit Grammar — ସଂସ୍କୃତ ବ୍ୟାକରଣ ପ୍ରଦୀପହ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/82%20-%20OD_ODIA_SANSKRITGRAMMAR_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Hindi (Hindi Manjari)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/83%20-%20OD_HINDI_HINDI_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Hindi Grammar (Byakaran aur Prayog)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/84%20-%20OD_HINDI_HINDIGRAMMAR_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Algebra — ମାଧ୍ୟମିକ ବୀଜଗଣିତ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/85%20-%20OD_ODIA_MATH_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Geometry — ମାଧ୍ୟମିକ ଜ୍ୟାମିତି",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/86%20-%20OD_ODIA_GEOMETRY_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Physical Science — ଭୌତିକ ବିଜ୍ଞାନ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/87%20-%20OD_ODIA_PHYSICALSCIENCE_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Life Science — ଜୀବ ବିଜ୍ଞାନ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/88%20-%20OD_ODIA_LIFESCIENCE_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "History & Civics — ଇତିହାସ ଓ ରାଜନୀତି ବିଜ୍ଞାନ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/89%20-%20OD_ODIA_HISTORYCIVICS_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 9,
    title: "Geography & Economics — ଭୂଗୋଳ ଓ ଅର୍ଥନୀତି",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-IX/90%20-%20OD_ODIA_GEOGRAPHYECONOMICS_CLASS9_TERM1.pdf",
    source: "OSEPA Official",
  },

  // Class 10
  {
    classNumber: 10,
    title: "Odia — ସାହିତ୍ୟ ସିନ୍ଧୁ (Sahitya Sindhu)",
    thumbnail: "/book-thumbnails/Class-10/Sahitya-sindhu-class-10.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/10th-01A-MIL_Odia_Class_X.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Odia Grammar — ମାଧ୍ୟମିକ ବ୍ୟାକରଣ",
    thumbnail: "/book-thumbnails/Class-10/Odia-grammar-class-10.webp",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/92%20-%20OD_ODIA_ODIAGRAMMAR_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "English (Skills of Communicative English)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/10th-02A-English_Text_Class_X.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "English Grammar (Learn & Practice)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/94%20-%20OD_ENGLISH_ENGLISHGRAMMAR_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Sanskrit (Sanskruta Sahitya Manjari)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/95%20-%20OD_SANSKRIT_SANSKRITLANGUAGE_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Sanskrit Grammar — ସଂସ୍କୃତ ବ୍ୟାକରଣ ପ୍ରକାଶହ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/96%20-%20OD_ODIA_SANSKRITGRAMMAR_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Hindi Saurav (हिंदी सौरभ)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/97%20-%20OD_HINDI_HINDI_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Hindi Grammar (Madhyamika Hindi Byakaran)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/98%20-%20OD_HINDI_HINDIGRAMMAR_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Algebra — ମାଧ୍ୟମିକ ବୀଜଗଣିତ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/99%20-%20OD_ODIA_MATH_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Geometry — ମାଧ୍ୟମିକ ଜ୍ୟାମିତି",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/100%20-%20OD_ODIA_GEOMETRY_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Physical Science — ଭୌତିକ ବିଜ୍ଞାନ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/101%20-%20OD_ODIA_PHYSICALSCIENCE_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Life Science — ଜୀବ ବିଜ୍ଞାନ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/102%20-%20OD_ODIA_LIFESCIENCE_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "History & Civics — ଇତିହାସ ଓ ରାଜନୀତି ବିଜ୍ଞାନ",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/103%20-%20OD_ODIA_HISTORYCIVICS_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Geography & Economics — ଭୂଗୋଳ ଓ ଅର୍ଥନୀତି",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/104%20-%20OD_ODIA_GEOGRAPHYECONOMICS_CLASS10_TERM1.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Geography & Economics (Additional Chapters)",
    file: "https://osepa.odisha.gov.in/upload/ebooks/CLASS-X/10th-06B-Geography(addl)%20Class%20X.pdf",
    source: "OSEPA Official",
  },
  {
    classNumber: 10,
    title: "Syllabus 2026-27",
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