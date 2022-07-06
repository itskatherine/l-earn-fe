import React from "react";
import DashboardButton from "../DashboardButton/DashboardButton";
import PiggyBank from "../PiggyBank/PiggyBank";

function TopBar({ amountEarned, navigation, userId }) {
  return (
    <>
      <PiggyBank amountEarned={amountEarned} userId={userId} />
      <DashboardButton navigation={navigation} />
    </>
  );
}

export default TopBar;
