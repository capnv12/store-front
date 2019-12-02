import React from 'react'
import Layout from '../core/Layout'
import {API} from '../config'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import login01 from '../assets/login01.jpg'
import Logo from "../core/Menu/Logo";

const Signup = () => {

    const signUpForm = () => {
        return(
            <Register>
            <TextCenter><Link to="/"><Logo/></Link></TextCenter>
            <TextCenter><Title>Inregistrare</Title></TextCenter>
                <Form>
                    <Child>
                        <ChildRow>
                            <DInput>
                                <InputContainer>
                                    <Label>Email</Label>
                                    <Input type="email"/>
                                </InputContainer>
                            </DInput>
                        </ChildRow>
                        <ChildRow>
                            <DInput>
                                <InputContainer>
                                    <Label>Parola</Label>
                                    <Input type="password"/>
                                </InputContainer>
                            </DInput>
                        </ChildRow>
                    </Child>
                    <Child>
                        <ChildRow>
                            <Button>Inregistrare</Button>
                        </ChildRow>
                    </Child>
                </Form>
            </Register>
        )
    }

    return(
        <Wrapper>
            <MainContainer>
                <PageWrap>
                    <FContainer>
                        <Row>
                            <Left></Left>
                            <Right>
                                {signUpForm()}
                            </Right>
                        </Row>
                    </FContainer>

                </PageWrap>
                <BackContainer>
                    <BackToHome >
                        <Link  to="/">Inapoi la pagina principala</Link>
                    </BackToHome>
                </BackContainer>
            </MainContainer>

        </Wrapper>

    )
}

export default Signup

const Wrapper = styled.div`
width: 100%;
height: 100%;
// display: -ms-flexbox;
// display: flex;
-ms-flex-pack: center;
justify-content: center;
-ms-flex-align: center;
align-items: center;

&::after{
    box-sizing: inherit;
}
`
const MainContainer = styled.div`
position: relative;
height: 100%;
&::after{
    box-sizing: inherit;
}
`
const PageWrap = styled.div`
display: flex;
min-height: calc(100% - 92px);
-ms-flex-pack: center;
justify-content: center;
-ms-flex-align: center;
align-items: center;
padding-top: 100px;

@media screen and (max-width: 1440px){
    padding-top: 50px;
}
`
const FContainer = styled.div`
    width: 1200px;
    background-color: #fff;
    padding: 0;
    box-shadow: 0 5px 50px 0 rgba(0,0,0,.15);
    @media screen and (max-width: 1440px){
        width:1000px;
    }
    @media (max-width: 1000px){
        width: 500px;
    }
`
const Row = styled.div`
display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
`
const Left  = styled.div`
display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
flex: 0 0 50%;
max-width: 50%;
background-image: url(${login01});
background-size: cover;
    &::after{
        box-sizing: inherit;
    }
    @media (max-width: 1000px){
    display:none;
}
`
const Right = styled.div`
flex: 0 0 50%;
max-width: 50%;
padding-bottom: 100px;
&::after{
    box-sizing: inherit;
}
@media (max-width: 1000px){
    text-align: center;
    margin: 0 auto;
}
`
const Register = styled.div``

const TextCenter = styled.div`
text-align: center!important;
`
const Title = styled.div`
font-size: 30px;
font-family: Open Sans,Helvetica Neue,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Arial,sans-serif!important;
margin-top: 30px;
color: #707374;
font-weight: 300;
@media screen and (max-width: 1400px) {
    margin-top: 15px;
}

`
const Form = styled.form`
margin-top: 40px;
@media screen and (max-width: 1440px) {
    margin-top: 0;
}
`
const Child = styled.div`
width: 300px;
margin: 0 auto;
`
const ChildRow = styled.div`
margin: 0;
width: 300px;
`
const DInput = styled.div`
    width: 100%;
`
const InputContainer = styled.div`
width: 100%;
height: 48px;
margin: 20px 0 0;
display: -ms-flexbox;
display: flex;
position: relative;
border-radius: 2px;
border: 1px solid #ddd;
`
const Label = styled.label`
position: relative;
// top: 26px;
left: 10px;
pointer-events: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
z-index: 1;
color: #979797;
font-size: 12px;
line-height: 20px;
`
const Input = styled.input`
position: relative;
width: 100%;
height: 44px;
padding: 12px 0 0 0px;
display: block;
border: none;
background: transparent;
transition: all .4s cubic-bezier(.25,.8,.25,1);
transition-property: font-size;
color: rgba(0,0,0,.54);
font-family: inherit;
font-size: 18px;
line-height: 24px;
    overflow: visible;
    outline: none;
`
const Button = styled.button`
margin-top: 20px;
height: 48px;
color: #fff;
    background: #44a8f2;
    border: 1px solid #44a8f2;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    border-radius: 2px;
    height: 36px;
    font-size: 16px;
    font-family: Open Sans,Helvetica Neue,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Arial,sans-serif!important;
    cursor: pointer;
    text-decoration: none;
`
const BackContainer = styled.div`
    text-align:center;
    margin 50px;
`
const BackToHome = styled.div`
    & a {
        margin-top: 20px;
        height: 48px;
        color: #fff;
        background: #44a8f2;
        border: 1px solid #44a8f2;
        width: 100%;
        text-transform: uppercase;
        text-align: center;
        border-radius: 2px;
        height: 36px;
        font-size: 16px;
        font-family: Open Sans,Helvetica Neue,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Arial,sans-serif!important;
        cursor: pointer;
        text-decoration: none;
    `