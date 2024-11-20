// Function to fetch and display the latest xkcd comic
function loadLatestComic() {
    fetch('https://corsproxy.io/?https://xkcd.com/info.0.json') // Use CORS proxy to bypass restrictions
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch the latest comic');
            return response.json();
        })
        .then(data => {
            // Update the comic title, image, and published date
            document.getElementById('comicTitle').innerText = data.title;
            document.getElementById('comicImage').src = data.img;
            document.getElementById('comicImage').alt = data.alt;

            const formattedDate = formatDate(data.year, data.month, data.day);
            document.getElementById('publishDate').innerText = "Date Published: " + formattedDate;

            console.log('Latest comic loaded:', data); // For debugging
        })
        .catch(error => {
            console.error(error);
            document.getElementById('comicTitle').innerText = 'Error loading comic';
            document.getElementById('comicImage').src = 'placeholder.jpg'; // Add a placeholder image if necessary
            document.getElementById('publishDate').innerText = '';
        });
}

// Date formatting utility function
function formatDate(year, month, day) {
    return new Date(year, month - 1, day).toLocaleDateString("en-US");
}

// Call the function to load the latest comic on page load
document.addEventListener('DOMContentLoaded', loadLatestComic);

// Add click event listener for fetching random comics
document.getElementById('getComicButton').addEventListener('click', function () {
    const randomComicNumber = Math.floor(Math.random() * 3000) + 1;

    fetch(`https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`)
        .then(response => {
            if (!response.ok) throw new Error('Comic not found');
            return response.json();
        })
        .then(data => {
            // Update the comic title, image, and published date
            document.getElementById('comicTitle').innerText = data.title;
            document.getElementById('comicImage').src = data.img;
            document.getElementById('comicImage').alt = data.alt;

            const formattedDate = formatDate(data.year, data.month, data.day);
            document.getElementById('publishDate').innerText = "Date Published: " + formattedDate;

            console.log('Random comic loaded:', data); // For debugging
        })
        .catch(error => {console.log(error);});
});

