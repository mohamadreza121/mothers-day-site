// src/App.jsx
import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const audioRef = useRef(null);

  const photos = [
    { src: "/images/mom1.jpg", caption: "نوروز با بهترین‌ها 💖 مامان و مامان‌بزرگ عزیزم" },
    { src: "/images/mom2.jpg", caption: "لبخند زیباترین 💖" },
    { src: "/images/mom3.jpg", caption: "جشن‌های شیرین 🎉" },
    { src: "/images/mom4.jpg", caption: "الهام‌بخش همیشه 🌹" },
    { src: "/images/mom5.jpg", caption: "لحظات خاص با تو 🌸" },
    { src: "/images/mom7.jpg", caption: "مادر همیشه مهربان 🌷" },
  ];

  // Play audio when card is hovered (opened)
  const handleCardEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Pause/rewind when card is closed
  const handleCardLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="app" dir="rtl">
      {/* Audio element */}
      <audio ref={audioRef} src="/audio/Alireza Talischi - Madar.mp3" />

      <div 
        className="card" 
        onMouseEnter={handleCardEnter} 
        onMouseLeave={handleCardLeave}
      >
        <div className="card-front">
          <h1>🌹 روز مادر مبارک 🌹</h1>
          <p>برای دیدن سورپرایز کلیک کن</p>
        </div>
        <div className="card-inside">
          <h2>مامان عزیزم،</h2>
          <p>
            ممنونم برای عشق بی‌پایان، خرد و حمایتت.  
            هر روز از تو الهام می‌گیرم و افتخار می‌کنم که فرزندت هستم.  
            آرزوی شادی، آرامش و گل‌های بی‌نهایت برایت دارم!
          </p>
          <p className="signature">— محمدرضا</p>
        </div>
      </div>

      {/* گالری عکس‌ها */}
      <div className="gallery">
        <h2>📸 خاطرات ما با هم</h2>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src} alt={photo.caption} />
              <p>{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content">
            <img src={selectedPhoto.src} alt={selectedPhoto.caption} />
            <p>{selectedPhoto.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
