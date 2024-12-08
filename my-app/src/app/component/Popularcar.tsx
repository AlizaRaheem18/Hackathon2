'use client'
import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      {/* Favorite Icon */}
      <div className="w-full flex justify-end">
        <AiOutlineHeart className="text-red-500 text-2xl cursor-pointer" />
      </div>

   
       <div className="mt-2">
         <Image
           src={"/car01.png"}
           alt={car.name}
           width={300}
           height={150}
           className="object-contain"
         />
       </div>


      {/* Car Details */}
      <h3 className="text-lg font-bold mt-4 text-center">{car.name}</h3>
      <p className="text-gray-500 text-sm">{car.type}</p>

      {/* Features */}
      <div className="flex justify-between items-center mt-4 w-full px-2 text-gray-500 text-sm">
        <p className="flex items-center">
          <Image
            src="/gas-station.png"
            alt="Fuel"
            width={16}
            height={16}
            className="mr-2"
          />
          {car.fuel}
        </p>
        <p className="flex items-center">
          <Image
            src="/Car.png"
            alt="Transmission"
            width={16}
            height={16}
            className="mr-2"
          />
          {car.transmission}
        </p>
        <p className="flex items-center">
          <Image
            src="/profile-2user.png"
            alt="Seats"
            width={16}
            height={16}
            className="mr-2"
          />
          {car.seats} People
        </p>
      </div>

      {/* Pricing and Button */}
      <div className="flex justify-between items-center w-full mt-6">
        <div>
          <p className="text-xl font-bold text-gray-900">${car.price} / day</p>
          {car.discount && (
            <p className="text-sm text-gray-400 line-through">${car.discount}</p>
          )}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Rent Now
        </button>
      </div>
    </div>
  );
};

const PopularCars = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      image: "/koenigsegg.png",
      fuel: "90L",
      transmission: "Manual",
      seats: 2,
      price: 99,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      image: "/nissan-gt-r.png",
      fuel: "80L",
      transmission: "Manual",
      seats: 2,
      price: 80,
      discount: 100,
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/nissan-gt-r.png",
      fuel: "70L",
      transmission: "Manual",
      seats: 2,
      price: 80,
      discount: 100,
    },
    {
      name: "Lamborghini Aventador",
      type: "Sport",
      image: "/nissan-gt-r.png",
      fuel: "85L",
      transmission: "Automatic",
      seats: 2,
      price: 120,
      discount: 150,
    },
  ];

  return (
    <div className="w-full bg-[#F6F7F9] py-10 px-4 lg:px-16">
      <h2 className="text-2xl font-bold mb-8 ">Popular Cars</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
