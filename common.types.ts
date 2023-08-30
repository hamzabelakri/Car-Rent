
export interface Car {
    id: string;
    carAvg: number;
    createdAt: string;
    name: string;
    price: number;
    publishedAt: string;
    updatedAt: string;
    seat: number;
    image: {
      url: string;
    };
    carType: string;
    carBrand: string;
  }

  export interface FooterLink {
    title: string;
    links: Array<{ title: string; url: string }>;
  }

  export interface ToastMsgProps {
    msg: string;
  }
  
  export interface CarsListProps {
    carsList: Car[];
  }

  export interface BookingModalProps {
    car: Car;
  }

  export interface FormValue {
    location: string;
    pickUpDate: string;
    dropOffDate: string;
    pickUpTime: string;
    dropOffTime: string;
    contactNumber: string;
    userName: string;
    carId: string;
  }
  
  export interface FormProps {
    car: Car;
  }

  export interface StoreLocation {
    id: string;
    adress: string;
  }
  
  export interface ContactFormValue {
    name: string;
    email: string;
    message: string;
  }