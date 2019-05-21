/*
 * 
 * 變化型 - 簡化函式為匿名函式
 *
 */
function dogHouse() {
  var count = 0
  return function() {
    count += 1
    console.log(count + ' dogs')
  }
}

var dogCount = dogHouse()

dogCount()
dogCount()
dogCount()