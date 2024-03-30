document.addEventListener('DOMContentLoaded', () => {
  
    const button = document.querySelector('button')
  
    button.addEventListener('click', () => {

      const container = document.querySelector('.container')
      container.innerHTML = ''

      let size 

      do {
        size = prompt('Enter grid size (max 100):')
      }while (size > 100)

      const gridSize = size * size
        
      for (let i = 0; i < gridSize; i++) {
        
        const gridSquare = document.createElement('div')

        gridSquare.style.cssText = `width: calc(100% / ${size}); 
                                    height: calc(100% / ${size});  
                                    border: 1px solid #ddd; 
                                    box-sizing: border-box;`

        gridSquare.addEventListener('mouseover', () => {
          gridSquare.style.backgroundColor = 'black'
        })
      
        container.appendChild(gridSquare)
      }   
    })
  }
);
