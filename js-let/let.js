/*
 * 
 * 基本型
 *
 */
for(var i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  },1000);
}


/*
 * 
 * 變化型 使用let
 *
 */
for(let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  },1000);
}


// let的變數除了作用域是在for區塊中，而且會為每次循環執行建立新的詞法環境(LexicalEnvironment)，拷貝所有的變量名稱與值到下個循環執行
// https://ithelp.ithome.com.tw/articles/10185142

let k
for(k = 0; k < 10; k++) {
  let i = k
  setTimeout(() => console.log('i:', i), 1000)
}