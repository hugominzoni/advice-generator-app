const id = document.getElementById('id');
const quote = document.querySelector('.advice-quote');
const button = document.querySelector('.dice')
button.addEventListener('click', refreshAdvice)
document.addEventListener('DOMContentLoaded', getQuote)


function getQuote(){
	fetch("https://api.adviceslip.com/advice")
	.then(res => res.json())
	.then(data => {
	const advice = data.slip.advice;
	let number = data.slip.id;
	id.textContent = number;
	quote.textContent = `"${advice}"`
})
.catch(err => {
	console.log(`error ${err}`)
});	
}

function refreshAdvice(){
	getQuote()
}