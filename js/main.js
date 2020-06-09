setInterval(() => {
  try {
    document.createElement('canvas').getContext('webgl', { powerPreference: "high-performance" })
  } catch(e) {}
}, 1000);

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
    colorClasses = ['red', 'blue', 'light-blue']
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

// CREATE RED CORALS SVG
function generateRedCoralsSvg(height = 1078) {
  const width = height*515/1078
  let redCorals = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  redCorals.setAttribute('width', width + 'vh')
  redCorals.setAttribute('height', height + 'vh')
  redCorals.setAttribute('viewBox', '0 0 515 1078')
  redCorals.style.display = "none"
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('stroke-width', '7')
  path.setAttribute('stroke', getColor('red'))
  path.setAttribute('fill', 'none')
  path.setAttribute('d', 'M237.4 783.1C225.9 725.4 207.1 667.3 215.3 609.1C222.4 559.3 216.8 510.1 210.9 460.6C206.5 424 199.8 387.6 190.8 351.8C182.3 318.1 166.8 282.8 168 247.6C168.6 230.3 168.6 213 169.4 195.6C169.8 187 170.4 178.4 171.4 169.9C171.9 165.7 172.5 161.4 173.2 157.2C173.8 153.4 173.4 150.3 173.4 146.5C173.4 137.3 175.1 128.1 178.3 119.5C179.3 116.7 181.3 113.6 184.2 113.9C186.3 114.1 187.7 116.2 188.7 118.1C194.9 130.3 194.4 143.4 195.7 156.7C197.2 171.6 198.9 186.3 199.9 201.3C201.6 229.6 197.8 255.5 207.5 283.3C209.1 288 211.9 293.4 216.9 293.8C229.2 294.9 231.1 247.1 232.3 237.7C236.7 204.6 239.4 171.7 243.9 138.8C245.2 129 246.2 119.2 247.1 109.4C248 100.2 248.2 90.6002 252 82.0002C252.5 80.8002 253.2 79.5002 254.5 79.1002C255.5 78.8002 256.7 79.1002 257.6 79.8002C258.5 80.5002 259 81.5002 259.6 82.4002C271.7 103.9 272.8 132.9 274.1 157C275.2 176.6 274.8 196.3 273 215.9C263.8 315.5 261.8 416 257 515.8C255 556.8 264.1 596.8 271 636.9C276.6 669.7 281.4 702.9 290 734.9C298.5 766.5 299.8 799.3 302.4 831.7C305 864.1 306.3 896.4 308.5 928.8C310.8 963.2 307.4 997.9 298.6 1031.2C295.4 1043.2 291.3 1055.4 282.8 1064.4C274.3 1073.4 260.3 1078.3 249.1 1072.9C239.9 1068.5 234.6 1058.2 233.5 1048C232.4 1037.8 234.8 1027.6 237.1 1017.7C241.8 997.6 250 975.8 251.6 955.3C253 937.5 251.5 918.1 251 900.1C249.5 860.9 245.1 821.7 237.4 783.1Z')
  redCorals.appendChild(path)
  path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('stroke-width', '7')
  path.setAttribute('stroke', getColor('red'))
  path.setAttribute('fill', 'none')
  path.setAttribute('d', 'M93.9002 803.2C131.9 860.9 154.5 915.5 156.9 985.4C157.4 998.9 157.6 1012.8 163.1 1025.2C168.5 1037.6 180.6 1048.1 194.1 1047.3C205.2 1046.6 214.8 1038.3 219.7 1028.3C224.7 1018.3 225.8 1006.9 226.1 995.8C226.9 969.4 223.5 942.7 215.5 917.5C211.7 905.4 204.5 893.9 201.3 881.8C198 868.8 196.6 854 193.9 840.6C188.3 812.9 185.5 784.6 185.7 756.4C185.7 750.4 186.5 744.4 185.1 738.5C183.7 732.9 183.4 727.6 183.4 721.8C183.4 708 184.7 694.2 185.1 680.4C185.7 663.2 186.3 646.1 186.8 628.9C186.9 626.1 186.3 622.3 183.5 621.9C181 621.6 179.3 624.4 178.4 626.7C170 648.5 165.8 671.9 166.1 695.3C153.8 670.8 143.1 643.2 142 615.6C140.8 585.9 142.2 556.2 140.3 526.6C138.6 499.2 132.9 471.7 120.1 447.4C118.5 444.4 116.1 441 112.7 441.3C109.6 441.5 107.7 444.7 106.7 447.7C104.1 455.4 104.4 463.7 104.8 471.8C105.8 497.1 106.3 520.7 107.6 546C109.5 583.3 104.4 620.5 117 655.7C124.3 676.1 131.6 696.7 135.9 717.9C138.3 729.5 139.7 741.3 139.8 753.2C139.8 758 141 778.9 135 781.1C133.2 781.8 131.3 780.6 129.8 779.5C120.1 772.1 115.7 762.6 110 752.3C93.4002 722.1 79.8002 688.1 74.8002 653.9C70.0002 621.3 73.9002 588.3 70.2002 556C66.4002 523.2 76.0002 490 74.6002 457.1C73.6002 434.2 67.9002 411.5 57.9002 390.8C56.0002 390.3 54.0002 391.4 52.7002 392.9C51.5002 394.4 50.9002 396.4 50.5002 398.3C43.9002 426.3 56.7002 456.9 47.1002 484C46.6002 485.4 46.0002 486.8 45.0002 487.8C42.2002 490.5 37.1002 489.1 34.7002 485.9C30.9002 480.8 31.9002 472.6 31.1002 466.6C30.0002 458.4 29.9002 450 30.2002 441.7C30.9002 424 33.1002 406.1 29.2002 388.9C28.0002 383.5 24.9002 377.3 19.4002 377.2C13.4002 377.2 10.5002 384.3 9.20016 390.2C-4.99984 461 5.30016 533.3 19.5002 602.7C25.9002 633.8 27.2002 666.3 36.9002 696.5C46.8002 727.4 63.2002 755.8 80.6002 783C85.0002 789.8 89.5002 796.5 93.9002 803.2Z')
  redCorals.appendChild(path)
  path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('stroke-width', '7')
  path.setAttribute('stroke', getColor('red'))
  path.setAttribute('fill', 'none')
  path.setAttribute('d', 'M350.8 148.7C356.7 110.3 357 71.1004 351.8 32.7004C350.6 23.7004 346.6 15.0004 341 7.80037C340.4 7.00037 339.6 6.10037 338.5 6.10037C337.2 6.10037 336.4 7.50037 335.9 8.70037C332.8 16.9004 334.5 26.0004 335.6 34.7004C340.5 74.6004 329.9 114.6 319.5 153.4C314 173.8 310.2 194.7 313 215.6C314.6 227.7 318.7 239.3 321.7 251.1C323.8 259.2 324.5 267.6 324.6 276C324.7 302.9 321.8 329.9 323.1 356.9C324.6 387.6 334.2 416.4 339.4 446.4C345.2 480.1 349.4 514 352 548.1C357.3 616.2 356.4 684.8 349.3 752.8C347.3 771.4 340.6 785.5 333.1 802.6C314.7 844.4 308.1 891.3 314.3 936.5C318 963.8 317.5 986 315.6 1013.4C314.8 1025.1 313.6 1038.1 320.6 1047.6C326.8 1056.1 338.5 1059.5 348.8 1057.7C359.2 1056 368.4 1049.8 375.9 1042.4C394.6 1024 404.1 996.6 400.8 970.5C399 956.5 393.9 943.1 391.7 929.1C388.6 909.1 391.7 888.6 398.2 869.4C409.3 836.5 430.6 807.2 458.3 786.3C501.4 753.8 513.5 694.7 511.6 640.8C510.1 599.4 501.4 558.5 495.6 517.4C492.9 498.6 491.2 479.6 488.8 460.7C488.3 456.9 487.3 452.3 483.7 450.9C479.2 449 474.7 453.5 472.1 457.7C460.2 476.8 455.4 499.4 452 521.7C443.5 577.7 442.5 634.8 449.1 691C451.7 712.9 444.7 736.6 428.8 751.9C427.2 753.4 425.2 755 423.1 754.6C420.3 754.1 419.1 750.8 418.7 748C417 738 417.8 727.7 418.7 717.5C421.3 684.8 423.9 652.1 426.6 619.4C431.4 560.2 431.8 504.2 446.8 446.7C464.3 379.6 488.3 316 488.8 246.6C489.3 176.1 486.7 106.6 492.3 36.3004C493.3 24.2004 490.5 17.3004 486.5 5.90037C485.9 4.30037 485 2.50037 483.3 2.40037C481.3 2.30037 480.3 4.80037 479.9 6.70037C472.9 39.0004 467.9 71.7004 464.6 104.5C461.5 135.7 459.8 167 460.6 198.3C461 213.1 460 228 457.3 242.6C455.9 249.8 454.3 257.2 451.8 264.1C451.3 265.4 443.9 279.8 443 278.7C439.5 274.6 440.1 268.5 440.8 263.2C443 246.8 445.5 230.4 448.1 214.1C450.7 197.9 450.9 180.8 452.3 164.5C453.7 148 455.1 131.4 456.5 114.9C459.3 82.2004 462 49.4004 464.8 16.7004C465.2 11.8004 464 5.10037 459.2 5.00037C455.5 4.90037 453.4 9.10037 452.2 12.7004C442.4 42.3004 435.4 72.7004 430.4 103.5C425.5 134.2 424.1 165.1 420.5 195.9C415.8 235.4 409.1 274.3 412 314.3C412.8 325.1 414.2 335.8 414.1 346.6C414 357.4 412.4 368.4 407.5 378C405.7 381.6 403 385.2 399 386C395.2 386.7 391.3 384.3 389.1 381.1C386.9 377.9 386.2 373.9 385.5 370.1C378.1 327 381.3 281.9 396.1 240.8C409.8 202.6 421.9 163.8 424.5 123.2C426.3 94.9004 424.4 66.5004 416.2 39.3004C415.3 36.3004 414 35.5004 412.8 32.5004C411.6 29.5004 410.1 26.6004 407.5 24.8004C404.9 23.0004 400.8 23.2004 399 25.8004C398.1 27.1004 398 28.7004 397.9 30.3004C397.1 52.9004 410.7 75.4004 404.8 97.2004C403.7 101.1 401.6 105.3 397.7 106.4C393.8 107.4 389.7 104.8 387.8 101.3C385.9 97.8004 385.6 93.6004 385.5 89.6004C384.7 64.5004 387.1 39.3004 392.8 14.9004C393.6 11.6004 394.1 7.40037 391.4 5.30037C389.3 3.60037 386 4.30037 383.9 6.10037C381.8 7.90037 380.7 10.5004 379.8 13.0004C368.9 41.0004 364.2 71.4004 366 101.3C366.9 116.1 370.6 130.4 371.9 145.1C373.3 160.5 372.5 176.2 369.6 191.4C368.8 195.7 367.8 199.9 366.6 204.1C365.2 209.1 360.8 218.6 354.3 213.8C349.2 210 347.9 199.2 347.2 193.5C345.5 178.6 348.5 163.5 350.8 148.7Z')
  redCorals.appendChild(path)

  document.querySelector('body').appendChild(redCorals)

  return redCorals
}

// CREATE RED CORALS ELEMENT
function createRedCorals(shape) {
  let coralHeight = getRandomByRange(65, 95)
  const redCorals = generateRedCoralsSvg(coralHeight)
  redCorals.classList.add(shape.parentElement.id)
  redCorals.style.display = 'block'
  redCorals.style.top = '100vh'
  redCorals.style.left = `${getRandomByRange(0,80)}vw`

  anime({
    targets: redCorals,
    translateY: `-${coralHeight-coralHeight/20}vh`,
    duration: 5000,
    easing: 'linear',
    loop: false
  })
}

// ON-OFF RED CORALS ON SCREEN
function toggleRedCorals(shape) {
  if (shape.classList.contains("active")) {
    createRedCorals(shape)
  } else {
    const redCoralsList = document.querySelectorAll("." + shape.parentElement.id)
    redCoralsList.forEach(redCorals => redCorals.remove());
  }
}

// LIGHT-BLUE BUTTONS
document.querySelectorAll('.light-blue').forEach((shape, index) => {
  shape.addEventListener('click', () => {
    toggleRedCorals(shape)

    // if (index%2 == 0) {
    //   toggleRedCorals(shape)
    // } else {
    //   // toggleLightBlueCorals(shape)
    // }
  })
});

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
function createFish(shape, reversed = false) {
  const fish = generateFishSvg(getRandomByRange(3,6))
  fish.classList.add(shape.parentElement.id)
  fish.style.display = "block";
  fish.style.top = `${getRandomByRange(5, 85)}vh`
  const fishWidth = fish.getBoundingClientRect().width
  fish.style.zIndex = getRandomByRange(-1, 0)
  if (reversed) {
    fish.style.left = window.innerWidth + fishWidth + 'px'
    fish.style.transform = 'rotate(180deg)'
  } else {
    fish.style.left = -fishWidth + 'px'
  }
  anime({
    targets: fish,
    translateX: '100vw',
    duration: window.innerWidth / 750 * getRandomByRange(5000, 10000),
    easing: 'linear',
    loop: true
  })
}

// ON-OFF FISH ON SCREEN
function toggleFish(shape) {
  if (shape.classList.contains("active")) {
    createFish(shape)
    createFish(shape, true)
  } else {
    const fishList = document.querySelectorAll("." + shape.parentElement.id)
    fishList.forEach(fish => fish.remove());
  }
}

// СИНИЕ КНОПКИ ЧТО АКТИВИРУЮТ
document.querySelectorAll('.blue').forEach((shape, index) => {
  shape.addEventListener('click', () => {
    toggleFish(shape)
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
  crab.style.left = -crabWidth + 'px'

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

// SHAPE ANIMATIONS

const shapesAnimations = [
  {
    name: 'shape-1',
    path: 'M41.3999 204.1C30.9999 169.2 21.7999 130.7 7.79986 58.8002C-0.100145 18.4002 19.3999 -7.69982 56.3999 2.10018C104.8 14.9002 41.7999 156 90.2999 160.9C121.4 164.1 138.4 15.1002 183.4 25.1002C204.4 29.8002 189.5 62.8002 179.2 80.2002C134 157.5 123.8 190.4 139 256.7C146.7 293.3 100.1 329.3 79.4999 361.5C61.3999 399.4 111.5 431.3 108.6 466.5C106.6 491.2 89.2999 522.7 47.6999 537.5C17.8999 548 -4.10014 539.2 0.599855 522.3C6.49985 501.1 58.0999 489.8 66.4999 459.6C74.5999 430.5 19.8999 410 9.09986 373.8C-1.10014 339.8 47.9999 338.8 83.9999 304C109.3 279.7 52.3999 241.1 41.3999 204.1Z',
    moveX: "0",
    moveY: "0"
  },
  {
    name: 'shape-2',
    path: 'M97.7 102.1C117.1 68.7999 152.9 34.5999 184.6 13.3999C195 6.39985 211.9 -5.00014 224.7 2.39986C258.8 22.0999 203.1 56.9999 192.8 68.7999C181 82.1999 175.8 96.6999 179.5 107.6C182.6 116.7 192.1 123.3 209.3 124.5C220.5 125.3 239.1 118.1 256.3 113.8C269.1 110.6 291.5 106.3 297.5 131.3C310.3 184.5 195.8 348.7 172.8 376.6C157.5 395.3 106.5 458.3 89.5 437.3C66.2 408.5 166.3 336.6 144.5 324.5C121.4 311.7 100.5 344.6 81.5 370.3C64.5 393.3 42.3 437.8 16.5 419.3C-22.5 391.3 16.3 360.2 41 310C73.8 243.3 60.1 166.8 97.7 102.1Z',
    moveX: "0",
    moveY: "0"
  },
  {
    name: 'shape-3',
    path: 'M54.6998 106.1C67.7998 100.1 91.4998 90.7996 108.7 90.0996C133.7 89.0996 158.7 97.0996 153.9 128.6C148.4 164.7 116 210.3 86.7999 255.4C48.7999 314 13.6998 382.8 3.09985 463.3C-2.10015 491.6 -0.900146 542.8 26.2999 556.1C73.9999 582 87.6999 467 98.7999 422.1C113.2 363.6 115.7 275.1 136.1 292.2C217.9 361 280.2 363 305.9 310.2C330.2 260.1 287.6 237.9 252.5 238.4C204.1 241.3 171.4 222.4 200.9 182.1C223.1 149 273.8 143.1 310.3 153.4C340.7 162 386.3 216.8 404.7 207.7C444.6 188 372.5 145.9 379.4 118.3C391.7 68.8996 477.2 86.8996 493 43.4996C499.5 25.5996 485.3 11.1996 463.2 3.39962C440.1 -4.80038 387.7 1.79962 367.7 19.9996C336.3 48.4996 328.7 82.9996 293.9 96.2996C237.6 117.9 237.5 75.2996 205.3 55.4996C165.3 30.9996 131.1 16.4996 92.6998 31.0996C64.8998 41.6996 46.0998 56.7996 33.6998 67.0996C27.6998 72.0996 12.5998 91.8996 13.6998 103.1C15.7998 123.4 43.6998 111.1 54.6998 106.1Z',
    moveX: "3.89%",
    moveY: "-1%"
  },
  {
    name: 'shape-4',
    path: 'M192 289.9C215 264.8 253.9 303.5 283.8 300.7C313.1 297.9 336.7 269.2 350.4 230.4C362.7 196 356.1 156.8 384.8 141C416.2 123.6 466.5 134.6 507.1 127C542.7 120.1 573.7 101 576.2 64.8999C578.2 30.1999 542.9 3.89991 503.9 17.6999C429.6 32.3999 416 112.9 333.6 55.1999C313.7 37.1999 303.9 4.79991 258.9 0.499914C212.8 -3.90009 186.5 22.6999 185.4 48.5999C187.3 79.7999 207.1 104.6 239.5 128.5C260.3 143.8 306.2 163.6 286.9 203.3C270.3 237.5 223 206.6 198.7 182.4C165.6 149.3 145.8 112.5 114.9 91.2999C94.0003 77.2999 42.3003 63.7999 20.4003 80.8999C-37.8997 121.4 45.6003 117.2 67.4003 126.9C101 142 142 189.8 102.8 225.5C78.5003 247.7 16.2003 260.7 11.5003 312.2C8.50029 355.4 77.5003 402.2 120.5 390.2C168.5 376.8 167.5 316.6 192 289.9Z',
    moveX: "1.23%",
    moveY: "2.4%"
  },
  {
    name: 'shape-5',
    path: 'M15.0998 123.4C56.0998 149.8 92.9998 100.6 128.5 88.4C158 78.2 195.1 80.1 220.5 99.7C237.4 112.7 254.7 163.3 277.2 155.6C297.9 148.4 285.1 92.6 293.6 77.4C339.1 -3.50002 387.2 171 399 189.3C442.6 257.2 491.5 164.6 474.9 116.1C463.1 81.8 436.2 67 405.5 52C381.5 40.2 358.2 8.39998 333.9 1.59998C301.4 -7.40002 296.1 26.7 274.2 41.8C241.6 64.3 208.3 38.3 172.8 39.5C142.4 40.6 119.9 67 92.9998 69.8C38.2998 75.4 97.5998 46.1 93.9998 23.5C86.6998 -23.1 -40.8002 87.5 15.0998 123.4Z',
    moveX: "2.24%",
    moveY: "-0.74%"
  },
  {
    name: 'shape-6',
    path: 'M2.80031 41.7999C10.9003 68.7999 100.3 42.7999 112.4 67.1999C140.4 124.2 35.0003 179.3 85.4003 216.2C126.4 246.2 155.8 124.8 194.4 117.2C263.3 103.8 305.7 210 349.4 221.2C431.7 242.3 359.3 134.3 387.8 116.5C421.4 95.5999 500 140.6 527.5 95.3999C577.9 12.6999 482.4 2.19988 398.5 50.7999C339.9 84.6999 255.1 41.1999 177.2 21.6999C151.4 15.1999 -19.4997 -32.0001 2.80031 41.7999Z',
    moveX: "0%",
    moveY: "-2.4%"
  },
  {
    name: 'shape-7',
    path: 'M258.2 412.2C256.6 393 278.7 381.6 288.1 368C302.6 346.9 302.6 321.9 292 298.6C270.4 251 222.4 254 177.9 250.7C150.9 248.7 103.1 242.8 98.6001 208.8C95.2001 183 120.8 154.9 134.2 135.4C148.9 114.1 172.1 86.2001 168.5 58.4001C163.4 18.0001 113.4 -0.999924 78.0001 1.10008C33.7001 3.70008 -9.29988 35.2001 2.30012 83.7001C8.30012 109 64.4001 164.7 73.3001 112.3C76.4001 93.6001 57.1001 79.5001 58.3001 62.0001C59.7001 41.9001 84.5001 32.6001 101.7 40.5001C141.4 58.7001 123.4 114.8 98.5001 135.8C74.6001 155.9 1.70012 172.2 6.80012 215C10.9001 249.2 59.7001 253.2 57.9001 294.5C56.3001 330.8 -28.1999 447 27.0001 477.1C63.7001 497.1 115.2 449.1 127.4 419C137.9 393.2 132.2 377.8 119.4 355.8C106.8 334.1 100.2 321.4 124.9 304.4C152.4 285.4 206.6 284.5 231.9 308.4C271.3 345.6 210.5 374.1 187.2 394.4C146.6 429.9 158.8 480.6 209.7 497.1C229.3 503.4 262.4 504.4 274.3 483.4C287.3 460.7 260.1 435.1 258.2 412.2Z',
    moveX: "0%",
    moveY: "0%"
  },
  {
    name: 'shape-8',
    path: 'M212.5 227.3C221.2 202.4 220.3 160.5 203.4 142.4C191.1 128.8 145.9 114.3 140.8 137C137.6 153.1 170.8 166.8 166.8 187.7C162.4 210.6 123.7 204.1 109.5 189.2C75.6 159.1 105.2 80.0999 112.3 51.0999C115.8 34.5999 130.3 -2.10014 86.7 1.09986C53.1 3.59986 38 33.6999 33.8 49.6999C28.1 71.0999 23.4 105.1 44.7 130.3C65.2 154.5 88 177.9 82.4 205.1C71.9 246.1 -7.40004 268.6 1.39996 310.5C4.49996 325 20.5 340.5 40.9 331.4C55.7 325.3 61.6 298.2 77 290.7C120.2 271 189.2 282.9 212.5 227.3Z',
    moveX: "2.1%",
    moveY: "1.2%"
  },
  {
    name: 'shape-9',
    path: 'M155.5 101.3C155.5 69.3003 175.3 16.9003 206.7 3.10029C223.4 -4.19971 243 1.60029 251.8 18.3003C262.4 38.3003 250.3 63.5003 242 82.1003C219.3 133 205.4 183.9 243.2 232.8C274.4 273.2 345.3 251.6 335 316.6C327.8 361.9 303.7 409 286.1 451.2C275.1 477.6 241.9 559.2 199.5 536.6C160.3 515.7 194.3 459.9 216.2 442C251.5 413.2 280.5 386 252.5 338.5C209.7 265.6 154.4 406 144.5 437.3C132.7 474.5 126.1 520 147.6 555C182.5 611.7 244.9 582.2 289.2 558C316.4 543.1 369 520 397.4 546.1C436.4 581.9 375.8 619.2 347 628.2C270.5 652 166.3 663.5 116.3 586.4C100.8 562.6 91.4 532.7 88.6 504.5C86.6 484.5 91.8 461.4 85.9 441.9C75.4 407.4 -9.00004 403.7 1.59996 369C7.29996 350.3 49.2 341.5 65.1 335.5C89.2 326.4 114.3 316.8 130.9 296C171.6 244.9 155.5 161.4 155.5 101.3Z',
    moveX: "1.95%",
    moveY: "-6%"
  },
  {
    name: 'shape-10',
    path: 'M334.7 157.8C305.4 182.7 259.4 152.6 225.3 155.5C191.3 158.4 184.5 196.4 157.7 214.1C124 237.8 74.2002 210.8 31.2002 233.8C-16.9998 261.1 -3.99982 295.7 34.2002 317.3C74.2002 339.9 105.4 346.1 105.3 401.2C105.2 457.4 54.6002 518.6 59.0002 574.8C64.1002 626.1 113.2 635.7 148.1 591.3C183.1 546.9 181.5 469.5 183.8 418.4C185.7 377.1 160.2 291.3 208.3 290C251.3 289.5 257 352.8 268.3 384.2C288.4 429.4 307.6 418.4 307.2 384.4C306.8 345.1 303.8 308.5 327.5 277.1C351.1 247.9 387.9 229.2 411.1 193.9C426 161.2 435.9 78.1003 425 33.0003C417 0.000282288 391.7 -11.9997 379 14.0003C356.2 61.0003 367.3 130.1 334.7 157.8Z',
    moveX: "2%",
    moveY: "0%"
  },
  {
    name: 'shape-11',
    path: 'M29.6 333.3C42.5 341.6 60 339.1 65.7 324.1C72.3 306.7 60.3 285.1 60.6 267.3C60.8 254.2 70.7 237.3 86.4 243.9C100.1 249.6 96.1 274.2 108.4 278.7C135.4 288.7 154.4 245.7 173.7 250.6C217.3 261.8 202.2 332.5 238.8 351C259.8 361.6 283.5 342.2 300.1 331.2C321.9 316.7 348.1 299 375.6 303.1C398.4 306.5 408.7 326 428.2 335.1C452.2 346.3 473.8 333.1 488.6 314.1C502.4 296.4 513.7 275.3 523.2 253C536.6 221.5 546.2 187.6 553.4 157.4C563.7 114.1 588.7 24.0001 529.5 3.00005C473.4 -16.8999 495.9 64.6001 481.5 87.9001C458.8 124.8 378.5 114.5 342.3 116C305.7 117.4 254.2 118.7 247.2 165.9C244.4 184.9 256.1 196.3 273.1 202.4C293.1 209.6 308.4 203.1 326.2 194C348.9 182.4 397.8 143.7 419.9 174.1C448.9 213.9 379.3 243.4 351.9 252.1C306.8 266.5 252.4 256.8 225.1 215.5C206.8 187.8 218 154.6 225.9 125.2C232.9 99.4001 247.1 53.2001 223 31.9001C202.9 14.1001 174.1 30.0001 156.8 43.6001C130.9 64.1001 115.2 91.5 109 123.7C105.7 141 115.8 182.6 90.4 182C71.9 181.5 64.8 161.5 53.4 150.4C38.8 136.2 18.4 136 6.10003 154.8C-7.49997 175.9 1.90003 315.6 29.6 333.3Z',
    moveX: "0%",
    moveY: "-0.7%"
  },
  {
    name: 'shape-12',
    path: 'M228.2 166.801C248.5 215.401 277.5 283.001 221.4 335.801C200.4 359.001 169 371.601 163.3 339.601C159.5 318.301 188.1 277.201 155.6 279.901C114.9 279.501 93.5001 401.901 48.7001 420.901C-40.2999 458.801 17.1 333.201 38.5 295.301C55.8 264.701 71.6 220.101 99.3 215.401C125.2 211.001 144.6 228.501 153.7 205.801C165.8 168.001 138.2 108.701 168 55.8006C185.3 25.1006 228.4 -24.6994 246.6 15.5006C259.8 55.3006 213.5 132.101 228.2 166.801Z',
    moveX: "0%",
    moveY: "2.6%"
  },
  {
    name: 'shape-13',
    path: 'M73.1 0.900666C-15.8 -4.69933 -2.59995 241.501 10 296.801C16.2 324.001 30.2001 410.401 68.9001 411.801C124 413.801 90.2 313.801 88 288.201C82.7 226.301 149.3 189.301 195.8 237.501C227.1 270.001 240.6 312.001 280.1 338.101C315.2 361.301 351 360.901 391.2 355.801C415.2 352.801 479 343.601 462.4 302.701C449.2 270.201 404.7 287.101 381.5 291.501C350.2 297.301 323.3 296.101 304.4 267.301C281.2 231.901 310.2 178.201 268.6 155.201C219.8 128.201 87.9001 210.501 57.9001 151.201C45.5001 126.601 116.2 3.60067 73.1 0.900666Z',
    moveX: "-0.4%",
    moveY: "0%"
  },
  {
    name: 'shape-14',
    path: 'M12.7001 160.7C27.7001 191.2 65.7001 190.9 99.4001 176C135.7 159.9 171.4 119 204.4 97.0003C217.6 88.2003 278.6 72.2003 253 50.4003C227.1 27.2003 174.7 80.3003 162.7 89.2003C145.2 102 109.2 130.7 97.6001 99.4003C87.0001 72.4003 99.1001 10.5003 64.5001 2.00029C-20.4999 -18.9997 0.100123 135 12.7001 160.7Z',
    moveX: "0%",
    moveY: "-1.7%"
  },
  {
    name: 'shape-15',
    path: 'M34.1005 451C46.3005 485.8 83.1004 498.9 112.2 485C144 478.6 151.3 427.4 179.6 486C190.4 508.4 192.101 574.6 229.801 563C272.401 552.8 235.4 467 226.1 440.7C218.5 418.8 183.3 347.2 219.7 335.3C265.2 321.9 246.401 389.3 290.401 371.4C325.101 357.3 299.5 312.3 296.2 290.3C291.1 256.1 298.4 218.7 314.6 183.1C329.3 150.7 417.5 12.2004 346 1.00036C267 -12.7996 252.1 167 242.5 213C238.4 231.7 213.8 309.7 167.5 289.2C144.6 279.1 163.9 242.7 130.6 234.2C58.9005 216.4 121.186 386.9 105 409C79 444.5 60.3004 333.1 40.7004 322C11.4004 304.8 -2.99951 325.7 1.00049 344.1C3.90049 357.1 19.2005 370.8 24.1005 386.9C29.6005 405.1 25.4005 426.2 34.1005 451Z',
    moveX: "-0.2%",
    moveY: "-0.85%"
  },
  {
    name: 'shape-16',
    path: 'M209.501 302.5C198.401 360.2 160.301 396 145.501 447.8C136.901 478 126.2 552.9 166 550.5C204.2 548.2 214.201 480.7 218.601 452.5C225.401 408.3 236.101 368.5 247.801 316.3C268.001 225.9 286.501 84.8001 210.901 19.1001C186.301 -2.29995 139.401 -11.5 140.801 28.7C141.701 52.9 192.801 113.7 150.501 108.5C136.601 106.8 124.801 82.7 108.901 84.9C92.1007 87.2 86.4006 112 86.2006 136.9C84.8006 190.3 104.701 220.6 86.2006 266.5C66.4006 308.8 28.6002 329.8 8.50024 371C-7.49976 403.9 -1.3996 442.1 34.0004 461C93.7006 492.874 125.801 369.2 138.301 324.3C145.901 295.5 152.301 212 172.301 193.5C204.801 162.5 219.401 251.2 209.501 302.5Z',
    moveX: "2.13%",
    moveY: "-4.92%"
  },
  {
    name: 'shape-17',
    path: 'M84.5998 189.8C59.3998 194.5 -10.8002 174.7 1.49976 229.5C11.1998 266.3 70.4998 262.5 97.5998 256.9C137.8 248.6 173.2 221.6 215.8 221.4C265.7 223.3 314.2 268.7 367.7 262.2C467.1 250.2 490 211.5 515 197.5C575.4 163.7 642.514 291.666 707.5 165.9C724.5 133 702.5 100.4 687.1 102.2C653.1 106.2 635.1 154.2 598.4 128.3C538.2 85.7998 526 -4.80025 473 0.199755C424.8 4.69975 430.7 127.2 418.6 165.9C411 208.2 357.5 164.6 308.7 139.1C227.8 86.0998 163.2 175.1 84.5998 189.8Z',
    moveX: "0.1%",
    moveY: "-6.86%"
  },
  {
    name: 'shape-18',
    path: 'M338.2 69.7999C288.6 66.1999 182.4 -25.3001 136.7 56.6999C126.7 87.4999 152.9 125.8 154.2 166.1C156.7 220.9 124.6 242.4 85.4001 247.4C10.4001 253.7 -21.0999 320.2 15.6001 362.5C88.5001 431.8 296.6 424.7 268.4 340.2C257.2 306.7 222.5 314.4 194.9 306.5C148.2 293.7 186.5 253.9 215.7 243.3C251.5 232.3 286 250.6 300.4 283.4C315.1 312.5 308 338.4 324 375.7C339.4 419.2 378.9 400.3 397.2 366.9C417.3 329.2 423.8 258.9 416.9 224.4C409.7 187.9 382.6 173.8 348.8 168.9C328.2 165.9 249.2 184.8 253.6 143.9C258.4 99.9999 337.3 119 357.6 119.8C399.5 120.6 434.8 110.3 452 69.0999C459.7 50.6999 472.8 -8.70013 444.6 1.59987C434.4 5.29987 415 37.1999 404.9 45.3999C385.2 61.2999 363.6 71.6999 338.2 69.7999Z',
    moveX: "-1.4%",
    moveY: "2.03%"
  }
]

shapesAnimations.forEach(shapesAnimation => {
  gsap.to(`#${shapesAnimation.name} .shape`, {morphSVG: {shape: shapesAnimation.path, shapeIndex: [0, 22, 0]}, duration: 4, yoyo: true, repeat: -1, ease: Sine.easeInOut})
  gsap.to(`#${shapesAnimation.name}`, {x: shapesAnimation.moveX, y: shapesAnimation.moveY, duration: 4, yoyo: true, repeat: -1, ease: Sine.easeInOut})
});
