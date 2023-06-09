function rot13(str) {
  str = str.toUpperCase();
  const start = 65, end = 90, punctuation = /[\W ]/;
  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    if (punctuation.test(str.charAt(i))) {
      resultStr += str.charAt(i);
      continue;
    }
    const currentSymbol = str.charCodeAt(i), ROT13 = str.charCodeAt(i)+13;
    if (ROT13<=90) {
      resultStr += String.fromCharCode(ROT13);
    } else {
      let positionFromStart = start+(12-(end-currentSymbol));
      resultStr += String.fromCharCode(positionFromStart);
    }
  }

  return resultStr;
}

rot13("gur DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");