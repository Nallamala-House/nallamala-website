import React, { useEffect, useState } from 'react';
import PixelSnow from './PixelSnow';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const texts = ['Initializing', 'Loading Assets', 'Preparing Experience', 'Almost There'];
    let textIndex = 0;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/sample.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Gold PixelSnow */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <PixelSnow
          color="#D4AF37"
          flakeSize={0.012}
          minFlakeSize={1.5}
          pixelResolution={150}
          speed={0.8}
          depthFade={5}
          farPlane={30}
          brightness={2.0}
          gamma={0.7}
          density={0.5}
          variant="square"
          direction={120}
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <img
            src="/nallamala_house_iit_madras_logo.jpg"
            alt="Nallamala House Logo"
            className="w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-2xl shadow-amber-500/50"
            style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
          <div className="absolute inset-0 rounded-full border-4 border-amber-400 animate-ping opacity-75" />
        </div>

        {/* Simple Title */}
        <h1 
          className="text-5xl md:text-7xl font-bold text-amber-500 tracking-wide"
          style={{ 
            textShadow: '0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.4)'
          }}
        >
          NALLAMALA HOUSE
        </h1>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <p className="text-amber-300 text-lg font-medium">
            {loadingText}
            <span className="inline-block">...</span>
          </p>

          {/* Progress Bar */}
          <div className="w-80 max-w-md">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-amber-600/30">
              <div
                className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-amber-300 text-sm mt-2 font-mono">
              {progress}%
            </p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-amber-200/70 text-center max-w-md px-4 italic">
          Preparing your journey into the Nallamala community
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
