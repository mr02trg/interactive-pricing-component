# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

#### 1. How to implement a toggle
```html
<label class="switch">
  <input type="checkbox" class="toggle__checkbox">
  <div class="toggle"></div>
</label>
```
```css
/* toggle switch */
.switch {
  width: 55px;
  height: 30px;
  margin: 0 10px;
}
.switch .toggle {
  position: relative;
  background-color: hsl(223, 50%, 87%);
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.switch .toggle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 2px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  transform: translateY(-50%);
  transition: .5s;
}
.switch input {
  display: none;
}
.switch input:checked + .toggle {
  background-color: var(--soft__cyan);
}
.switch input:checked + .toggle::before{
  left: unset;
  transform: translateY(-50%) translateX(28px);
  transition: .5s;
}
```



#### 2. Styling slider
- There are 2 part to a slider: the track and the handle. We only style the handle in this challenge
```css
.pricing__slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: var(--soft__cyan);
  opacity: 0.7;
  margin: 40px 0 60px 0;
}
.pricing__slider.active {
  background-color: var(--soft__cyan);
}
/* styling the handle */
.pricing__slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--strong__cyan);
  background-image: url(images/icon-slider.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transform: all .2s;
}
.pricing__slider::-webkit-slider-thumb:hover {
  background-color: var(--strong__cyan);
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@mr02trg](https://www.frontendmentor.io/profile/mr02trg)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

