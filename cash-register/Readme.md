# RU : Кассовый аппарат

Функция кассового аппарата `checkCashRegister()` принимает покупную цену в качестве первого аргумента (`price`), оплату в качестве второго аргумента (`cash`) и кассовый ящик (`cid`) в качестве третьего аргумента.

`cid` - это двумерный массив с перечнем доступной валюты.

Функция `checkCashRegister()` всегда должна возвращать объект со статусом и массивом данных со сдачей.

`{status: "INSUFFICIENT_FUNDS", change: []}` возвращается, если размер полученной суммы меньше ожидаемой сдачи или если выдать сдачу.

`{status: "CLOSED", change: [...]}` возвращается, когда сдача эквивалентна номиналам кассового ящика.

`{status: "OPEN", change: [...]}` возвращается в иных случаях. Массив `change` должен содержать сдачу, выдаваемую покупателю, отсортированную в порядке убывания.

Несколько примеров:
```js
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
```

# EN : Cash register

The `checkCashRegister ()` cash register function accepts the purchase price as the first argument (`price`), payment as the second argument (` cash`), and the cash drawer (`cid`) as the third argument.

`cid` is a two-dimensional array with a list of available currencies.

The function `checkCashRegister ()` should always return an object with the status and data array with the change.

`{status:" INSUFFICIENT_FUNDS ", change: []}` is returned if the amount received is less than the expected change or if the change is issued.

`{status:" CLOSED ", change: [...]}` is returned when the change is equivalent to the nominal cash drawer.

`{status:" OPEN ", change: [...]}` returns in other cases. The `change` array must contain the change returned to the customer, sorted in descending order.

A few examples:
```js
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
```