// ======================== FISH =============================
const shapeList = [...document.querySelectorAll('.shape')]
const shapesInViewport = shapeList.filter((shape) => {
  const bounding = shape.getBoundingClientRect()
  const widthGap = bounding.width * 0.5
  const heightGap = bounding.height * 0.5
  
  return bounding.top >= 0 - heightGap &&
	bounding.left >= 0 - widthGap &&
	bounding.right <= (window.innerWidth) + widthGap &&
	bounding.bottom <= (window.innerHeight) + heightGap
})

let colorClasses = []
shapesInViewport.forEach(shape => {
  if (colorClasses.length == 0) {
    colorClasses = ['red', 'blue', 'light-blue', 'beige']
  }

  const colorClass = colorClasses.splice(Math.floor(Math.random() * colorClasses.length), 1)[0]; 
  shape.classList.add(colorClass)
});


shapeList.forEach(shape => {
  shape.addEventListener('click', (event) => {
    event.target.classList.toggle('active')
  })
});

function getColor(colorName) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(`--${colorName}`)
} 



function generateFishSvg(height = 66) {
  const width = height*140/66
  let fish = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  fish.setAttribute('width', width + 'vh')
  fish.setAttribute('height', height + 'vh')
  fish.setAttribute('viewBox', '0 0 140 66')
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('d', 'M84.6002 2.79966C98.8002 -1.70034 115.5 -1.10034 127.3 7.99966C139.1 17.0997 143.4 36.0997 133.9 47.4997C127.1 55.6997 115.5 58.1997 104.8 58.6997C89.8002 59.3997 76.2002 56.2997 61.9002 52.4997C50.6002 49.4997 39.5002 45.0997 28.1002 50.8997C21.8002 54.1997 18.4002 59.6997 13.2002 64.0997C9.00024 67.6997 3.30024 66.0997 7.40024 60.2997C10.8002 55.3997 14.0002 49.6997 15.6002 43.8997C17.2002 38.0997 14.5002 34.9997 10.0002 31.1997C6.80024 28.4997 3.30024 26.0997 1.10024 22.5997C0.500242 21.4997 -0.0997581 20.2997 0.000241932 18.9997C0.100242 17.6997 0.800242 16.3997 2.00024 16.0997C3.10024 15.7997 4.30024 16.2997 5.40024 16.7997C12.7002 20.3997 21.0002 29.5997 28.9002 30.3997C36.9002 31.2997 45.0002 25.4997 51.6002 21.6997C62.6002 15.4997 72.3002 6.69966 84.6002 2.79966Z')
  path.setAttribute('fill', getColor('blue'))
  fish.appendChild(path)
  fish.style.display = "none"
  document.querySelector('body').appendChild(fish)

  return fish
}

function addFish(shape) {
  if (shape.classList.contains("active")) {
    const fish = generateFishSvg(5)
    fish.classList.add(shape.parentElement.id)
    fish.style.display = "block";
    fish.style.top = "50px"
    const fishWidth = fish.getBoundingClientRect().width
    fish.style.left = -fishWidth + 'px'

    anime({
      targets: fish,
      translateX: '100vw',
      duration: 10000,
      easing: 'linear',
      loop: true
    })
  } else {
    const fishList = document.querySelectorAll("." + shape.parentElement.id)
    fishList.forEach(fish => fish.remove());
  }
}

document.querySelectorAll('.blue').forEach((shape, index) => {
  shape.addEventListener('click', () => {
    if (index%2 == 0) {
      addFish(shape)
    } else {
      // invertColors()
      // TODO: ДОБАВИТЬ ЧТО ДЕЛАЮТ НЕЧЕТНЫЕ КНОПКИ
    }
  })
});