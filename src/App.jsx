import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import AdmissionModal from "./Components/AdmissionModal";
import Books from "./Components/Books";
import NoticeBar from "./Components/Notice-bar";

const SITE_ORIGIN = "https://gyandeepacademykhordha.sarbeswarpanda.in";

const getCurrentRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const classMatch = path.match(/^\/books\/class-(6|7|8|9|10)$/);

  if (classMatch) {
    return { page: "books", classNumber: Number(classMatch[1]) };
  }

  if (path === "/books") {
    return { page: "books", classNumber: null };
  }

  return { page: "home", classNumber: null };
};

const App = () => {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handleHistoryChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener("popstate", handleHistoryChange);
    return () => window.removeEventListener("popstate", handleHistoryChange);
  }, []);

  useEffect(() => {
    const classTitle = route.classNumber
      ? `Class ${route.classNumber} Books`
      : "Books for Classes 6–10";
    const title =
      route.page === "books"
        ? `${classTitle} | Gyandeep Academy Khordha`
        : "Gyandeep Academy Khordha | Coaching Classes 5–10";
    const description =
      route.page === "books"
        ? route.classNumber
          ? `Find books and learning resources for Class ${route.classNumber} at Gyandeep Academy in Khordha.`
          : "Browse book resources for Classes 6 to 10 at Gyandeep Academy in Khordha."
        : "Gyandeep Academy offers coaching classes for Classes 5 to 10 in Khordha, Odisha, for CBSE and BSE students.";
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const canonicalUrl = `${SITE_ORIGIN}${path === "/" ? "/" : `${path}/`}`;

    document.title = title;
    const setMetaContent = (selector, attribute, attributeValue, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, attributeValue);
        document.head.append(tag);
      }
      tag.content = content;
    };

    setMetaContent('meta[name="description"]', "name", "description", description);
    setMetaContent('meta[property="og:title"]', "property", "og:title", title);
    setMetaContent('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaContent(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    setMetaContent(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );
    setMetaContent('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaContent('meta[name="twitter:url"]', "name", "twitter:url", canonicalUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.append(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, [route]);

  const navigateToPath = (path) => {
    window.history.pushState({}, "", path);
    setRoute(getCurrentRoute());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openBooks = () => {
    navigateToPath("/books/");
  };

  const openClassBooks = (classNumber) => {
    navigateToPath(`/books/class-${classNumber}/`);
  };

  const navigateToSection = (section) => {
    window.history.pushState({ page: "home" }, "", `/#${section}`);
    setRoute({ page: "home", classNumber: null });
    window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <Navbar
        isBooksPage={route.page === "books"}
        onAdmissionClick={() => setIsAdmissionOpen(true)}
        onBooksClick={openBooks}
        onNavigate={navigateToSection}
      />
      <main>
        {route.page === "books" ? (
          <Books
            selectedClass={route.classNumber}
            onSelectClass={openClassBooks}
          />
        ) : (
          <>
            <Hero onAdmissionClick={() => setIsAdmissionOpen(true)} />
            <Content onAdmissionClick={() => setIsAdmissionOpen(true)} />
          </>
        )}
      </main>
      <Footer
        onAdmissionClick={() => setIsAdmissionOpen(true)}
        onNavigateHome={() => navigateToSection("home")}
      />
      <NoticeBar />
      {isAdmissionOpen && (
        <AdmissionModal onClose={() => setIsAdmissionOpen(false)} />
      )}
    </>
  );
};

export default App;
