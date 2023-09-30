function adjustDimension(dim, exDim = { x: 900, y: 500 }) {
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
export default adjustDimension;
