import React from 'react'
import Menu from './Menu'
import SubMenu from './SubMenu'

const Layout = ({children,className}) => {
    return(
        <div>
            <Menu/>
            <SubMenu/>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default Layout