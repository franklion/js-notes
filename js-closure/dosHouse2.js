/*
 * 
 * 變化型 - 帶入參數
 *
 */
function dogHouse (name) {
  var count = 0
  function countDogs () {
    count += 1
    console.log(count + ' ' + name)
  }
  return countDogs
}

var countGolden = dogHouse('Golden')
var countPug = dogHouse('Pug')

countGolden()
countPug()