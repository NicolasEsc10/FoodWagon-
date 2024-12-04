import React from "react";
import type {
  InterDiscountCard,
  InterProductCard,
  InterRestaurantCard,
} from "@/interface/Cards";

export const DiscountCard: React.FC<InterDiscountCard> = (props) => {
  const {
    imageSrc,
    altText = "Food image",
    title,
    badge,
    discount,
    className = "",
  } = props;

  return (
    <div
      className={`max-w-[260px] flex flex-col gap-4 transition-transform duration-200 hover:scale-105 cursor-pointer ${className}`}>
      <div className='relative rounded-2xl overflow-hidden shadow-lg'>
        <img src={imageSrc} alt={altText} />
        <div className='flex absolute justify-start bottom-0 left-0 bg-[#FFB30E] text-white px-5 py-2 text-5xl font-extrabold rounded-tr-3xl'>
          {discount}
          <div className='flex flex-col items-center'>
            <div className='font-bold text-2xl'>%</div>
            <p className='text-discount'>off</p>
          </div>
        </div>
      </div>
      <div>
        <div className='font-bold text-lg text-gray-700 pb-3'>{title}</div>
        <div className='inline-block bg-[#F17228]/20 text-[#F17228] font-bold px-3 py-1 rounded-md'>
          {badge}
        </div>
      </div>
    </div>
  );
};

export const ProductCard: React.FC<InterProductCard> = (props) => {
  const { imageSrc, altText = "Food image", title, location, price } = props;
  const formattedPrice = price.toFixed(2);

  return (
    <div className='flex flex-col gap-4 cursor-pointer max-w-[200px]'>
      <div className='relative'>
        <img
          src={imageSrc}
          alt={altText}
          width={500}
          height={500}
          className='rounded-2xl shadow-lg'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <p className='font-bold text-lg text-[#424242]'>{title}</p>
          <div className='flex gap-1 items-center'>
            <img
              src='/images/icons/location-icon.svg'
              alt='location-icon'
              loading='lazy'
              className='size-4'
            />
            <p className='text-base font-normal text-[#FFB30E] hover:text-[#ff820e]'>
              {location}
            </p>
          </div>
          <p className='text-[#212121] font-bold'>${formattedPrice}</p>
        </div>
        <div className='bg-[#F17228]  text-white font-bold text-sm text-center transition-transform duration-200 rounded-lg py-3 shadow-orange hover:scale-105 hover:custom-shadow'>
          Order Now
        </div>
      </div>
    </div>
  );
};

export const RestaurantCard: React.FC<InterRestaurantCard> = (props) => {
  const {
    imageSrc,
    imageRes,
    stars,
    altText = "Food image",
    title,
    badge,
    discount,
  } = props;

  return (
    <div className='flex flex-col gap-4 transition-transform duration-200 cursor-pointer min-w-[255px]'>
      <div className='relative rounded-2xl overflow-hidden shadow-lg'>
        <img src={imageSrc} alt={altText} className='w-full' />
        <div className='flex absolute top-3 left-4 gap-2'>
          <div className='flex items-center justify-center bg-[#F17228] text-white px-3 py-1 text-md font-semibold rounded-md'>
            <img
              src='/images/icons/discount-icon.svg'
              alt=''
              loading='lazy'
              className='size-3 mr-1'
            />
            {discount}
            <div>% off</div>
          </div>
          <div className='flex items-center justify-center bg-[#FFB30E] text-white px-3 py-1 text-md font-semibold rounded-md'>
            <img
              src='/images/icons/fast-icon.svg'
              alt=''
              loading='lazy'
              className='size-3 mr-2'
            />
            <p>Fast</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center pb-5 gap-4'>
          <div>
            <img
              src={imageRes}
              alt={altText}
              width={49}
              height={49}
              className='rounded-sm'
            />
          </div>
          <div className='flex flex-col'>
            <p className='font-bold text-lg text-gray-700'>{title}</p>
            <div className='flex items-center gap-1'>
              <img
                src='/images/icons/star-icon.svg'
                alt='star'
                loading='lazy'
                className='size-4'
              />
              <p className='text-base font-normal text-[#FFB30E] hover:text-[#ff820e]'>
                {stars}
              </p>
            </div>
          </div>
        </div>
        <p className='inline-block bg-[#79B93C]/20 text-[#79B93C] font-bold px-3 py-1 rounded-lg'>
          {badge}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
