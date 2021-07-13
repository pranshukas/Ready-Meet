const cameraBtn = document.querySelector("#cams-toggle");
cam = {};
function gotDevices(mediaDevices) {
  let count = true;
  mediaDevices.forEach((mediaDevice) => {
    if (mediaDevice.kind === "videoinput") {
      cam[mediaDevice.deviceId] = count;
      count = false;
    }
  });
  cameraBtn.setAttribute("camera", JSON.stringify(cam));
}
navigator.mediaDevices.enumerateDevices().then(gotDevices);
