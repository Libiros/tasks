# RU : Проверка на палиндром

Функция должна вернуть `true`, если строка, переданная в функцию является палиндромом. В противном случае возвращается `false`.

*Палиндром - это слово или предложение, которое читается одинаково как слева направо, так и справа налево, игнорируя пунктуацию, регистр и пробел.*

Несколько примеров:
```js
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("race _C_aR"); // true
palindrome("123"); // false (321)
palindrome("_323"); // true
palindrome("А роза упала на лапу Азора"); // true
palindrome("Palindrome"); // false (emordnilap)
```

# EN : Palindrome checker

Return `true` if the given string is a palindrome. Otherwise, return `false`.

*A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.*

A few examples:
```js
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("race _C_aR"); // true
palindrome("123"); // false (321)
palindrome("_323"); // true
palindrome("Mr. Owl ate my metal worm"); // true
palindrome("Palindrome"); // false (emordnilap)
```