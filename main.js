const header = document.querySelector("#header")
const image = document.querySelector("#image")
const credit = document.querySelector("credit")

document.querySelector("#acknowledgements-button").addEventListener("click", function () {
    header.innerHTML = "Acknowledgements"
})

function loadContent() {
    // URL of the content you want to fetch
    const contentUrl = "https://datawrapper.dwcdn.net/s3uaG/1/";

    // Fetch the content
    fetch(contentUrl)
        .then(response => response.text())
        .then(data => {
            // Display the content in the "loaded-content" div
            document.getElementById("loaded-content").innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
}