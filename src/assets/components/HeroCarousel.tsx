import { Carousel } from "antd";

type Slide = {
  image: string;
  title: string;
};

type HeroProps = {
  slides?: Slide[];
};

export default function HeroCarousel({ slides }: HeroProps) {
  if (slides && slides.length > 0) {
    return (
      <Carousel autoplay autoplaySpeed={5000} effect="fade" dots dotPosition="bottom">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[35vh] md:h-[90vh] object-cover object-[0_40%]"
            />

            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </Carousel>
    );
  }
}
