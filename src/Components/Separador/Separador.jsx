import React from 'react'

const Separador = ({title}) => {
    return (

        <div className='row separador'>

            <div className="col"><h2>{title}</h2></div>

            <div className=" col line"></div>
        </div>

    )
}

export default Separador