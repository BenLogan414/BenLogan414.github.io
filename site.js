// Assignment 5
setInterval(() => {
    currentImage++
    showImages()
}, 5000)

// Assignment 3
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

// Assignment 4
localStorage.setItem("It's a secret to everybody.", "WHO DO YOU THINK YOU ARE I AM")

// Assignment 5
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

// Assignment 6
const todoInput = document.getElementById('new-todo')
const todos = JSON.parse(localStorage.getItem('todo-list')) || []
const todoList = document.getElementById('todo-list')

addItem.addEventListener('click', () => {
    todos.push({ text: todoInput.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos()
    
})


const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

renderTodos()

// Assignment 7
const pokemonImage = document.getElementById('pokemon-image');

(async () => {

    const getRandomPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);
        const response = await fetch(url)
        const json = await response.json()
        const { name } = json
        front_default = json.sprites.front_default
        return { name, front_default }
    }

    const renderPokemon = ({ name, front_default }) => {
        const img = document.createElement('img')
        img.src = front_default
        img.alt = name
        pokemonImage.append(img)
    }

    renderPokemon(await getRandomPokemon())

})()