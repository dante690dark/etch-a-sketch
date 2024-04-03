const INITIAL_VALUE = 16
document.addEventListener('DOMContentLoaded', () => {
  
  let size = INITIAL_VALUE
  const button = document.querySelector('button')

  const etchSketch = (str=false) =>{
    const container = document.querySelector('.container-grid')
    container.innerHTML = ''

    if(str){ 
      do {
        size = prompt('Enter grid size (max 100):')
      }while (size > 100) 
    }

    size ??= INITIAL_VALUE

    const gridSize = size ** 2
      
    for (let i = 0; i < gridSize; i++) {
      
      const gridSquare = document.createElement('div')

      gridSquare.style.cssText = `width: calc(100% / ${size}); 
                                  height: calc(100% / ${size});  
                                  border: 1px solid #ddd; 
                                  box-sizing: border-box;`

      gridSquare.addEventListener('mouseover', () => {

        if(!gridSquare.style.backgroundColor){
          gridSquare.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        }

        if(gridSquare.style.backgroundColor){
          gridSquare.style.opacity = +gridSquare.style.opacity + 0.1
        }
      })
    
      container.appendChild(gridSquare)
    }   
  }

  etchSketch()
  
  button.addEventListener('click', () => {
      etchSketch(true)
    })
  }
)
