
const article = document.querySelector('article')
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (getHours = isMorning) {
    article.textContent = 'Good Morning!'
} else if (getHours = isAfternoon) {
    article.textContent = 'Good Afternoon!'
} else if (getHours = isEvening) {
    article.textContent = 'Good Evening!'
}