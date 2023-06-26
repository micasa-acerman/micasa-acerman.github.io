var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

function vibrate(val) {
    try {
        if (navigator) {
            if (navigator.vibrate) return navigator.vibrate(val);
            else if (navigator.oVibrate) return navigator.oVibrate(val);
            else if (navigator.mozVibrate) return navigator.mozVibrate(val);
            else if (navigator.webkitVibrate) return navigator.webkitVibrate(val);
        } else {
            document.append("Ваш браузер не поддерживает вибрации.")
        }
    } catch (e) {
        alert(e);
    }
}

function infiniteVibrate(val, interval) {
    stopVibrate();
    vInterval = setInterval(function () {
        vibrate(val);
    }, interval);
}

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(resolve, time)
})

const hearthBeats = async () => {
    await sleep(100);
    await vibrate(200);
    await sleep(400);
    await vibrate(200);
    await sleep(1000);

    hearthBeats();
}
hearthBeats();
function stopVibrate() {
    if (typeof (vInterval) !== "undefined") clearInterval(vInterval);
    vibrate(0);
}
video.onvolumechange = (event) => {
    alert("The volume changed.");
};
var video = document.getElementById('video');

var constraints = {
    video: {
        facingMode: "user"
    },
    audio: false
};
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        video.srcObject = stream;
        setTimeout(() => document.getElementById('loader').classList.add('closed'), 2000)

    }).catch(error => alert(error));
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name)
        document.getElementById('text').textContent = name;
    document.body.addEventListener("click", function () {
        var audio = document.getElementById("myAudio");
        audio.play();
    })

})