document.addEventListener('DOMContentLoaded', function() {
  
    const prueba = 16
    const gridSize = prueba * prueba

    for (let i = 0; i < gridSize; i++) {
      
      const gridSquare = document.createElement('div')

      gridSquare.style.cssText = `width: calc(100% / ${prueba}); 
                                  height: calc(100% / ${prueba});  
                                  border: 1px solid #ddd; 
                                  box-sizing: border-box;`
    
      document.querySelector('.container').appendChild(gridSquare)
    }
  }
);
