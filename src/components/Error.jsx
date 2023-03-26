import React from 'react'

function Error({children}) {
    return (
        <div className="bg-red-700 text-center text-white rounded-md uppercase">
            {children}
        </div>
    )
}

export default Error