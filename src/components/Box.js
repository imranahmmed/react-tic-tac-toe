import React from 'react'
import Cross from './Cross'
import Round from './Round'

const Box = ({ position, value, turn }) => {
    let handleClick = () => {
        if (value == "Empty") turn(position)
    }


    return (
        <div className='box' onClick={handleClick}>
            {value == "Round" && <Round />}
            {value == "Cross" && <Cross />}
        </div>
    )
}

export default Box