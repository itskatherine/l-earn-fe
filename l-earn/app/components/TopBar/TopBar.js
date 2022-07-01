import React from "react";
import DashboardButton from "../DashboardButton/DashboardButton";
import PiggyBank from "../PiggyBank/PiggyBank";

function TopBar({ amountEarned, navigation }) {
  return (
    <>
      <PiggyBank amountEarned={amountEarned} />
      <DashboardButton navigation={navigation} />
    </>
  );
}

export default TopBar;
