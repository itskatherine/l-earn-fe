const formatMoney = (amountInPounds) => {
  const formattedPrice = `£${amountInPounds.toFixed(2)}`;
  return formattedPrice;
};

export default formatMoney;
