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
  let listItems = ''

  for (let i = 0; i < list.length; i++) {
    let liEl = document.createElement('li')
    liEl.id = `list-el-${i}`
    liEl.className =
      'bg-[#DCE1EB] text-[#432000] p-2 rounded-md shadow-md text-sm grow text-center'
    liEl.textContent = list[i]

    listItems += liEl.outerHTML
  }

  ulEl.innerHTML = listItems

  // Add a single click event listener to the ulEl for handling all li clicks
  ulEl.addEventListener('click', function (event) {
    const target = event.target
    // Check if the clicked element is an li element
    if (target.tagName === 'LI') {
      // Extract the index from the id
      const index = parseInt(target.id.split('-')[2])
      // Remove the item at the specified index
      itemsArray.splice(index, 1)
      // Update local storage and re-render the list
      localStorage.setItem('myList', JSON.stringify(itemsArray))
      render(itemsArray)
    }
  })
}

function clearInput() {
  inputEl.value = ''
}
