import React from 'react'

const Icon = ({ insideBg, outsideBg }) => {
    return (
        <div className={`w-5 h-5 rounded-full ${outsideBg} bg-opacity-30 flex items-center justify-center`}>
            <div className={`w-2 h-2 rounded-full border-lightSky border-opacity-5 ${insideBg}`} />
        </div>
    )
}

export default Icon