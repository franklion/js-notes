/*
 * 
 * 基本型
 *
 */
function dogHouse() {
  var count = 100

  function countDogs() {
    count += 1
    console.log(`count dog: ${count}`)
  }
  return countDogs
}

const countDogs = dogHouse()


countDogs()
