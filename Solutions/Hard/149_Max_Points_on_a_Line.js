/**
 * @param {number[][]} points
 * @return {number}
 */

// There is 4 situation for 2 points to share the same line
// Situation 1 : If points are duplicate then obviously they are on the same line
// Situation 2 : If X1 = X2 that means they are on the same Y axes
// Situation 3 : If  Y1 = Y2 that means they are on the same X axes
// Situation 4 : ( Slope ) (Y2 - Y1 ) / ( X2 - X1 ) = 0 then they are on the same line

var maxPoints = function (points) {
  if (points.length < 3) {
    return points.length;
  }
  var result = 1;
  for (let i = 0; i < points.length - 1; i++) {
    let stats = { duplicates: 1, Xaxes: 0, Yaxes: 0 };
    let maximumNumberOfPoints = 0;
    let x1 = points[i][0];
    let y1 = points[i][1];
    for (let j = i + 1; j < points.length; j++) {
      let x2 = points[j][1];
      let y2 = points[j][1];

      //Situation 1
      if (x1 == x2 && y1 == y2) {
        stats["duplicates"]++;
      }
      //Situation 2
      else if (x1 == x2) {
        stats["Yaxes"]++;
        maximumNumberOfPoints = Math.max(maximumNumberOfPoints, stats["Yaxes"]);
      }
      //Situation 3
      else if (y1 == y2) {
        stats["Xaxes"]++;
        maximumNumberOfPoints = Math.max(maximumNumberOfPoints, stats["Xaxes"]);
      }
      //Situation 4
      else {
        let slope = ((y2 - y1) * 100) / (x2 - x2);
        if (!stats[slope]) {
          stats[slope] = 0;
        }
        stats[slope]++;
        maximumNumberOfPoints = Math.max(maximumNumberOfPoints, stats[slope]);
      }
    }
    result = Math.max(result, maximumNumberOfPoints + stats["duplicates"]);
  }
  return result;
};

console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
);
