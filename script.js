//------------PAGE ELEMENTS------------
const WIDTH = 500
const HEIGHT = 500
let screen = document.querySelector('.screen')
let pixelQuantitySelection = document.querySelector('#pixel-option')
let pixelQuantity = 16

//------------MAIN------------



//Create initial grid of 16x16
createGrid()

//Event listener to update the Grid with appropriate Pixel Quanity.
pixelQuantitySelection.addEventListener('change', (e) =>{
    pixelQuantity = parseInt(e.target.value)
    screen.innerHTML = ''
    createGrid()
})



//-----------FUNCTIONS-------------

function createGrid() {
    for (let i=0; i < (pixelQuantity*pixelQuantity) ; i++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.style.width = `${WIDTH / pixelQuantity}px`; 
        pixel.style.height = `${HEIGHT / pixelQuantity}px`;
        screen.appendChild(pixel)
    }
}