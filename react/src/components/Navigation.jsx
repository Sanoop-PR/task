import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.css'

function Navigation() {
  return (
    <div className='nav'>
        <Link to='/login'>login</Link>
        <Link to='/register'>register</Link>
        <Link to='/simple-button'>Simple Button</Link>
        <Link to='/state-management'>State Management</Link>
        <Link to='/conditional-rendering'>Conditional Rendering</Link>
        <Link to='/form-controller'>Form Controller</Link>
        <Link to='/higher-OD'>hoc</Link>
        <Link to='/life-cycle'>Life Cycle</Link>
        <Link to='/state-lift-up'>state lift up</Link>
        <Link to='/redux-integration'>redux integration</Link>
        <Link to='/advanced-ui'>redux integration</Link>
        <Link to='/error'>error</Link>
        <Link to='/Logout'>Logout</Link>
    </div>
  )
}

export default Navigation