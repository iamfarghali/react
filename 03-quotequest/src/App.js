import { useCallback, useEffect, useState } from "react";

// Generate your own key https://api-ninjas.com
const API_KEY = "";
const categories = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];
function getRandomCategory() {
  const categoriesLength = categories.length - 1;
  const randIndex = Math.floor(Math.random() * categoriesLength);
  return categories[randIndex];
}

export default function App() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${getRandomCategory()}`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      const data = await res.json();
      setQuote(data[0]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="container">
      {API_KEY && (
        <div className="quote-wrapper">
          <button
            className="btn"
            onClick={fetchQuote}
            disabled={isLoading ? "disabled" : ""}
          >
            Get a quote
          </button>
          <QuoteCard quote={quote} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}

function QuoteCard({ quote, isLoading }) {
  const cardStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.4rem",
    border: "1px solid #333",
    padding: "3.2rem",
    borderRadius: "0.8rem",
  };

  const quoteStyle = {
    fontSize: "1.8rem",
    color: "#333",
    fontWeight: "500",
    lineHeight: "3.2rem",
  };

  const authorStyle = {
    fontSize: "1.4rem",
    color: "#005788",
    fontWeight: "500",
  };

  const categoryStyle = {
    border: "1px solid #333",
    color: "#333",
    textTransform: "uppercase",
    padding: "0.6rem 1.2rem",
    borderRadius: "0.4rem",
    fontSize: "1.2rem",
    fontWeight: "500",
  };

  const loaderStyle = {
    fontSize: "1.8rem",
    padding: "2.4rem",
  };

  return (
    <div style={cardStyle}>
      {isLoading ? (
        <p style={loaderStyle}>Loading....</p>
      ) : (
        <>
          <h2 style={quoteStyle}>
            <blockquote>{quote.quote}</blockquote>
          </h2>
          <p style={authorStyle}>{quote.author}</p>
          <p style={categoryStyle}>{quote.category}</p>
        </>
      )}
    </div>
  );
}
