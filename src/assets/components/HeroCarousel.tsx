import { Carousel } from "antd";

export interface SlideHero {
  image: string;
  title: string;
}

export interface HeroProps {
  slides: SlideHero[];
}

export default function HeroCarousel({ slides }: HeroProps) {
  if (!slides?.length) return null;

  return (
    <Carousel autoplay autoplaySpeed={5000} effect="fade" dots={false}>
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[35vh] md:h-[90vh] object-cover object-[0_40%] z-1"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
    </Carousel>
  );
}

