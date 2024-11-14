let myData = {};

function fetchData(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => {
        if(res.ok){
            return res.json();
        } else {
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("jokeDisplay").innerHTML = myData.value;
    })
    .catch(error => {
        console.log(error);
        document.getElementById("jokeDisplay").innerHTML = "Oops! Something went wrong.";
    });
}

fetchData(); // Fetch a joke initially
document.getElementById("generate").addEventListener("click", fetchData);
