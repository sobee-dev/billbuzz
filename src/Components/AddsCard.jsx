import React, {useState,useEffect} from 'react'
import Card from './Card'
import { ChevronLeft, ChevronRight } from "lucide-react";


const AddsCard = ({className}) => {
  const images = [
    "/assets/mtn.jpg",
    "/assets/glo.jpg",
    "/assets/airtel.jpg",
    "/assets/9mobile.jpg",
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };



  return (
    <>
      <Card className={`${className}`}>
        <div className='h-25 w-full bg-blue-700 rounded-2xl relative overflow-hidden'>
          <div className="flex h-full w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`slide-${idx}`}
                  className="h-full w-full flex-shrink-0 object-cover"/>
                ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots  */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
            
        </div>
        
            
      </Card>
    </>
  )
}

export default AddsCard
