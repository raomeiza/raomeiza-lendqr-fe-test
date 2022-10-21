// create an algoritm to check
// if and where a point p lies in a triangle
// return 0 if the triangle does not form a degenerate triangle
// return 1 if the point p belongs to the triangle but point q does not
// return 2 if point q lies in the triangle but p does not
// return 3 if both points lie in the triangle
// return 4 if neither point p nor q lie in the triangle

const doTheyLieInTriangle = (x1, y1, x2, y2, x3, y3, px, py, qx, qy) => {
  // check if the triangle is degenerate
  if ((x1 === x2 && y1 === y2) || (x2 === x3 && y2 === y3) || (x1 === x3 && y1 === y3)) {
    return 0;
  }
  // check if point p lies in the triangle
  const pInTriangle = ((x2 - x1) * (py - y1) - (px - x1) * (y2 - y1)) * ((x3 - x2) * (py - y2) - (px - x2) * (y3 - y2)) >= 0
    && ((x3 - x2) * (py - y2) - (px - x2) * (y3 - y2)) * ((x1 - x3) * (py - y3) - (px - x3) * (y1 - y3)) >= 0
    && ((x1 - x3) * (py - y3) - (px - x3) * (y1 - y3)) * ((x2 - x1) * (py - y1) - (px - x1) * (y2 - y1)) >= 0;
  // check if point q lies in the triangle
  const qInTriangle = ((x2 - x1) * (qy - y1) - (qx - x1) * (y2 - y1)) * ((x3 - x2) * (qy - y2) - (qx - x2) * (y3 - y2)) >= 0
    && ((x3 - x2) * (qy - y2) - (qx - x2) * (y3 - y2)) * ((x1 - x3) * (qy - y3) - (qx - x3) * (y1 - y3)) >= 0
    && ((x1 - x3) * (qy - y3) - (qx - x3) * (y1 - y3)) * ((x2 - x1) * (qy - y1) - (qx - x1) * (y2 - y1)) >= 0;
  // return the result
  if (pInTriangle && qInTriangle) {
    return 3;
  }
  if (pInTriangle) {
    return 1;
  }
  if (qInTriangle) {
    return 2;
  }
  return 4;
};

console.log(doTheyLieInTriangle(2,2,7,2,5,4,4,3,7,4)); // 1