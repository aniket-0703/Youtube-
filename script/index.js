


async function fetchData() {

    var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=indian popular&type=video&part=snippet&key=AIzaSyA5q3pQA9OmPNeZUgXfjTgirhyqdzV4I5M`);

    var data = await res.json();

    data = data.items;



    localStorage.setItem("ytData", JSON.stringify(data));

    showData();

}

function showData() {

    box.innerHTML = "";
    var data = JSON.parse(localStorage.getItem("ytData"));

    data.forEach(function (video) {
        var card = document.createElement("div");

        var image = document.createElement("img");

        image.src = video.snippet.thumbnails.medium.url;

        var title = document.createElement("p");

        title.innerText = video.snippet.title;


        card.append(image, title);

        box.append(card);

        card.addEventListener("click", function () {
            var videoId = video.id.videoId;
            localStorage.setItem("videoId", JSON.stringify(videoId))
            window.open("/pages/playVideo.html", '_blank').focus();
        })
    })

    console.log(data);

    //dsauihwih
}

async function searchData() {

    event.preventDefault();

    var query = document.getElementById("input").value;

    console.log(query);

    var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&type=video&regionCode=IN&part=snippet&key=AIzaSyA5q3pQA9OmPNeZUgXfjTgirhyqdzV4I5M`);

    var data = await res.json();

    data = data.items;



    localStorage.setItem("ytData", JSON.stringify(data));

    showData();

}


var box = document.getElementById("content");

fetchData();