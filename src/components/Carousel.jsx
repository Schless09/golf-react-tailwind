import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: "https://golfweek.usatoday.com/wp-content/uploads/sites/87/2017/12/saguaro-18.jpg?w=1200&h=600&crop=1",
  },
  {
    url: "https://www.kiawahisland.com/wp-content/uploads/Ocean-Course-aerial.jpg",
  },
  {
    url: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/course-photos-for-places-to-play/TPC%20Harding%20Park%2018.jpg.rend.hgtvcom.966.644.suffix/1637183173324.jpeg",
  },
];
const Carousel = () => {
   const [slide, setSlide] = useState(0);
   const length = sliderData.length;
   // console.log(length)

   const prevSlide = () => {
     setSlide(slide === length - 1 ? 0 : slide + 1);
   };
   const nextSlide = () => {
     setSlide(slide === 0 ? length - 1 : slide - 1);
   };

   return (
     <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
       <BsArrowLeftSquareFill
         onClick={prevSlide}
         className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
       />
       <BsArrowRightSquareFill
         onClick={nextSlide}
         className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
       />
       {sliderData.map((item, index) => (
         <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
           {index === slide && (
             <img className='w-full rounded-md' src={item.url} alt='/' />
           )}
         </div>
       ))}
     </div>
   );
 };

 export default Carousel;