/**
 * 200. Number of Islands
 * 
 * Execution time 60 ms, faster than 100% of JS submissions!
 * 
 * Difficulty: Medium
 * 
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  if(!grid || !grid[0]) {
    return 0;
  }
  
  let isles = 0;
  const yMax = grid.length;
  const xMax = grid[0].length;
  
  const dfs = (yPos, xPos) => {
    if(grid[yPos] && grid[yPos][xPos] === '1') {
      grid[yPos][xPos] = '0';
      dfs(yPos + 1, xPos);
      dfs(yPos - 1, xPos);
      dfs(yPos, xPos + 1);
      dfs(yPos, xPos - 1);
    }
  };
  
  for(let y = 0; y < yMax; y++) {
    for(let x = 0; x < xMax; x++) {
      if(grid[y][x] === '1'){
        isles++;
        dfs(y, x);
      }
    }
  }
  
  return isles;
};