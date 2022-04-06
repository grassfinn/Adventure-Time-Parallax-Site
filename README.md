# Adventure-Time-Parallax-Site

## Table of contents

- [Overview](#overview)
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
Simple Parallax page that is Adventure Time Themed

### Purpose

Users should be able to:

- Click the button to start and stop the music
- Scroll and enjoy the page!

### Screenshot
![]()

### Links

- Live Site URL: [Adventure Time Parallax Site](https://grassfinn.github.io/Adventure-Time-Parallax-Site/)

## My process

### Built with

HTML5/CSS3/Vanilla Javascript

### What I learned
* I learned about hover effects you can do with CSS.
```css
.border:hover {
  border: dotted red 3px;
}
```
* I learned how you can make the parallax effect.
* I learned how to use position absolute and relative.
```css
.pimg1,
.pimg2,
.pimg3,
.pimg4 {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

```
* learned how you can make audio start and stop with JavaScript
```javascript
song = document.querySelector('.song');
song.volume = 0.6;
function toggleMusic() {
  return song.paused ? song.play() : song.pause();
}
var myAudio = document.getElementById('myAudio');
```
### Continued development
* Style changes to make it more multidevice friendly.


### Useful resources
https://www.w3schools.com/howto/howto_css_parallax.asp 

https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link/38665865#comment43189469_27368778



## Author

- My Blog - [HarpCode](https://harpcode.tech/)

- Twitter - [@hobjohn61](https://twitter.com/hobojohn61)


## Acknowledgments
