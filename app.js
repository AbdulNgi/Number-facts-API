const form = document.querySelector('form')
const factDiv = document.querySelector('.number-fact')

form.addEventListener('submit' , (e) => {
e.preventDefault();
const number = e.target.querySelector('input[type="number"]').value;
const loadText = 'wait a little bit'
factDiv.innerHTML = loadText;
const baseURL = 'http://numbersapi.com/'
fetch(baseURL + number)
.then(response => response.text())
.then(text => factDiv.innerHTML = text)
})




//   axios
//   .get ('http://numbersapi.com/')
//   .then((res) => {
//     console.log("response:" , res)
//   })






