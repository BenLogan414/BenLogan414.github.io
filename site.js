setInterval(() => {
    currentImage++
    showImages()
}, 5000)

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

localStorage.setItem("It's a secret to everybody.", "WHO DO YOU THINK YOU ARE I AM")

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const nextImage = (currentImage) => {
    currentImage = currentImage + 1
    showImages()
}

const prevImg = document.querySelector('#prev')
const nextImg = document.querySelector('#next')

prev.addEventListener('click', () => {
    currentImage--
    showImages()
})
next.addEventListener('click', () => {
    currentImage++
    showImages()
})