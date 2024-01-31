const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
const ulEl = document.getElementById('ul-el')
let itemsArray = []

buttonEl.addEventListener('click', function () {
  let inputValue = inputEl.value
  setToMyListStorage(inputValue)
  clearInput()
  // appendItemToUl(itemsInStorage)
})

function setToMyListStorage(val) {
  itemsArray.push(val)
  localStorage.setItem('myList', JSON.stringify(itemsArray))

  if (itemsArray[0]) {
    let itemsInStorage = JSON.parse(localStorage.getItem('myList'))
    console.log(itemsInStorage)
    // appendItemToUl(itemsInStorage)
  }
}

function clearInput() {
  inputEl.value = ''
}

function appendItemToUl(arr) {
  let newEl = document.createElement('li')

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    console.log(item)
  }
}

function clearUlEl() {
  ulEl.innerHTML = ''
}

// //fetch itemListinDB
// onValue(itemListinDB, function (snapshot) {
//   if (snapshot.exists()) {
//     let itemsArray = Object.entries(snapshot.val())

//     clearShoppingList()

//     for (let i = 0; i < itemsArray.length; i++) {
//       let currentItem = itemsArray[i]
//       let currentItemID = currentItem[0]
//       let currentItemValue = currentItem[1]

//       appendItemToList(currentItem)
//     }
//   } else {
//     ulEl.innerHTML = 'No items here... yet'
//   }
// })

// function clearShoppingList() {
//   ulEl.innerHTML = ''
// }

// function appendItemToList(item) {
//   let itemID = item[0]
//   let itemValue = item[1]

//   let newLi = document.createElement('li')
//   newLi.classList.add(
//     'bg-[#DCE1EB]',
//     'text-[#432000]',
//     'p-2',
//     'rounded-md',
//     'shadow-md',
//     'text-sm',
//     'grow',
//     'text-center'
//   )

//   newLi.textContent = itemValue

//   newLi.addEventListener('click', function () {
//     let locationOfItemInDB = ref(database, `itemList/${itemID}`)

//     remove(locationOfItemInDB)
//   })

//   ulEl.append(newLi)
// }
