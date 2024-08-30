import React from "react";
import { navigationService } from "../Services/navigationService";

export default function NavigateBack() {
  const { goBack, goForward } = navigationService();

  return <div></div>;
}
