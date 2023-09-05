//------------PAGE ELEMENTS------------
const WIDTH = 500
const HEIGHT = 500
let screen = document.querySelector('.screen')

let eraserButton = document.querySelector('.eraser-btn')
let rainbowButton = document.querySelector('.rainbow-btn')
let classicButton = document.querySelector('.classic-btn')
let clearButton = document.querySelector('.clear-btn')

let pixelQuantitySelection = document.querySelector('#pixel-option')
let pixelQuantity = 16

let currentMode = 'drawing'
let isMouseDown = false
let currentClass = 'classic' //default class
//------------MAIN------------

//Create initial grid of 16x16
createGrid(currentClass)
highlightButton(classicButton)


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
eraserButton.addEventListener('click', () => {
    disableAllHighlight()
    highlightButton(eraserButton)
    currentMode = 'erasing'
})
rainbowButton.addEventListener('click', () => {
    currentClass = 'rainbow'
    currentMode = 'drawing'

    disableAllHighlight()
    highlightButton(rainbowButton)
    screen.innerHTML = ''
    createGrid(currentClass)
})
classicButton.addEventListener('click', () => {
    currentClass = 'classic'
    currentMode = 'drawing'

    disableAllHighlight()
    highlightButton(classicButton)
    screen.innerHTML = '' 
    createGrid(currentClass)
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
            if (currentMode === 'drawing') {
                e.target.classList.add(classAdded)
            } else if (currentMode === 'erasing') {
                e.target.classList.remove('classic', 'rainbow')
             }
         } 
    })

    pixel.addEventListener('click', (e) => {
        if (currentMode === "drawing") {
            e.target.classList.add(classAdded) 
        } else if (currentMode === "erasing") {
            e.target.classList.remove('classic', 'rainbow')
        }       
    })
}

function clearGrid() {
    pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pixel) => {
        pixel.classList.remove('classic', 'rainbow', 'shading')
    })
}

// function setRandomColor() {
//     let color = "#"
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     color += randomColor
//     return color
// }

function highlightButton(button) {
    button.style.backgroundColor = '#1f2937'
    button.style.color = 'white'
}

function disableAllHighlight() {
    eraserButton.style.backgroundColor = ''
    eraserButton.style.color = ''
    rainbowButton.style.backgroundColor = ''
    rainbowButton.style.color = ''
    classicButton.style.backgroundColor = ''
    classicButton.style.color = ''
}