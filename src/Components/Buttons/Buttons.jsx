import React from 'react'

const Buttons = ({ button1, button2, button3, clase }) => {
    return (
        <div className={clase}>
            {button1}
            {button2}
            {button3}
        </div>
    )
}

export default Buttons