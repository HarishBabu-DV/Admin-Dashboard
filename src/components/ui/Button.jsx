import React from 'react'

const Button = ({type,className,children,...props}) => {
  return (
    <button type={type} className={`${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button