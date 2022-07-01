import React from "react";
import DashboardButton from "../DashboardButton/DashboardButton";
import PiggyBank from "../PiggyBank/PiggyBank";

function TopBar({ amountEarned }) {
  return (
    <>
      <PiggyBank amountEarned={amountEarned} />
      <DashboardButton />
    </>
  );
}

export default TopBar;
