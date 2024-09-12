import React from "react";
import ProfilePageMenu from "../../Components/ProfilePageMenu";
import DashboardFooter from "../../Components/DashboardFooter";

function Profile() {
  //
  const menuData = [
    {
      title: "Account",
      options: [{ name: "Edit Profile", link: "/edit-profile" }],
    },
    {
      title: "Business",
      options: [
        { name: "Salon Details", link: "/salon-details" },
        { name: "Business Hours", link: "/business-hours" },
        { name: "GST Rate", link: "/gst-rate" },
        { name: "Holidays", link: "/holidays" },
        { name: "Settlements", link: "/settlements" },
      ],
    },
    {
      title: "Support",
      options: [{ name: "Help & Support", link: "/support" }],
    },
  ];

  return (
    <div>
      <div className="profile-page-container container">
        <div className="pt-5 pb-5 profile-page-user-avatar d-flex flex-column align-items-center justify-content-center">
          <i
            className="fa-solid fa-user fa-icon"
            style={{ fontSize: "3em", color: "var(--custom-bg-blue)" }}
          ></i>
          <div>
            <h6 className="pt-3 m-0 text-center">Sareria Nandit</h6>
            <p className="custom-font-normal text-center custom-text-gray">
              Admin (Bonanza Salon)
            </p>
          </div>
        </div>
        {menuData.map((section, index) => {
          return (
            <ProfilePageMenu
              key={index}
              title={section.title}
              options={section.options}
            />
          );
        })}
      </div>
      <DashboardFooter />
    </div>
  );
}

export default Profile;
