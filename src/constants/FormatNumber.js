function formatMoney(number) {
  if (typeof number !== 'number') {
    return 'Invalid input';
  }

  return number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
  });
}

export default formatMoney;
