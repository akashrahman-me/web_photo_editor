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

type Dimension = {x: number; y: number};

function adjustDimension(
  dim: Dimension,
  exDim: Dimension = {x: 900, y: 500}
): Dimension {
  let adjustedX = dim.x;
  let adjustedY = dim.y;

  // If width exceeds 900, adjust width to 900 and maintain aspect ratio for height
  if (dim.x > exDim.x) {
    adjustedX = exDim.x;
    adjustedY = (dim.y * exDim.x) / dim.x;
  }

  // If height after width adjustment exceeds 500, adjust height to 500 and maintain aspect ratio for width
  if (adjustedY > exDim.y) {
    adjustedY = exDim.y;
    adjustedX = (dim.x * exDim.y) / dim.y;
  }

  return {
    x: adjustedX,
    y: adjustedY,
  };
}
