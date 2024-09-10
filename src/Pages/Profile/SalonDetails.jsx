import React from "react";
import Header from "../../Components/Header";
import RegisterBusinessDetails from "../LoginRegistration/RegisterBusinessDetails";
function SalonDetails() {
  const initialData = {
    salonName: "Bonanza",
    contactNumber: 9664846228,
    email: "nanditsareria@gmail.com",
    description: "This text is salon description text",
    salonType: "Women's",
    noOfSeats: 6,
    address: "Test Address",
    gstNumber: "23AFJOCVP94P",
    legalName: "Bonanza Salon",
    gstType: "Partnership",
    gstRegistered: true,
  };

  return (
    <div>
      <div className="salon-details-page-main-container">
        <RegisterBusinessDetails mode="edit" initialData={initialData} />
      </div>
    </div>
  );
}

export default SalonDetails;
