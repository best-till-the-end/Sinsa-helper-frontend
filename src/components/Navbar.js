import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    background: black;
    color: #fff;
    
`
const NavbarWrap = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.div`
    width: 128px;
    height: 22px;
    font-size: 25px;
    position: fixed;
    left: 200px;
    top: 24px;
    background-size: 100% 100%;
    cursor: pointer;
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    justify-content: flex-end;
    position: fixed;
    right: 100px;
    `
const Button = styled.div`
    width: 100px;
    cursor: pointer;
    height: 36px;
    text-align: center;
    `

function Navbar() {

    const [isLoggedIn, setisLoggedIn] = useState(false);
    // useEffect(() => {

    //     if (thisPath === "/") {
    //         history.push("/Home");
    //     }
    // }, []);

    // const history = useNavigate();
    // let thisPath = history.location.pathname;

    return (
        <NavbarContainer>
            <NavbarWrap>
                <Title>유종의 ME</Title>
                {isLoggedIn ? (
                    <ButtonContainer>
                        <Button href="/MyPage"> My Page </Button>
                    </ButtonContainer>
                )
                    :
                    (
                        <ButtonContainer>
                            <Button href="/SignUp">회원가입 </Button>
                            &nbsp;
                            |
                            <Button href="/Login">로그인</Button>
                        </ButtonContainer>
                    )
                }

            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar;