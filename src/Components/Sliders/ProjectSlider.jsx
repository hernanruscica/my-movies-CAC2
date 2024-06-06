import React, { useRef, useEffect, useState } from 'react';
import './slider.css'; 

const ProjectSlider = ({ images }) => {
  const sliderWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;
    const handleScroll = () => {
      const activeThumbnailIndex = Math.round(sliderWrapper.scrollLeft / sliderWrapper.offsetWidth);
      setActiveIndex(activeThumbnailIndex);
    };
    sliderWrapper.addEventListener('scroll', handleScroll);
    return () => {
      sliderWrapper.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleThumbnailClick = (index) => {
    sliderWrapperRef.current.scrollLeft = index * sliderWrapperRef.current.offsetWidth;
    setActiveIndex(index);
  };

  return (
    <>
        <div className="slider-container">
            <div className="slider-wrapper" ref={sliderWrapperRef}>
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
            </div>
            <div className="thumbnail-wrapper">
            {images.map((image, index) => (
                <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
                />
            ))}
            </div>
        </div>
    </>
  );
};

export default ProjectSlider;
