const formatMoney = (amountInPounds) => {
  const formattedPrice = `£${Number(amountInPounds).toFixed(2)}`;
  return formattedPrice;
};

export default formatMoney;
