import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Index() {
  return (
    <div>
        <NavLink to="/dashboard" >Dashboard</NavLink>
        Hello
    </div>
  )
}
