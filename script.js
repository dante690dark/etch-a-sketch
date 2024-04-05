document.addEventListener('DOMContentLoaded', () => {
  
  let size = 16, color='#000000'

  const buttonSize = document.querySelector('#button-size'),
        inputColor = document.querySelector('#input-color'),
        buttonRandom = document.querySelector('#button-random'),
        buttonClear = document.querySelector('#button-clear'),
        container = document.querySelector('.container-grid')
        
  const etchSketch = (isSize=false) =>{
    container.innerHTML = ''

    buttonRandom.onclick = () => {
      color = null
    }

    inputColor.addEventListener('change', (e) => {
      color = e.target.value
    })

    const prevSize = size

    if(isSize){ 
      do {
        size = prompt('Enter grid size (max 100):')
      }while ( size > 100) 
    }

    size ??= prevSize

    const divStyle = `width: calc(100% / ${size}); 
                    height: calc(100% / ${size});  
                    border: 1px solid #ddd; 
                    box-sizing: border-box;`,
          gridSize = size ** 2
      
    for (let i = 0; i < gridSize; i++) {
      
      const gridSquare = document.createElement('div')

      gridSquare.style.cssText = divStyle

      gridSquare.addEventListener('mouseover', () => {

        // TODO: refactor those if
        if(!gridSquare.style.backgroundColor){
          gridSquare.style.backgroundColor = color  
        }

        if(!gridSquare.style.backgroundColor){
          gridSquare.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        }

        if(gridSquare.style.backgroundColor){
          gridSquare.style.opacity = +gridSquare.style.opacity + 0.1
        }

      })
      
      container.appendChild(gridSquare)
    }

    buttonClear.addEventListener('click', () => {

      const containerArr = Array.from(container.childNodes);

      containerArr.forEach(div => {
        div.style.cssText = divStyle
      })

    })
  }

  etchSketch()
  
  buttonSize.addEventListener('click', () => {
      etchSketch(true)
    })
  }
)

