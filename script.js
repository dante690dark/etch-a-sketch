document.addEventListener('DOMContentLoaded', () => {
  
  let size = 16
  const buttonSize = document.querySelector('#button-size'),
        container = document.querySelector('.container-grid')
        
  const etchSketch = (isSize=false) =>{
    container.innerHTML = ''

    const prevSize = size

    if(isSize){ 
      do {
        size = prompt('Enter grid size (max 100):')
      }while ( size > 100) 
    }

    size ??= prevSize

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
  
  buttonSize.addEventListener('click', () => {
      etchSketch(true)
    })
  }
)
