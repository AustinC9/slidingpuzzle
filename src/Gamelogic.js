import React, { Component } from 'react';

export default class Grid extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Tiles: [
              { 'id': 0, 'val': 0, 'posMove':[1,4]},
              { 'id': 1, 'val': 1, 'posMove':[0,2,5] },
              { 'id': 2, 'val': 2, 'posMove':[1,6,3]}, 
              { 'id': 3, 'val': 3, 'posMove': [2,7] },
              { 'id': 4, 'val': 4, 'posMove': [0,5,8] },
              { 'id': 5, 'val': 5, 'posMove': [1,4,6,9] },
              { 'id': 6, 'val': 6, 'posMove': [2,5,7,10] },
              { 'id': 7, 'val': 7, 'posMove': [3,6,11] },
              { 'id': 8, 'val': 8, 'posMove': [4,9,12] },
              { 'id': 9, 'val': 9, 'posMove': [5,8,10,13] },
              { 'id': 10, 'val': 10, 'posMove': [6,9,11,14] },
              { 'id': 11, 'val': 11, 'posMove': [7,10,15] },
              { 'id': 12, 'val': 12, 'posMove': [8,13] },
              { 'id': 13, 'val': 13, 'posMove': [9,12,14] },
              { 'id': 14, 'val': 14, 'posMove': [10,13,15] },
              { 'id': 15, 'val': 15, 'posMove': [11,14] },
            ],
          }

        this.bindClick = this.bindClick.bind(this)


    }
    
    bindClick(num){
      
      //let posMove = this.state.Tiles[num].posMove
      //let id = this.state.Tiles[num].id
      let Tiles = this.state.Tiles
      let moveArr = this.state.Tiles[num].posMove 
      //console.log(moveArr)
      //if(Tiles[num].id === 0){
    //  for (let x=0; x<15; x++)
         if(moveArr.indexOf(this.state.Tiles[num].val = 0) !== -1){
          console.log('hello')
         }
      //}

      //console.log(Tiles[num].val) 
      // const tilePos = Tiles.posMove
      // let newTilePos =tilePos.map((tile) => {
      //   console.log(tile)
      //   return console.log(newTilePos)
      // })
      //console.log(Tiles[num].posMove)

      
      
      //for(let j = 0; j < Tiles[num].posMove; j++){ 
 
        




          //console.log(Tiles[num].posMove.length)
        
        this.setState({Tiles})
      }
    

         
    //}
    //loop through posMove
    //see if 0 is in possible move
    //if it is swap the val into the id 
    //swap the val into the id
    //keep id the same
    //move 0 into old val
    //display new number
    //use num to go through possible moves
    //only thing that will change is the val
    //so if j is going through the posMove array
    //looking for 0 if it doesnt find it do nothing
    //if it finds zero in the array it will swap zero display and zero into value
    //i dont need to use .length
    //possibly set a temparr


      //     console.log(id)
      //   }
      //   else {
      //     console.log(id)
      //   }
        //console.log(clicked)
       // console.log('hello')
        //console.log(num)
    // set value to the num
    // switch number with 0
    // have tempnum = 0
    // when value store number clicked in tempnum and switch clicked to zero
    // val = newNum
    // id stays equal to num
    
    //if clicked check for moves 
    //array of possible moves based on location
    //now i have a base array and i know what tile is clicked on
    //compare clicked to base array
    //have a possible move for each id
    //when clicked change id to where the blank tile was
    //


    render(){
    return (
        
      <div className='container'>
        {/* outer for loop */}
        {Array(4).fill().map((y, j) => (
          <div className='row' key={j} style={{height: '150px'}} >
            {Array(4).fill().map((x, i) => (
              <button className='col btn-info' key={i} style={{width: '150px'}} onClick={() => this.bindClick((4 * (j+ 1)) - (4 - i))} >
                {/* inner for loop */}
                {(4 * (j+ 1)) - (4 - i)}
            
              </button>
            ))}
          </div>
        ))}
      </div>
    )
    // console.log(i,j)
            } 
  }

  //looks like we could have a seperate key for row and col
  //when clicked it will log which id, then i can tell which one is clicked
  //after that i'll know which tile was clicked on
  //look at it and see it's location on the grid
  //find the evil box
  //switch the data
  //rinse and repeat
  //use a snapshot before scrambling and compare row id and col id to what it was before or original id's
  //if all ids === prev ids then win!
  //how to scramble?
  //reverse checkmove automatically 



// export default function Grid() {
    
//   }

//   moveTile(e) {
//       //page clickable
//       //click numbers move around
//   }


// export default class Gamelogic extends Component {
//     constructor(props) {
//         super(props)
//         // this.state= {
//         //     tileData:[{id, winPos, x, y}]
//         // };

//     }
//make tileData that will be an [] {}
//make an empty array
//push 16 items into array to make grid
//have grid display the index number of it's location


//find which ways the grid can move since it is in a grid

        


// componentDidMount(){
// }

//componentDidUpdate(){

//}

// export default function GridUsingMap() {
//     let arr = Array(16).fill().map((x, i) => i)
//     let grid = arr.map((y, j) => {
//       return (
//         (j + 1) % 4 === 0 &&
//         <div className='row'>
//           {arr.slice(j + 1 - 4, j + 1).map((x, i) => (
//             <div className='col'>
//               {/* inner for loop */}
//               {x}
//             </div>
//           ))}
//         </div>
//       )
//     })
//     console.log(grid)
//     return (
//       <div className='container'>
//         {grid}
//       </div>
//     )
//   }



    
