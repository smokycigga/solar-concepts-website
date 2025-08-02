"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { trackVideoPlay } from '@/components/analytics/GoogleAnalytics';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title,
  thumbnailUrl,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    trackVideoPlay(title);
  };

  if (isPlaying) {
    return (
      <div className={`relative w-full h-auto rounded-[24px] overflow-hidden ${className}`}>
        <iframe
          width="100%"
          height="396"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[250px] sm:h-[300px] lg:h-[396px] rounded-[24px]"
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full cursor-pointer ${className}`} onClick={handlePlay}>
      <Image
        src={thumbnailUrl || `/images/img_pexels_los_muer.png`}
        alt={title}
        width={608}
        height={396}
        className="w-full h-auto rounded-[24px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[24px] flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
        <div className="bg-[#ff84008c] rounded-[12px] p-[8px] sm:p-[12px] lg:p-[16px] shadow-[0px_4px_4px_#888888ff] hover:bg-[#ff8400aa] transition-all duration-300 transform hover:scale-110">
          <svg 
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] lg:w-[48px] lg:h-[48px] text-white fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
        Click to play video
      </div>
    </div>
  );
};