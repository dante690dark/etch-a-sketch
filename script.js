document.addEventListener('DOMContentLoaded', () => {
  
    const button = document.querySelector('button')
  
    button.addEventListener('click', () => {

      const container = document.querySelector('.container-grid')
      container.innerHTML = ''

      let size 

      do {
        size = prompt('Enter grid size (max 100):')
      }while (size > 100)

      const gridSize = size**2
        
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
    })
  }
);
