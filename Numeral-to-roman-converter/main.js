function convertToRoman(num) {
 
  const romanStore = [
    {"char":"M","order":1000},
    {"char":"CM","order":900},
    {"char":"D","order":500},
    {"char":"CD","order":400},
    {"char":"C","order":100},
    {"char":"XC","order":90},
    {"char":"L","order":50},
    {"char":"XL","order":40},
    {"char":"X","order":10},
    {"char":"IX","order":9},
    {"char":"V","order":5},
    {"char":"IV","order":4},
    {"char":"I","order":1}
  ]

let currentIndex, resultStr = "";

 for (let i = 0; i < romanStore.length; i++) {
   currentIndex = (num-num%romanStore[i]["order"])/romanStore[i]["order"];
   num = num - currentIndex*romanStore[i]["order"];
   if (currentIndex) {
     for (let j = 0; j < currentIndex; j++) {
       resultStr += romanStore[i]["char"];
     }
   }
 }

return resultStr;

}

// Test here:
convertToRoman(2711);
