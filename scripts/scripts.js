
document.querySelector("img").addEventListener("click", changeImg);

function changeImg() {
    var img = document.querySelector("img");

    img.src = "images/animal.png";
    console.log(img);
}