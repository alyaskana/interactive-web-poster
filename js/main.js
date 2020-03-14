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

// GET RANDOM BY RANGE
function getRandomByRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

// CREATE CRAB SVG
function generateCrabSvg(height = 92) {
  const width = height*163/92
  // let crabWrap = document.createElement('div')
  // crabWrap.classList.add('crabWrap')
  let crab = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  crab.setAttribute('width', width + 'vh')
  crab.setAttribute('height', height + 'vh')
  crab.setAttribute('viewBox', '0 0 163 92')
  crab.style.display = "none"
  crab.style.transformOrigin = 'center'
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('d', 'M-0.000216082 15.1001C-1.00022 24.3001 26.4998 23.5001 24.1998 30.9001C21.8998 38.3001 1.59978 26.3001 3.19978 35.5001C4.79978 44.7001 29.6998 42.9001 28.3998 50.3001C27.0998 57.7001 4.59978 53.9001 6.59978 63.4001C8.59978 72.9001 36.0998 56.6001 44.5998 59.9001C53.0998 63.2001 61.6998 72.1001 73.6998 74.3001C85.7998 76.5001 99.9998 71.0001 106.8 73.0001C113.6 75.0001 124.7 93.2001 136.2 91.6001C147.7 90.1001 118.8 75.7001 121.1 69.4001C123.4 63.1001 153.4 78.3001 154.2 73.1001C155 67.9001 132 62.7001 133.8 57.7001C135.6 52.7001 161.3 64.3001 162.3 57.0001C163.3 49.8001 132.4 47.5001 133.3 41.0001C134.2 34.5001 154.9 43.3001 154.8 37.6001C154.7 31.9001 110.7 25.8001 106.5 21.9001C102.3 18.0001 100.2 8.30014 95.2998 8.40014C90.3998 8.50014 87.9998 17.1001 78.1998 15.0001C68.3998 12.9001 71.1998 0.50014 62.2998 0.000139918C53.3998 -0.49986 63.9998 18.1001 51.0998 17.0001C38.1998 15.9001 0.999784 5.80014 -0.000216082 15.1001Z')
  path.setAttribute('fill', getColor('red'))

  crab.appendChild(path)
  // crabWrap.appendChild(crab)
  // document.querySelector('body').appendChild(crabWrap)
  document.querySelector('body').appendChild(crab)

  return crab
}

// CREATE CRAB
function createCrab(shape) {
  const crab = generateCrabSvg(getRandomByRange(5,8))
  crab.classList.add(shape.parentElement.id)
  crab.style.display = "block";
  crab.style.top = '91vh'
  const crabWidth = crab.getBoundingClientRect().width
  // crab.style.left = -crabWidth + 'px'
  crab.style.left = '5vw'

  anime({
    targets: crab,
    keyframes: [
      {rotate: -30},
      {rotate: 5}
    ],
    loop: true,
    direction: 'alternate',
    easing: 'linear'
  })

  let crabWrap = document.createElement('div')
  crabWrap.classList.add('crabWrap')
  crabWrap.appendChild(crab)
  document.querySelector('body').appendChild(crabWrap)

  anime({
    targets: crabWrap,
    translateX: '100vw',
    loop: true,
    easing: 'linear',
    duration: getRandomByRange(7000, 10000)
  })
}
// ON-OFF CRAB ON SCREEN
function toggleCrab(shape) {
  if (shape.classList.contains("active")) {
    createCrab(shape)
  } else {
    const crabList = document.querySelectorAll("." + shape.parentElement.id)
    crabList.forEach(crab => crab.remove());
  }
}

// RED BUTTONS
document.querySelectorAll('.red').forEach((shape, index) => {
  shape.addEventListener('click', () => {
    if (index%2 == 0) {
      toggleBubble(shape)
    } else {
      toggleCrab(shape)
    }
  })
});
