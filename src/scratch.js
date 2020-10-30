// function createBoard(gridSize) {
//     //setting new game
//     //turn = 'X';
//     tileArr = [];
//     //gameWon = false;
//     //gameText.innerHTML = `It's X's Turn`;
//     for (let i = 0; i < gridSize; i++) {
//         //building the board
//         //creating div
//         //name class
//         //assign div id to index of array

//         //console.log(div.id);
//         //



//         //creating object for each tile


//         //add click listener and add tile to game board


//     }
// }

// //make game board of 9 tiles
// createBoard(16);
// }
// function Grid() {
//     let arr = Array(16).fill().map((x, i) => i)
//     let grid = []
//     let subArr = []
//     for (let j = 0; j < arr.length; j++) {
//       let col = <div className='col'>{j}</div>
//       subArr.push(col)
//       if ((j + 1) % 4 === 0) {
//         console.log("in if")
//         let row = <div className='row'>{subArr}</div>
//         grid.push(row)
//         subArr = []
//       }
//     }
//     console.log(grid, subArr)
//     return (
//       <div className='container'>
//         {grid}
//       </div>
//     )
//   }
// //   function GridUsingMap() {
// //     let arr = Array(16).fill().map((x, i) => i)
// //     let grid = arr.map((y, j) => {
// //       return (
// //         (j + 1) % 4 === 0 &&
// //         <div className='row'>
// //           {arr.slice(j + 1 - 4, j + 1).map((x, i) => (
// //             <div className='col'>
// //               {/* inner for loop */}
// //               {x}
// //             </div>
// //           ))}
// //         </div>
// //       )
// //     })
// //     console.log(grid)
// //     return (
// //       <div className='container'>
// //         {grid}
// //       </div>
// //     )
// //   }
//   export default function GridWithRows() {
//     return (
//       <div className='container'>
//         {/* outer for loop */}
//         {Array(4).fill().map((y, j) => (
//           <div className='row'>
//             {Array(4).fill().map((x, i) => (
//               <div className='col'>
//                 {/* inner for loop */}
//                 {(4 * (j + 1)) - (4 - i)}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     )
//   }
// this.state = {
//   Tiles: [
//     { id: 0, val: 0 },
//     { id: 1, val: 1 },
//     { id: 2, val: 2 },
//     { id: 3, val: 3 },
//     { id: 4, val: 4 },
//     { id: 5, val: 5 },
//     { id: 6, val: 6 },
//     { id: 7, val: 7 },
//     { id: 8, val: 8 },
//     { id: 9, val: 9 },
//     { id: 10, val: 10 },
//     { id: 11, val: 11 },
//     { id: 12, val: 12 },
//     { id: 13, val: 13 },
//     { id: 14, val: 14 },
//     { id: 15, val: 15 },
//   ],
// };

// this.bindClick = this.bindClick.bind(this);


// gameBoard({ id }) {
// let Tiles = this.state.Tiles;
// for (let i = 0; i <= 15; i++) {
//   Tiles[i] = id;
// }
// this.setState({
//   Tiles,
// });
// }
// <div className="container">
//         <div className="row text-center">
//           {this.state.Tiles.map((item, i) => (
//             <div
//               key={i}
//               id={i}
//               className="col-3 border"
//               onClick={() => this.bindClick(5)}
//             >
//               {item.value}
//             </div>
//           ))}
//         </div>
//       </div>


// //  outer for loop
// Array(4).fill().map((y, j) => (
//   <div className='row' key={j} style={{height: '150px'}} >
//     Array(4).fill().map((x, i) => (
//       <div className='col btn-info' key={i} style={{width: '150px'}} onClick={() => this.bindClick((4 * (j+ 1)) - (4 - i))} >
//         {/* inner for loop */}
//         {(4 * (j+ 1)) - (4 - i)}

//       </div>
//     ))}
//    </div>