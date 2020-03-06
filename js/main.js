const shapeList = [...document.querySelectorAll('.shape')]
const shapesInViewport = shapeList.filter((shape) => {
  const bounding = shape.getBoundingClientRect()
  const widthGap = bounding.width * 0.5
  const heightGap = bounding.height * 0.5
  
  return bounding.top >= 0 - heightGap &&
	bounding.left >= 0 - widthGap &&
	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + widthGap &&
	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + heightGap
})
let colorClasses = []
shapesInViewport.forEach(shape => {
  if (colorClasses.length == 0) {
    colorClasses = ['red', 'blue', 'light-blue', 'beige']
  }

  const colorClass = colorClasses.splice(Math.floor(Math.random() * colorClasses.length), 1)[0]; 
  shape.classList.add(colorClass)
});
