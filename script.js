function spamPhoto() {

    let button = document.getElementById("spamBtn");

    button.disabled = true;

    let container = document.getElementById("photoContainer");

    // for(let i = 0; i < 20; i++) {

    let video = document.createElement("video");

    video.src = "video.mp4";

    video.width = 300;

    video.autoplay = true;

    video.loop = true;

    video.muted = true;

    video.controls = true;

    container.appendChild(video);

    // }

}