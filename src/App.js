import React from 'react'
import Grid from './Gamelogic'


function App(props) {
  

  
  return (
    <div className="App text-center">
    <h1>Sliding Puzzle</h1>
    {/* <Gamelogic /> */}
      <Grid />


    </div>
  );
}

export default App;

//check win condition
//if win cond/loop through item should be equal to the index
//winPos=false
//id matches index
//not move array... array[0] curr =1 and item curr=0
//index i =0 
//switch case
//else break
//setState and render something
//render would happen in the tile
//x+150 px
//y-150 px
//valid move
