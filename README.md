# [Node Life](https://node-life.herokuapp.com/)

*NOTE:* This is the second iteration of a previous project based on Conway's Game of Life that I have done.
The first iteration can be found [here](https://github.com/EconClass/tree-of-life).

## Conway's Game of Life

The Game of Life is a type of cellular automaton. In other words it's simulation of what it's like to be in a 2D world, but with a twist! In this 2D world that's represented by a grid, each cell represents a living creature. To survive, these creatures don't care about finding water, food or shelter like us beings in the 3D world. Instead these creatures only need to follow certain rules. For Conway's Game of Life the rules are:

1) Any live cell with two or three neighbors survives.
2) Any dead cell with EXACTLY three live neighbors becomes a live cell.
3) All other cells will die or stay dead.

## The Grid Representation

If you took a look at the Visualizer already you'll notice that the grid I used doesn't look like a typical grid. That's because the Visualizer is showing the concept behind a data structure called a Quadtree. Here's how a typical Game of Life is typically shown like this:

![alt](https://images.thoughtbot.com/codecation/gol.gif)

However, if you notice there's a good amount of the grid that's in white all the time. This is because most of the time there won't be enough living cells near them for them to revive. This doesn't mean nothing happens though, in fact the computer will keep drawing the same dead cells over and over.

## An Alternative

[Quadtrees](https://en.wikipedia.org/wiki/Quadtree) are a solution to that problem, in that they only need to redraw the parts that change. And in the case that they do need to change, it will take the least amount of effort to draw. Which is why for the Visualizer on this site, you saw different sized squares. For a computer, the difference between drawing a small square and a big square is negligible, in the end what matters more is how many squares were drawn.

Quadtrees shine as data structures in situations like this as they greatly reduce the number of "drawings" or renders it needs to do by a substantial amount.
