import React from 'react'
import Layout from '../Layout'
import styled from 'styled-components'

const PageLayout = ({children,className, banner, name}) => {
    return(
        <Layout>
            <Wrapper>
                <Header>
                    <Img style={{backgroundImage:`url(${banner})`}}>
                        <H1>{name}</H1>
                    </Img>
                </Header>
                <div className={className}>
                    {children}
                </div>
            </Wrapper>
        </Layout>
    )
}

export default PageLayout

const Wrapper = styled.div`
    background-color: #f7f8f9;
    padding-bottom: 1px;
    padding-top: 40px;
`
const Header = styled.div`
height: 500px;
margin-bottom: 40px;
margin-top: -40px;
width: 100%;
overflow: hidden;
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
`
const Img = styled.div`
width: 100%;
height: 100%;
background-size: cover;
position: absolute;
left: 0;
top: 0;
background-position: 50%;
`
const H1 = styled.h1`
text-align: center;
line-height: 1.1;
text-transform: uppercase;
color: #fff;
font-size: 40px;
position: absolute;
left: 0;
right: 0;
top: 50%;
transform: translateY(-50%);
margin: 0;
`