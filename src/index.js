// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }

  if (currency < 0) {
    return {};
  }

  const H = Math.floor(currency / 50);
  const Q = Math.floor((currency - H * 50) / 25);
  const D = Math.floor((currency - H * 50 - Q * 25) / 10);
  const N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
  const P = currency - H * 50 - Q * 25 - D * 10 - N * 5;

  const coins = {
    "H": H,
    "Q": Q,
    "D": D,
    "N": N,
    "P": P
  };


  for (key in coins) {
    if(coins[key] === 0) {
      delete coins[key];
    }
  }

  return coins;
}
