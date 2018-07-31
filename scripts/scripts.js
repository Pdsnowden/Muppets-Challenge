
document.querySelector("img").addEventListener("click", changeImg);

function changeImg() {
    var img = document.querySelector("img");

    img.src = "images/animal.png";
    console.log(img);
}

const TODAY = new Date();
const YEAR = TODAY.getFullYear();
const FOOTERTEXT = document.querySelector(".date");

FOOTERTEXT.innerHTML = (`Copyright ${YEAR}`);


addEventListener('load', function () {
    var ONE_SECOND = 1000,
        lastTick = +new Date(),
        timer = document.querySelector(".timer");
        seconds = 60;

    function tick() {
        var now = +new Date(),
            nextTick = 2 * ONE_SECOND - (now - lastTick);

        lastTick = now;
        if (--seconds) {
            setTimeout(tick, nextTick > ONE_SECOND ? ONE_SECOND : nextTick);
        }
        timer.innerHTML = "0:" + (seconds < 10 ? '0' : '') + seconds;
    }

    timer.innerHTML = "01:00";
    setTimeout(tick, ONE_SECOND);
});