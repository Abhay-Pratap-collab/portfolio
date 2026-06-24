"use client"
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            style={{
                background: "#111",
                color: "#fff",
                padding: "30px 20px",
                textAlign: "center",
            }}
        >
            <button
                onClick={scrollToTop}
                style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "25px",
                    cursor: "pointer",
                    marginBottom: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                }}
            >
                ↑ Back to Top
            </button>

            <p>© {new Date().getFullYear()} Abhay Pratap Singh</p>

            <p
                style={{
                    color: "#aaa",
                    fontSize: "14px",
                    marginTop: "8px",
                }}
            >
                Built with Next.js & React
            </p>
        </footer>
    );
}