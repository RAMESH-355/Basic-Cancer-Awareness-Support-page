import { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("Loading inspirational quote...");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(() => {
        setQuote("Stay strong. You are not alone in this fight.");
        setAuthor("Unknown");
      });
  }, []);

  return (
    <section className="bg-pink-50 py-14 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Words of Hope
        </h2>

        <p className="text-lg italic text-gray-700 mb-4">"{quote}"</p>
        
        <span className="text-sm text-gray-500">— {author}</span>
      </div>
    </section>
  );
};

export default Quotes;
