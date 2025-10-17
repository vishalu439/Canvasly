import React, { useEffect, useRef, useState } from "react";

// YouTube Shorts Links
const videos = [
  "ClYcj8Au_7E",
  "sNGsOTxX27Q",
  "FFVY0UqkhKU",
  "vS3zAc9mChE" // New short
];

const YouTubeShorts = () => {
  const videoRefs = useRef([]);
  const [visibleVideos, setVisibleVideos] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility = {};
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          updatedVisibility[id] = entry.isIntersecting;
        });
        setVisibleVideos((prev) => ({ ...prev, ...updatedVisibility }));
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">
        Trending on <span className="text-pink-500">Canvasly</span>
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Watch our latest custom tote bags, T-shirt prints, and frame designs come alive 🎥
      </p>

      {/* Grid for Shorts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-screen-2xl px-6">
        {videos.map((id, index) => (
          <div
            key={id}
            ref={(el) => (videoRefs.current[index] = el)}
            data-id={id}
            className="relative w-full aspect-[9/16] rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:scale-105 transition-transform duration-500"
          >
            {isMobile ? (
              <a
                href={`https://youtube.com/shorts/${id}`}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black text-white text-center p-4 rounded-3xl hover:bg-gray-900 transition"
              >
                Watch on YouTube
              </a>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=${visibleVideos[id] ? 1 : 0
                  }&mute=1&modestbranding=1&controls=0&loop=1&playlist=${id}`}
                title={`YouTube Short ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                playsInline
              ></iframe>
            )}
          </div>
        ))}
      </div>

      <button
        className="mt-10 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold transition-all"
        onClick={() => window.open("https://wa.me/7619538167", "_blank")}
      >
        Order on WhatsApp 💬
      </button>
    </section>
  );
};

export default YouTubeShorts;
