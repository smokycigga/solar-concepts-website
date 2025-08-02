"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface HighQualityImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  style?: React.CSSProperties;
}

export const HighQualityImage: React.FC<HighQualityImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 100,
  sizes,
  style = {}
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const enhancedStyle: React.CSSProperties = {
    imageRendering: 'crisp-edges',
    WebkitImageRendering: 'crisp-edges',
    MozImageRendering: 'crisp-edges',
    msImageRendering: 'crisp-edges',
    filter: isLoaded 
      ? 'contrast(1.05) saturate(1.1) brightness(1.02) blur(0px)' 
      : 'blur(2px)',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
    transition: 'filter 0.3s ease-in-out',
    ...style
  };

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width * 2} // Double resolution for retina displays
        height={height * 2}
        quality={quality}
        priority={priority}
        sizes={sizes}
        className={`${className} select-none`}
        style={enhancedStyle}
        onLoad={() => setIsLoaded(true)}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-global-3 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};