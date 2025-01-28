let table = document.getElementById('age-table')
let td = document.getElementsByTagName('td')[0].textContent
let lables = document.getElementsByName('age')
let searchForm = document.getElementsByName('search')[0]
let searchFormInputs = searchForm.getElementsByTagName('input')
console.log(lables)
console.log(td)
console.log(searchForm)
console.log(searchFormInputs[0])
console.log(searchFormInputs[1])
//lables.style.backgroundColor = 'red'

for (elem of lables) {
  console.log(elem.value)
}