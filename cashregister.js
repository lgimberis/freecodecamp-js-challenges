/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/

const values = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0
};

function checkCashRegister(price, cash, cid) {
    let difference = (cash - price)*100;
    let cidClone = JSON.parse(JSON.stringify(cid))
    let change = [];
    let status = "OPEN";
    if(difference > 0){
        //Need to give change
        for (let i in cid){
            let cidItem = cid[cid.length-1-i];
            let cashValue = 100*values[cidItem[0]];
            let amountTransferred = cashValue * Math.floor(Math.min(difference, 100*cidItem[1]) / cashValue);
            if(amountTransferred !== 0){
                difference -= amountTransferred;
                cidItem[1] -= 0.01*amountTransferred;
                change.push([cidItem[0], 0.01*amountTransferred]);
            }
        }


    }
    console.log(cid);
    if(difference === 0 && cid.every((item) => item[1] === 0.0)){
        status = "CLOSED";
        change = cidClone;
    } else if(difference > 0){
        status = "INSUFFICIENT_FUNDS";
        change = [];
    }

    return {status, change};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
