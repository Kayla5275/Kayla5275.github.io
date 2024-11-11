const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
  '/wa/img/KJ-Simpson.png',
  '/wa/img/MichaelBJordan.png',
  '/wa/img/RomeFlynn.png',
  '/wa/img/KelleyO.png',
  '/wa/img/ChristopherMBrown.png'
];

/* Declaring the alternative text for each image file */
const alts = {
  '/wa/img/KJ-Simpson.png': 'Picture of basketball player KJ Simpson',
  '/wa/img/MichaelBJordan.png': 'Picture of actor Michael B Jordan',
  '/wa/img/RomeFlynn.png': 'Picture of actor Rome Flynn',
  '/wa/img/KelleyO.png': 'Picture of basketball player Kelly Oubre Jr.',
  '/wa/img/ChristopherMBrown.png': 'Picture of singer Chris Brown'
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
