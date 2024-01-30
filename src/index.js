import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
  databaseURL:
    'https://will-s-realtime-database-default-rtdb.asia-southeast1.firebasedatabase.app/',
}

//set-up DB
const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemListinDB = ref(database, 'itemList')

const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
const ulEl = document.getElementById('ul-el')

buttonEl.addEventListener('click', function () {
  let inputValue = inputEl.value
  push(itemListinDB, inputValue)
  clearInput()
})

//fetch itemListinDB
onValue(itemListinDB, function (snapshot) {
  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val())

    clearShoppingList()

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i]
      let currentItemID = currentItem[0]
      let currentItemValue = currentItem[1]

      appendItemToList(currentItem)
    }
  } else {
    ulEl.innerHTML = 'No items here... yet'
  }
})

function clearInput() {
  inputEl.value = ''
}

function clearShoppingList() {
  ulEl.innerHTML = ''
}

function appendItemToList(item) {
  let itemID = item[0]
  let itemValue = item[1]

  let newLi = document.createElement('li')
  newLi.classList.add(
    'bg-[#DCE1EB]',
    'text-[#432000]',
    'p-2',
    'rounded-md',
    'shadow-md',
    'text-sm',
    'grow',
    'text-center'
  )

  newLi.textContent = itemValue

  newLi.addEventListener('click', function () {
    let locationOfItemInDB = ref(database, `itemList/${itemID}`)

    remove(locationOfItemInDB)
  })

  ulEl.append(newLi)
}
