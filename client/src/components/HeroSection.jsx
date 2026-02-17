import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Parallax / scroll animation for background video
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!wrapperRef.current) return;
      const scrolled = window.scrollY || window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const speed = 0.18; // parallax factor (smaller = slower)
          const translate = Math.min(scrolled * speed, 200);
          if (videoRef.current) {
            // keep video horizontally centered and adjust vertical center with calc
            videoRef.current.style.transform = `translate3d(-50%, calc(-50% - ${translate}px), 0) scale(1.08)`;
          }
          // overlay opacity change
          const overlay = wrapperRef.current.querySelector('.hero-overlay');
          if (overlay) {
            const newOpacity = Math.max(0.15, 0.6 - scrolled / 1200);
            overlay.style.background = `linear-gradient(90deg, rgba(26,26,26,${newOpacity}) 0%, rgba(26,26,26,${newOpacity * 0.6}) 100%)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // split hero on initial scroll to reveal content smoothly
  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const scrolled = window.scrollY || window.pageYOffset;
      if (scrolled > 20) wrapperRef.current.classList.add('split');
      else wrapperRef.current.classList.remove('split');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const videoSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

  return (
    <section className="hero" ref={wrapperRef}>
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content hero-foreground">
        <div className="hero-split-top">
          <h1>AILYT — Learn. Build. Grow.</h1>
        </div>

        <div className="hero-split-bottom">
          <p className="tagline">Practical tech education and industry-grade IT services.</p>
          <div className="hero-ctas">
            <button className="hero-btn" onClick={() => navigate('/learning')}>AILYT Learning Centre</button>
            <button className="hero-btn secondary" onClick={() => navigate('/it-services')}>AILYT IT Services</button>
          </div>
        </div>
      </div>

      <button className="hero-play-btn" onClick={togglePlayPause} title={isPlaying ? 'Pause' : 'Play'}>
        {isPlaying ? '⏸' : '▶'}
      </button>

      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </section>
  );
};

export default HeroSection;
