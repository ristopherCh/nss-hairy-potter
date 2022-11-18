let potteryToSell = [];

export const toSellOrNotToSell = (potObj) => {
  if (!potObj.cracked) {
    if (potObj.weight >= 6) {
      potObj.price = 40;
    } else {
      potObj.price = 20;
    }
    potteryToSell.push(potObj)
  }
  return potObj
};

export const usePottery = () => {
    return potteryToSell.map(pot => ({...pot}))
}
