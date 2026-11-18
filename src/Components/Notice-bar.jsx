import './Notice-bar.css';

const NoticeBar = () => {
    return (
        <div className="notice-bar">
            <div className="social-site">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                        <path d="M13.5 21v-7.3h2.5l.4-2.9h-2.9V9c0-.8.2-1.4 1.4-1.4h1.6V5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.1v2.9h2.5V21h2.9Z" />
                    </svg>
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                        <path d="M18.9 1.2h3.7l-8.1 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9ZM17.6 20.6h2L6.5 3.2H4.3l13.3 17.4Z" />
                    </svg>
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.75" />
                    </svg>
                </a>
            </div>
            <div className="notice-bar__marquee">
                <p className="notice-bar__text">
                    📢 Admission Open for Classes 5 to 10! Contact:- 6370464705 / 8342916384
                </p>
            </div>
        </div>
    );
};

export default NoticeBar;