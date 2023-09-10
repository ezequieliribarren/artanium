import React from 'react'

const Separador = ({title}) => {
    return (

        <div className='row separador'>

            <div className="col-lg-6"><h2>{title}</h2></div>

            <div className=" col-lg-6 line"></div>
        </div>

    )
}

export default Separador