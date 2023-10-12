import React from 'react'

const Button = ({ style, BtnTitle }) => {
    return (
        <div> <button className={`${style} bg-darkSky text-whity rounded-md text-sm font-semibold hover:bg-opacity-50 py-5 md:py-3 px-12 md:px-5 `}>{BtnTitle}</button> </div>
    )
}

export default Button