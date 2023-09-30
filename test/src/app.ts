import adjustDimension from "./utils/adjustDimension.js";

// Fetch the canvas and get its 2D context
const cropper = document.getElementById("crop-master") as HTMLCanvasElement;
const ctx = cropper.getContext("2d");

const image = new Image();
image.src = "images/freelancer.jpg";

cropper.width = 900;
cropper.height = 500;

const adjImg = adjustDimension({x: image.width, y: image.height});

image.addEventListener("load", function () {
  ctx?.drawImage(
    image,
    (900 - adjImg.x) / 2,
    (500 - adjImg.y) / 2,
    adjImg.x,
    adjImg.y
  );
});

function debounce(func: (...args: any[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout | undefined;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Example usage for logging the zoom level with a 100ms delay
let zoomLevel = 0;
const logZoomLevel = debounce(() => {
  console.log(zoomLevel);
}, 100);

cropper.addEventListener("wheel", () => {
  zoomLevel += 1;
  logZoomLevel();
});
