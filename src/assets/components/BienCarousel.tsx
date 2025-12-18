import { Carousel } from "antd";
export interface SlideBien {
  image: string;
  title: string;
}

export interface HeroProps {
  slides: SlideBien[];
}

export default function BienCarousel({ slides }: HeroProps) {
  return (
    <Carousel autoplay autoplaySpeed={5000} effect="fade" dots dotPosition="bottom" arrows>
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full object-cover transition-transform duration-500 ease-in-out 
               hover:scale-110"
          />
        </div>
      ))}
    </Carousel>
  );
}

