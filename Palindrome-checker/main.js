function palindrome(str) {
  const re = /[\W_]/g;

  str = str
  .replace(re,"")
  .toLowerCase();

  let reversedStr = str
  .split("")
  .reverse()
  .join("");

  return str == reversedStr;
}

// Test here:
palindrome("0_0 (: /-\ :) 0-0");