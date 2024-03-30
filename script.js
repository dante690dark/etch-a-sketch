document.addEventListener('DOMContentLoaded', function() {
  
    const size = 16
    const gridSize = size * size
    const container = document.querySelector('.container')

    for (let i = 0; i < gridSize; i++) {
      
      const gridSquare = document.createElement('div')

      gridSquare.style.cssText = `width: calc(100% / ${size}); 
                                  height: calc(100% / ${size});  
                                  border: 1px solid #ddd; 
                                  box-sizing: border-box;`

      gridSquare.addEventListener('mouseover', function() {
        gridSquare.style.backgroundColor = 'black'
      })
    
      container.appendChild(gridSquare)
    }
  }
);
