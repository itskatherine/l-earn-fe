import React from "react";
import DashboardButton from "../DashboardButton/DashboardButton";
import PiggyBank from "../PiggyBank/PiggyBank";

function TopBar(props) {
  return (
    <>
      <PiggyBank />
      <DashboardButton />
    </>
  );
}

export default TopBar;
