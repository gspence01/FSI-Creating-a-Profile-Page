let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append("Rizzo")
content.append(header)
let dogContentDiv = document.createElement('div')
dogContentDiv.setAttribute('class', 'dog-content')
let dogImage = document.createElement('img')
dogImage.setAttribute("class", 'dog-image')
dogImage.setAttribute("src","./assets/rizzo.jpg")
dogContentDiv.append(dogImage)
content.append(dogContentDiv)
let dogDetailsDiv = document.createElement('div')
dogDetailsDiv.setAttribute('class','dog-details')
let description = document.createElement('h3')
description.textContent = "Description:"
dogDetailsDiv.append(description)
dogContentDiv.append(dogDetailsDiv)
let paragraph = document.createElement('p')
paragraph.textContent = "This gentle dog is aloof towards her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetailsDiv.append(paragraph)
let feeding = document.createElement('h3')
feeding.textContent = 'Feeding Times:'
dogDetailsDiv.append(feeding)
let list = document.createElement('ul')
let breakfast = document.createElement('li')
let lunch = document.createElement('li')
let dinner = document.createElement('li')
breakfast.textContent = '9:00 AM'
lunch.textContent = '12:00 PM'
dinner.textContent = '5:00 PM'
list.append(breakfast)
list.append(lunch)
list.append(dinner)
dogDetailsDiv.append(list)