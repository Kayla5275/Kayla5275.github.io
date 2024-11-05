const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 35 fahrenheit outside, so :insertx: went for a winter walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Jane Doe saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a cold day.';
const insertX = ['Papa Smurf', 'Big Daddy', 'Spongebob'];
const insertY = ['Krusty Krab', 'Disneyland', 'Candyland'];
const insertZ = ['spontaneously combusted', 'started making out with a frog', 'froze into a ice cube'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Jane Doe', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('35 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}