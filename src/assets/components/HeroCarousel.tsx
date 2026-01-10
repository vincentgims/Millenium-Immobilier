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
        <div key={index} className="relative w-full aspect-video max-h-[650px]">
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
    </Carousel>
  );
}

