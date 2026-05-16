function spamPhoto3() {

    let button = document.getElementById("spamBtn3");

    button.disabled = true;

    let container = document.getElementById("photoContainer3");

    // for(let i = 0; i < 20; i++) {

    let video = document.createElement("video");

    video.src = "video6.mp4";

    video.width = 300;

    video.autoplay = true;

    video.loop = true;

    video.muted = true;

    video.controls = true;

    container.appendChild(video);

    // }

}
