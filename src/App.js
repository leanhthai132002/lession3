import './App.css';
import Square from './components/square';
import styled from 'styled-components'
import React,{useState} from 'react';
function App() {
  const[board, setBoard] = useState(Array(9).fill(null))
  const [xPlayer, setXPlayer] =  useState(true)
  const handlePlay = (index)=>{
const temp = board.slice()
if(xPlayer){
  temp[index] = "X"
}else{
  temp[index] = "O"
}
setBoard(temp)
setXPlayer(!xPlayer)
  }
  const winner = caculateWinner(board)
  return (
    
  <div>
     {winner ? winner :null}
    <Board>
 {board.map((item, index) => <Square value={item} handlePlay={()=> handlePlay(index)} key={index}/>)}
    </Board>
  </div>
  );
}
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
width: 300px;
height: 300px;
  margin-top: 40px;
  padding: 10px;
`
const  caculateWinner =(board) =>{
  const winLine = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for(let i = 0; i < winLine.length; i++){
const [a,b,c] = winLine[i]
if(board[a] && board[b] && board[a] == board[c]){
return board[a]
}
  }
  return null
}
export default App;