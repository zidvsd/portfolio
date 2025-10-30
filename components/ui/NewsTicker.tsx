"use client";

export default function NewsTicker() {
  const headlines = [
    "📰 Breaking News: New Update Released!",
    "🌧️ Weather Alert: Rain Expected Tomorrow",
    "🤖 Tech: AI Revolution Continues",
    "🎮 Esports: Finals Start This Weekend",
    "🎬 Entertainment: New Series Announced",
  ];

  return (
    <div className="bg-light-gray py-2 overflow-hidden space-y-4">
      {/* RIGHT → LEFT */}
      <div className="ticker-container">
        <div className="ticker-track animate-scroll">
          {[...headlines, ...headlines].map((text, i) => (
            <span key={i} className="ticker-item">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* LEFT → RIGHT */}
      <div className="ticker-container mt-2">
        <div className="ticker-track animate-scroll-reverse">
          {[...headlines, ...headlines].map((text, i) => (
            <span key={i} className="ticker-item">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
