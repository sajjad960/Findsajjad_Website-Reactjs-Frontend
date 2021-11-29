import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <div className=''>
            Please go to <Link to='/'>Home</Link>
        </div>
    )
}
