import React from 'react'
import { useState } from 'react'
import Box from './Box'

import { FcRefresh } from 'react-icons/fc'

const Board = () => {
    let [icon, setIcon] = useState({
        player: "Cross",
        move: ["Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty", "Empty"]
    });

    let turn = (position) => {
        let copyMove = [...icon.move];
        copyMove[position] = icon.player

        setIcon({
            player: icon.player == "Round" ? "Cross" : "Round",
            move: copyMove
        })

        // console.log(copyMove[position])
        // console.log(copyMove)
    }

    let checkWinner = () => {
        let winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (icon.move[a] !== "Empty" && icon.move[a] === icon.move[b] && icon.move[a] === icon.move[c]) {
                return (icon.move[a] + " Won the Game")
            }

            if (icon.move.every((p) => p !== "Empty")) return "Draw The Match"

        }

        // winnerLogic.map((logic, index, array) => {
        //     const [a, b, c] = array

        //     if (icon.move[a] !== "Empty" && icon.move[a] === icon.move[b] && icon.move[a] === icon.move[c]) {
        //         return true
        //     }
        // })

        return false
    }
    let iswinner = checkWinner()

    let handlePlayAgain = () => {
        setIcon({
            player: "Cross",
            move: Array(9).fill("Empty")
        })
    }





    return (
        <div className="game-board">
            {iswinner ? <div className='popupWinner'>
                <h4 className='winner'>{iswinner}</h4>
                <button className='playAgain' onClick={handlePlayAgain}> <FcRefresh /> Play Again</button>
            </div> : <>
            <div className='turnIns'><p>Now Player <strong>{icon.player}</strong> turn</p></div>
                <Box position={0} value={icon.move[0]} turn={turn} />
                <Box position={1} value={icon.move[1]} turn={turn} />
                <Box position={2} value={icon.move[2]} turn={turn} />
                <Box position={3} value={icon.move[3]} turn={turn} />
                <Box position={4} value={icon.move[4]} turn={turn} />
                <Box position={5} value={icon.move[5]} turn={turn} />
                <Box position={6} value={icon.move[6]} turn={turn} />
                <Box position={7} value={icon.move[7]} turn={turn} />
                <Box position={8} value={icon.move[8]} turn={turn} />
            </>}
        </div>
    )
}

export default Board