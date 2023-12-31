import request, { gql } from "graphql-request";

const URL ="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clltbrv6s38pc01ue4cfqc2zw/master";
export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;

  const result = await request(URL, query);
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation {
      storeLocations {
        adress
      }
    }
  `;
  const result = await request(URL, query);
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    createBooking(
      data:  {userName: "` +
    formValue.userName +
    `", 
      pickUpDate: "` +
    formValue.pickUpDate +
    `", 
      pickUpTime: "` +
    formValue.pickUpTime +
    `", 
      dropOffDate: "` +
    formValue.dropOffDate +
    `", 
      dropOffTime: "` +
    formValue.dropOffTime +
    `", 
      contactNumber: "` +
    formValue.contactNumber +
    `", 
      carId: {connect: 
        {id: "` +
    formValue.carId +
    `"}}}
    ) {
      id
    }
  }
  
  `;

  const result = await request(URL, mutationQuery);
  return result;
};

export const contactUs = async (contactFormValue: any) => {
  const mutationQuery =
    gql`
    mutation MyMutation {
      createContact(data: { 
      name: "` +
    contactFormValue.name +
    `", 
    email: "` +
    contactFormValue.email +
    `", 
    message: "` +
    contactFormValue.message +
    `", 
    }) {
        id
      }
    }
  `;

  const result = await request(URL, mutationQuery);
  return result;
};
