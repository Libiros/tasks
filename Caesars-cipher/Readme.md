# RU : Шифр Цезаря

>Одним из самых простых и широко известных шифров является шифр Цезаря, также известный как шифр сдвига. В шифре сдвига значения букв сдвигаются на определенную величину.

>Наиболее часто используется - шифр **ROT13**, где значения букв сдвинуты на 13 позиций. Таким образом, `«A» ↔ «N»`, `«B» ↔ «O»` и так далее.

Функция принимает строку, зашифрованную с помощью **ROT13** и возвращает декодированную строку.

Все буквы должны быть заглавными. Знаки пунктуации и пробелы необходимо оставить без изменений.

Несколько примеров:
```js
rot13("YBERZ VCFHZ"); // LOREM IPSUM
rot13("SERR... CVMMN!!!"); // FREE... PIZZA!
rot13("yberz vcfhz"); // LOREM IPSUM
```

# EN : Caesars cipher

>One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

>A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus `'A' ↔ 'N'`, `'B' ↔ 'O'` and so on.

The function accepts a string encrypted with **ROT13** and returns a decoded string.

All letters must be capitalized. Punctuation and spaces must be left unchanged.

A few examples:
```js
rot13("YBERZ VCFHZ"); // LOREM IPSUM
rot13("SERR... CVMMN!!!"); // FREE... PIZZA!
rot13("yberz vcfhz"); // LOREM IPSUM
```