const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('button-el')
const ulEl = document.getElementById('ul-el')
let itemsArray = []
const itemsInStorage = JSON.parse(localStorage.getItem('myList'))

if (itemsInStorage) {
  itemsArray = itemsInStorage
  render(itemsArray)
}

buttonEl.addEventListener('click', function () {
  let inputValue = inputEl.value
  itemsArray.push(inputValue)
  localStorage.setItem('myList', JSON.stringify(itemsArray))
  clearInput()
  render(itemsArray)
})

function render(list) {
  ulEl.innerHTML = '' // Clear the existing content

  for (let i = 0; i < list.length; i++) {
    let liEl = document.createElement('li')
    liEl.id = `list-el-${i}`
    liEl.className =
      'bg-[#DCE1EB] text-[#432000] p-2 rounded-md shadow-md text-sm grow text-center'
    liEl.textContent = list[i]

    // Add event listener to each li element
    liEl.addEventListener('click', function () {
      // Extract the index from the id
      const index = parseInt(liEl.id.split('-')[2])
      // Remove the item at the specified index
      itemsArray.splice(index, 1)
      // Update local storage and re-render the specific li element
      localStorage.setItem('myList', JSON.stringify(itemsArray))
      render(itemsArray)
    })

    ulEl.appendChild(liEl)
  }
}

function clearInput() {
  inputEl.value = ''
}
