import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
const Main=lazy(()=>import('../pages/Main'))
function Layout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Main/>}/>
        </Routes>
      
    </div>
  )
}

export default Layout;
