import React from 'react'

function Button({children, type = "button", className = "", bgColor = "bg-blue-600", textColor = "text-white", ...props}) {
    return (
        <button className={`pz-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>{children}</button>
    )
}

export default Button