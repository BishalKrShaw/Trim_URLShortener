import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div style={{padding: '25px'}}>
    <Outlet/></div>
  )
}

export default AppLayout