import React from "react";
import { navigationService } from "../Services/navigationService";

export default function NavigateBack() {
  const { goBack, goForward } = navigationService();

  return (
    <div>
      <button className="btn" onClick={goBack}>
        <i className=" fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
}
