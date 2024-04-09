import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export type CarouselPropType = {
  id?: string;
  title?: string;
  url: string;
  alt?: string;
};

const images: CarouselPropType[] = [
  {
    url: "/src/assets/image/insite-images/connection-design.png",
    alt: "Structural Steel 1",
    title: "Connection Design",
    id: "1",
  },
  {
    url: "/src/assets/image/insite-images/equal-opportunity.png",
    alt: "Structural Steel 2",
    title: "Equal Opportunity",
    id: "2",
  },
  {
    url: "/src/assets/image/insite-images/our-services.jpg",
    alt: "Structural Steel 3",
    title: "Our Services",
    id: "3",
  },
  {
    url: "/src/assets/image/insite-images/simplified.jpg",
    alt: "Structural Steel 4",
    title: "Simplified",
    id: "4",
  },
];


function CarouselDefault() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full h-full m-auto py-1 relative group'>
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}
        className='w-full h-full rounded-lg bg-center bg-cover duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {
        images[currentIndex].title && (
          <div className='absolute bottom-0 left-0 right-0 bg-black/30 text-white p-2 text-lg text-center'>
            {images[currentIndex].title}
          </div>
        )
      }
    </div>
  );

}

export { CarouselDefault };
