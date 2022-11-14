// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", "4lbs", "12in");
let pot = makePottery("pot", "8lbs", "13in")
let cup = makePottery("cup", "2lbs", "3in")
let bowl = makePottery("bowl", "3lbs", "5in")
let spoon = makePottery("spoon", "1lbs", "4in")



firePottery(mug, 5000)
firePottery(pot, 1000)
firePottery(cup, 1000)
firePottery(bowl, 1000)
firePottery(spoon, 1000)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



