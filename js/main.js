// SET RANDOM COLOR CLASS TO SHAPES IN VIEWPORT
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
// 
let colorClasses = []
shapesInViewport.forEach(shape => {
  if (colorClasses.length == 0) {
    colorClasses = ['red', 'blue', 'light-blue', 'beige']
  }

  const colorClass = colorClasses.splice(Math.floor(Math.random() * colorClasses.length), 1)[0]; 
  shape.classList.add(colorClass)
});

// SET ACTIVE CLASS ON CLICK
shapeList.forEach(shape => {
  shape.addEventListener('click', (event) => {
    event.target.classList.toggle('active')
  })
});

// GET ROOT COLOR VALUE
function getColor(colorName) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(`--${colorName}`)
} 

// CREATE FISH SVG
function generateFishSvg(height = 66) {
  const width = height*140/66
  let fish = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  fish.setAttribute('width', width + 'vh')
  fish.setAttribute('height', height + 'vh')
  fish.setAttribute('viewBox', '0 0 140 66')
  fish.style.display = "none"
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('d', 'M84.6002 2.79966C98.8002 -1.70034 115.5 -1.10034 127.3 7.99966C139.1 17.0997 143.4 36.0997 133.9 47.4997C127.1 55.6997 115.5 58.1997 104.8 58.6997C89.8002 59.3997 76.2002 56.2997 61.9002 52.4997C50.6002 49.4997 39.5002 45.0997 28.1002 50.8997C21.8002 54.1997 18.4002 59.6997 13.2002 64.0997C9.00024 67.6997 3.30024 66.0997 7.40024 60.2997C10.8002 55.3997 14.0002 49.6997 15.6002 43.8997C17.2002 38.0997 14.5002 34.9997 10.0002 31.1997C6.80024 28.4997 3.30024 26.0997 1.10024 22.5997C0.500242 21.4997 -0.0997581 20.2997 0.000241932 18.9997C0.100242 17.6997 0.800242 16.3997 2.00024 16.0997C3.10024 15.7997 4.30024 16.2997 5.40024 16.7997C12.7002 20.3997 21.0002 29.5997 28.9002 30.3997C36.9002 31.2997 45.0002 25.4997 51.6002 21.6997C62.6002 15.4997 72.3002 6.69966 84.6002 2.79966Z')
  path.setAttribute('fill', getColor('blue'))

  fish.appendChild(path)
  document.querySelector('body').appendChild(fish)

  return fish
}

// GET RANDOM BY RANGE
function getRandomByRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// CREATE FISH
function createFish(shape) {
  const fish = generateFishSvg(getRandomByRange(3,6))
  fish.classList.add(shape.parentElement.id)
  fish.style.display = "block";
  fish.style.top = `${getRandomByRange(5, 85)}vh`
  const fishWidth = fish.getBoundingClientRect().width
  fish.style.left = -fishWidth + 'px'
  fish.style.zIndex = getRandomByRange(-1, 0)

  anime({
    targets: fish,
    translateX: '100vw',
    duration: getRandomByRange(5000, 10000),
    easing: 'linear',
    loop: true
  })
}

// ON-OFF FISH ON SCREEN
function toggleFish(shape) {
  if (shape.classList.contains("active")) {
    createFish(shape)
    createFish(shape)
  } else {
    const fishList = document.querySelectorAll("." + shape.parentElement.id)
    fishList.forEach(fish => fish.remove());
  }
}

// СИНИЕ КНОПКИ ЧТО АКТИВИРУЮТ
document.querySelectorAll('.blue').forEach((shape, index) => {
  shape.addEventListener('click', () => {
    if (index%2 == 0) {
      toggleFish(shape)
    } else {
      // invertColors()
      // TODO: ДОБАВИТЬ ЧТО ДЕЛАЮТ НЕЧЕТНЫЕ КНОПКИ
    }
  })
});

// CREATE BUBBLE ELEMENT
function createBubbleElement() {
  let bubble = document.createElement('div')
  bubble.classList.add('bubble')
  let size = `${getRandomByRange(3,15)}vw`
  bubble.style.width = size
  bubble.style.height = size
  bubble.style.display = 'none'
  document.querySelector('body').appendChild(bubble)

  return bubble
}

// CREATE BUBBLE
function createBubble(shape) {
  const bubble = createBubbleElement()
  bubble.classList.add(shape.parentElement.id)
  bubble.style.display = 'block'
  bubble.style.top = '100vh'
  bubble.style.left = `${getRandomByRange(5,95)}vw`

  anime({
    targets: bubble,
    translateY: '-100vh',
    duration: getRandomByRange(5000, 10000),
    easing: 'linear',
    loop: true
  })
}

// ON-OFF BUBBLES ON SCREEN
function toggleBubble(shape) {
  if (shape.classList.contains("active")) {
    createBubble(shape)
    createBubble(shape)
  } else {
    const bubbleList = document.querySelectorAll("." + shape.parentElement.id)
    bubbleList.forEach(bubble => bubble.remove());
  }
}

// RED BUTTONS
document.querySelectorAll('.red').forEach((shape, index) => {
  shape.addEventListener('click', () => {
    if (index%2 == 0) {
      toggleBubble(shape)
    } else {
      // toggleCrab()
    }
  })
});

gsap.to("#shape-1 .shape", {morphSVG:"M41.3999 204.1C30.9999 169.2 21.7999 130.7 7.79986 58.8002C-0.100145 18.4002 19.3999 -7.69982 56.3999 2.10018C104.8 14.9002 41.7999 156 90.2999 160.9C121.4 164.1 138.4 15.1002 183.4 25.1002C204.4 29.8002 189.5 62.8002 179.2 80.2002C134 157.5 123.8 190.4 139 256.7C146.7 293.3 100.1 329.3 79.4999 361.5C61.3999 399.4 111.5 431.3 108.6 466.5C106.6 491.2 89.2999 522.7 47.6999 537.5C17.8999 548 -4.10014 539.2 0.599855 522.3C6.49985 501.1 58.0999 489.8 66.4999 459.6C74.5999 430.5 19.8999 410 9.09986 373.8C-1.10014 339.8 47.9999 338.8 83.9999 304C109.3 279.7 52.3999 241.1 41.3999 204.1Z", duration: 1})