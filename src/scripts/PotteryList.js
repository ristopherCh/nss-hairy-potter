import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'


export const PotteryList = () => {
    let PotteryAvailable = usePottery();
    let outStr = "";
    for (let pot of PotteryAvailable){
        outStr += `<section class="pottery" id="pottery--${pot.id}">
        <h2 class="pottery__shape">${pot.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${pot.weight} grams and is ${pot.height} cm in height
        </div>
        <div class="pottery__price">Price is $${pot.price}</div>
      </section>`
    }
    return outStr;

}

