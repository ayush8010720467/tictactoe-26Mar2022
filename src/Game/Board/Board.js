import { useState } from "react";
import Square from "./Square/Square";
function Board(props){
    const [squares, setSquares]= useState(Array(9).fill(null));
    const [xTurn, setXTurn ]= useState(true);
    const handleClick = (i)=>{
       if(squares[i]===null){
        setXTurn((turn)=>!turn);
        const square = squares.slice();
        if(xTurn){
            square[i] = 'X';
        } else{
            square[i] = '0';
        }  
        setSquares(square);
    } else{
        alert('Cant update the filled block')
    }
      }
    const renderSquare = (i)=>{
        return <Square value={squares[i]} onClick={()=>{handleClick(i)}} />;
      }
      const status = `Next player: ${xTurn? 'X': '0'}`;
      
    
    return <>
            <div className="status">{status}</div>
            <tr>
                <td>{renderSquare(0)}</td>
                <td>{renderSquare(1)}</td>
                <td>{renderSquare(2)}</td>
            </tr>
            <tr>
                <td>{renderSquare(3)}</td>
                <td>{renderSquare(4)}</td>
                <td>{renderSquare(5)}</td>
            </tr>
            <tr>
                <td>{renderSquare(6)}</td>
                <td>{renderSquare(7)}</td>
                <td>{renderSquare(8)}</td>
            </tr>
        </>;
}
export default Board;