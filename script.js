//------------PAGE ELEMENTS------------
const WIDTH = 500
const HEIGHT = 500
let screen = document.querySelector('.screen')
let pixelQuantitySelection = document.querySelector('#pixel-option')
let pixelQuantity = 16

let isMouseDown = false
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
    createGrid()
})



//-----------FUNCTIONS-------------

function createGrid() {
    for (let i=0; i < (pixelQuantity*pixelQuantity) ; i++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.style.width = `${WIDTH / pixelQuantity}px`; 
        pixel.style.height = `${HEIGHT / pixelQuantity}px`;

        pixel.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
            e.target.classList.add('clicked') }
        })

        screen.appendChild(pixel)
    }
}