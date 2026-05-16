function spamPhoto2() {

    let button = document.getElementById("spamBtn2");

    button.disabled = true;

    let container = document.getElementById("photoContainer2");

    // for(let i = 0; i < 20; i++) {

    let video = document.createElement("video");

    video.src = "video2.mp4";

    video.width = 300;

    video.autoplay = true;

    video.loop = true;

    video.muted = true;

    video.controls = true;

    container.appendChild(video);

    // }

}