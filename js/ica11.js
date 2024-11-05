//Fortune Teller Code
const numKids = document.getElementById('numKids');
const pname = document.getElementById('partnerName');
const geo = document.getElementById('geoLoc');
const job = document.getElementById('job');
const fortune = document.querySelector('.fortune');
const FortuneTeller = document.querySelector('.FortuneTeller');

const Template = "You will be a :X: in :Y:, and married to :Z: with :N: kids.";

fortune.addEventListener('click', result);

function result(){
    let newFortune = Template;
    const jobT = job.value
    const geoL = geo.value
    const partnername = pname.value
    const numChild = numKids.value

    newFortune = newFortune.replaceAll(':X:',jobT);
    newFortune = newFortune.replaceAll(':Y:',geoL);
    newFortune = newFortune.replaceAll(':Z:',partnername);
    newFortune = newFortune.replaceAll(':N:',numChild);

    FortuneTeller.textContent = newFortune;
    FortuneTeller.style.visibility = 'visible';
}
//Dog Age Calculator Code
const dogAge = document.getElementById('dogAge');
const calcAge = document.querySelector('.calculateAge');
const Age = document.querySelector('.Age');

const template = "Your doggie is NN years old in dog years!";

calcAge.addEventListener("click", ageoutput);

function ageoutput() {
    let newage = template;
    const doggoAge = dogAge.value;
    const doggieAge = doggoAge * 7;

    newage = newage.replaceAll('NN', doggieAge)
    Age.textContent = newage;
    Age.style.visibility = 'visible';
}
