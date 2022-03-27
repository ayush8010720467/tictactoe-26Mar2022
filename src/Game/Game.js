import './Game.css'
import Board from './Board/Board';
import {useState} from 'react';
function Game(props){
    const [winnerMessage, setWinnerMessage]= useState('');
    const getWinner = (winner)=>{
        console.log("Winner is called", winner)
        if(winner){
            setWinnerMessage(`The Winner is ${winner}`);
        }
    }
    
     return (
        <div className="game">
          <div className="game-board">
            <Board getWinner={getWinner}/>
          </div>
          <div className="game-info">
            <div>{winnerMessage}</div>
          </div>
        </div>
      );;
}
export default Game;