// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 4, 12);
let pot = makePottery("pot", 8, 13);
let cup = makePottery("cup", 2, 3);
let bowl = makePottery("bowl", 3, 5);
let spoon = makePottery("spoon", 1, 4);



firePottery(mug, 5000);
firePottery(pot, 1000);
firePottery(cup, 1000);
firePottery(bowl, 1000);
firePottery(spoon, 1000);

toSellOrNotToSell(mug);
toSellOrNotToSell(pot);
toSellOrNotToSell(cup);
toSellOrNotToSell(bowl);
toSellOrNotToSell(spoon);

let potteryElement = document.getElementsByClassName("potteryList")[0];
potteryElement.innerHTML = PotteryList();

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



