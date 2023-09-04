//------------PAGE ELEMENTS------------
const WIDTH = 500
const HEIGHT = 500
let screen = document.querySelector('.screen')

let shadingButton = document.querySelector('.shading-btn')
let rainbowButton = document.querySelector('.rainbow-btn')
let classicButton = document.querySelector('.classic-btn')
let clearButton = document.querySelector('.clear-btn')

let pixelQuantitySelection = document.querySelector('#pixel-option')
let pixelQuantity = 16

let isMouseDown = false
let currentClass = 'classic' //default class
//------------MAIN------------

//Create initial grid of 16x16
createGrid()


//Event Listener to handle if the mouse is held down or not.
screen.addEventListener('mousedown', () => {
    isMouseDown = true
})
screen.addEventListener('mouseup', () => {
    isMouseDown = false
})

//Event listener to update the Grid with appropriate Pixel Quanity.
pixelQuantitySelection.addEventListener('change', (e) =>{
    pixelQuantity = parseInt(e.target.value)
    screen.innerHTML = '' //clear the current grid
    createGrid(currentClass)
})

// //Event listener for modes buttions.
shadingButton.addEventListener('click', () => {
    currentClass = 'shading'
})
rainbowButton.addEventListener('click', () => {
    currentClass = 'rainbow'
})
classicButton.addEventListener('click', () => {
    currentClass = 'classic'
})
clearButton.addEventListener('click', () => clearGrid())



//-----------FUNCTIONS-------------

function createGrid(classAdded) {
    for (let i=0; i < (pixelQuantity*pixelQuantity) ; i++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.style.width = `${WIDTH / pixelQuantity}px`; 
        pixel.style.height = `${HEIGHT / pixelQuantity}px`;

        addEventListenerForDrawing(pixel, classAdded)
        screen.appendChild(pixel)
    }
}

function addEventListenerForDrawing(pixel, classAdded) {
    pixel.addEventListener('mousemove', (e) => {
        if (isMouseDown) {
        e.target.classList.add(classAdded) }
    })
    pixel.addEventListener('click', (e) => {
        e.target.classList.add(classAdded) 
    })
}

function clearGrid() {
    pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pixel) => {
        pixel.classList.remove('classic', 'rainbow', 'shading')
    })
}