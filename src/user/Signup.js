import React, {useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {signup} from '../auth/'
import login01 from '../assets/login01.jpg'
import Logo from "../core/Menu/Logo";

const Signup = () => {
    const [values, setValues] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        error:'',
        checkbox:'',
        success: false
    })

    const {email, password,confirmPassword, checkbox, success, error} = values

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error:false, checkbox:false, success:true})
        signup({email,password})
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error,checkbox:false, success:false})
            }else{
                setValues({...values, email:'', password:'', confirmPassword:'', error:'', success:true})
            }
        })
    }



    const signUpForm = () => {
        return(
            <FormContainer>
                <form>
                    <div className="form-group">
                        <input onChange={handleChange('email')} className="form-control" placeholder="Email*" type="email" value={email}/>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChange('password')} className="form-control" placeholder="Parola*" type="password" value={password}/>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChange('confirmPassword')} className="form-control" placeholder="Parola inca o data*" type="password" value={confirmPassword}/>
                    </div>
                    <CustomControl className="form-group custom-control mb-3">
                        <input type="checkbox" className="custom-control-input" name="signup_newsletter" id="signup_newsletter"/>
                        <label className="custom-control-label" htmlFor="signup_newsletter" style={{cursor: 'pointer',fontSize: '.8em',color: '#707473',lineHeight: '2em',margin: '4px 0 0 10px'}}>Fii printre primii care afla despre cel mai noi oferte, reduceri si noutati.</label>
                    </CustomControl>
                    <CustomControl className="form-group custom-control mb-4">
                        <input type="checkbox" className="custom-control-input" name="signup_terms" id="signup_terms"/>
                        <label className="custom-control-label" htmlFor="signup_terms" style={{cursor: 'pointer',fontSize: '.8em',color: '#707473',lineHeight: '2em',margin: '4px 0 0 10px'}}>
                            Sunt de acord cu <Link to="/termeni-si-conditii">termenii si conditiile</Link>.
                        </label>
                    </CustomControl>

                    <Button onClick={clickSubmit} type="submit" className="btn-block">Inregistrare</Button>
                    <TextCenter>Esti deja inregistrat?</TextCenter>
                    <Link to="/logare"><SilentButton>Logheaza-te</SilentButton></Link>
                </form>
            </FormContainer>
        )
    }

    const showError = () =>{
        return <div className="alert alert-danger" style={{display:error ? '' : 'none'}}>{error}</div>
    }
    const showSucces = () =>{
        return <div className="alert alert-info" style={{display:success ? '' : 'none'}}>New account created. Please <Link to='/signin'>signin</Link></div>
    }

    return(
        <Wrapper className="content page-signup">
            <MainContainer className="container noframe-container">
                <PageWrap className="row">
                    <div className="col align-self-center">
                        <Box>
                            <Wrapper2 className="row">
                                <Left className="col-md-6">
                                </Left>
                                <Right className="col-md-6">
                                    <TextCenter><Link to="/"><Logo/></Link></TextCenter>
                                    <TextCenter><Title>Inregistrare</Title></TextCenter>
                                    {signUpForm()}
                                    {showError()}
                                    {showSucces()}
                                </Right>
                            </Wrapper2>
                        </Box>
                    </div>
                </PageWrap>
            </MainContainer>
        </Wrapper>
    )
}

export default Signup
const Wrapper = styled.div`
height: 100%;
padding: 0;
min-height: 100%;
position: fixed;
left: 0;
right: 0;
background-color: #eee;
padding-top:60px

`
const MainContainer = styled.div`
// max-width: 1200px;
// padding-left: 0;
// padding-right: 0;
// margin:0 auto;
// height:100%;


`
const PageWrap = styled.div`

`
const Box = styled.div`
box-shadow: 0 5px 50px 0 rgba(0,0,0,.15);
    background-color: #fff;


`
const Wrapper2 = styled.div`
`
const Left = styled.div`
background-image: url(${login01});
background-size: cover;
background-position: 50% 50%;
`
const Right = styled.div`
`
const FormContainer = styled.div`
width: 50%;
margin: 0 auto;
padding: 30px 0;
`
const TextCenter = styled.div`
text-align: center!important;
margin-top: 30px;
margin-bottom: 30px;
`
const Title = styled.div`
font-size: 30px;
    font-family: Open Sans,Helvetica Neue,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Arial,sans-serif!important;
    margin-top: 30px;
    color: #707374;
    font-weight: 300;
    margin-bottom: 30px;
`
const CustomControl = styled.div`
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
`
const Button = styled.button`
transition: all .3s;
text-transform: uppercase;
text-align: center;
border-radius: 2px;
padding: 0 50px;
background: #fff;
color: #ccc;
height: 48px;
line-height: 48px;
border: 1px solid #ccc;
font-size: 16px;
cursor: pointer;
text-decoration: none;
margin-right: 1rem;
color: #fff;
    background-color: #207abd;
    border-color: #207abd;
`
const SilentButton = styled.div`
transition: all .3s;
text-transform: uppercase;
text-align: center;
border-radius: 2px;
padding: 0 50px;
background: #fff;
color: #ccc;
height: 48px;
line-height: 48px;
border: 1px solid #ccc;
font-size: 16px;
cursor: pointer;
text-decoration: none;
margin-right: 1rem;
color: #207abd;
background-color: #fff;
border-color: #207abd;
`