/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift(0);
  var count = 0;
  var i;
  
  for (i = 1; i < preferences.length; i++) {
    if (preferences[i] === i) {
      preferences[i] = 0;
    }
  }
  
  for (i = 1; i < preferences.length; i++) {
    if (preferences[i] === 0) continue;
      else if (preferences[preferences[preferences[i]]] === i) {
        count++;
        preferences[preferences[preferences[i]]] = 0;
        preferences[preferences[i]] = 0;
        preferences[i] = 0;
      }
  }
    
  return count;
};
