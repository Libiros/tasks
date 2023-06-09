function checkCashRegister(price, cash, cid) {

  let arr = [];
  let change = Math.round((cash - price)*100)/100;

  if (change < 0) {
    return {status: "INSUFFICIENT_FUNDS", change: arr}
  }

  const FULL_CID = cid.reduce(
    (acc, item) => {
      acc.tt += item[1];
      acc[item[0]] = item[1];
      return acc;
    }, {tt : 0}
  );

  if (Math.round((FULL_CID.tt)*100)/100 == change) {
    return {status: "CLOSED", change: cid}
  } else if (Math.round((FULL_CID.tt)*100)/100 < price) {
    return {status: "INSUFFICIENT_FUNDS", change: arr}
  } 

  let valueStore = [
    { name: 'ONE HUNDRED', value: 100 },
    { name: 'TWENTY', value: 60 },
    { name: 'TEN', value: 10 },
    { name: 'FIVE', value: 5 },
    { name: 'ONE', value: 1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'DIME', value: 0.1 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'PENNY', value: 0.01 } 
  ]

  cid = cid
    .reverse()
    .map(item => [item[0],Math.round(item[1] * 100)]);
  valueStore = valueStore.map(item => Math.round(item["value"]*100));

  change = Math.round(change*100);

  const RESULT = cid.filter((item,index) => {
    if (change == 0) {
      return false;
    }
    if (change >= valueStore[index] && item[1] > 0) {
      let sum = parseInt(change / valueStore[index]);
      if (sum > parseInt(item[1] / valueStore[index])) {
        sum = parseInt(item[1] / valueStore[index]);
      }
      arr.push([item[0],sum*valueStore[index]/100]);
      change -= sum*valueStore[index];
      return true;
    }
  })

  return {status: "OPEN", change: arr};
}

// Test here:
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);