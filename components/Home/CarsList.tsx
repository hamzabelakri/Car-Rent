import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import CarCardSkelton from "./CarCardSkelton";
import BookingModal from "../CarBooking/BookingModal";
import { Car, CarsListProps } from "@/common.types";

function CarsList({carsList}: CarsListProps) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>([]);
  useEffect(() => {
    if (carsList) {
      setIsLoaded(false);
    }
  }, [carsList]);
  return (
    <div
      className="grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {/* <CarCardSkelton/> */}
      {!isLoaded &&
        carsList.map((car: Car, index: number) => (
          <div
            key={index}
            onClick={() => {
              (window as any).my_modal_4.showModal();
              setSelectedCar(car);
            }}
          >
            <CarCard car={car} />
          </div>
        ))}
      {isLoaded ? [1, 2, 3, 4, 5].map((item) => <CarCardSkelton />) : null}

      {/* You can open the modal using ID.showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar} />
      </dialog>
    </div>
  );
}

export default CarsList;
