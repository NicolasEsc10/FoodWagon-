import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Arrow from '../ui/Arrow.tsx';
import { DiscountCard, ProductCard, RestaurantCard } from "./Cards";
import { discounts } from "@/data/discounts";
import { products } from "@/data/product";
import { restaurants } from "@/data/restaurants";

export const DiscountCardList = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className='flex gap-10 py-16 mx-24 '>
      <CarouselContent className='mx-auto my-2'>
        {discounts.map((discount, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
            <div>
              <DiscountCard
                imageSrc={discount.imageSrc}
                altText={discount.altText}
                title={discount.title}
                badge={discount.badge}
                discount={discount.discount}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export const ProductCardList = () => {
  return (
    <div className="flex flex-col jusify-center items-center py-16">
      <h2 className='font-bold text-4xl text-[#212121] '>Popular items</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className='flex gap-10 py-16 mx-24 '>
        <CarouselContent className='mx-auto my-2 pb-3'>
          {products.map((products, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/5  '>
              <div className=''>
                <ProductCard
                  imageSrc={products.imageSrc}
                  altText={products.altText}
                  title={products.title}
                  location={products.location}
                  price={products.price}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export const RestaurantCardList = () => {
  return (
    <div className="flex flex-col justify-center items-center py-14">
      <h2 className="font-bold text-4xl text-[#212121] pb-16">
        Featured Restaurants
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-14 px-4 sm:px-6 lg:px-5 xl:px-32 pb-16">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            imageSrc={restaurant.imageSrc}
            imageRes={restaurant.imageRes}
            altText={restaurant.altText}
            title={restaurant.title}
            stars={restaurant.stars}
            badge={restaurant.badge}
            discount={restaurant.discount}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="group flex items-center gap-1 bg-gradient-to-br from-[#FFBA26] to-[#FF9A0E] text-white px-9 py-2.5 rounded-md hover:px-12 transition-all duration-500 ease-in-out shadow-[#FFAE00]/50 shadow-lg hover:shadow-[#FFAE00]/90">
          View All
          <Arrow
            direction="right"
            className="size-3 group-hover:ml-2 transition-all duration-200 ease-out"
          />
        </button>
      </div>
    </div>
  );
};
