/*
 * 
 * 變化型 - 簡化函式為匿名函式 & 帶入參數
 *
 */
function createCounter(name) {
  var count = 0
  return function() {
    count += 1
    console.log(`${count} ${name}`)
  }
}

var dogCounter = createCounter('dog')
var catCounter = createCounter('cat')
var bordCounter = createCounter('bird')


dogCounter()
dogCounter()
catCounter()
bordCounter()
bordCounter()
bordCounter()