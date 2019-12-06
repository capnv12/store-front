import React from 'react'

const BasicLayout = ({title = 'titlu',children,className}) => {
    return(
        <div>
            <div className="jumbotron">
                <h2>{title}</h2>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default BasicLayout