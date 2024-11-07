const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
  '/wa/img/KJ-Simpson.jpeg',
  '/wa/img/Michael-B-Jordan.jpeg',
  '/wa/img/Rome-Flynn.jpg',
  '/wa/img/Kelly-Oubre-Jr.jpg',
  '/wa/img/Jalen-Green.jpeg'
];

/* Declaring the alternative text for each image file */
const alts = {
  '/wa/img/KJ-Simpson.jpeg': 'Picture of basketball player KJ Simpson',
  '/wa/img/Michael-B-Jordan.jpeg': 'Picture of actor Michael B Jordan',
  '/wa/img/Rome-Flynn.jpg': 'Picture of actor Rome Flynn',
  '/wa/img/Kelly-Oubre-Jr.jpg': 'Picture of basketball player Kelly Oubre Jr.',
  '/wa/img/Jalen-Green.jpeg': 'Picture of basketball player Jalen Green'
};

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);  // Fix: corrected the path here
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.className;  // Fix: corrected the property here
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
