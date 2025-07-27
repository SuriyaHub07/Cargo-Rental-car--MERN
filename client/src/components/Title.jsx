import React from 'react'

const Title = ({title,subtitle,align}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center`} >
          <h1 className='font-semibold text-4xl '>{title}</h1>
          <p className='text-sm text-gray-500/90 mt-2 max-w-156'>{subtitle}</p>
    </div>
    
  )
}

export default Title