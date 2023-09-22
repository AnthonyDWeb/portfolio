import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { DeviseContext } from '../contexts/devise';
// import GlassmorphismComponent from './glassmorphism/glassmorphism-component';
import { ThemeContext } from '../contexts/theme.context';
import Toggle from './toggle';
import GlassmorphismComponent from './glassmorphism/glassmorphism-component';

export default function NavigationBar() {
    const { orientation } = useContext(DeviseContext);
    const { theme, setTheme, themeColor } = useContext(ThemeContext);
    const [btnHover, setBtnHover] = useState();

    const arrowSrc = require("../assets/icon-arrow-down.webp");
    const arrowStyle = { height: 20, width: 30 };


    const MenuButton = ({ title, classname, id }) => {
        return (
            <div className="linkContainer" style={{ margin: "5px 0", textAlign: "center", position: "relative", }}>
                <a
                    href={id}
                    className={`link ${classname}`}
                    style={{ color: btnHover === title ? "black" : themeColor.navtext }}
                    background={`${themeColor.background}`}
                    onMouseEnter={() => setBtnHover(title)}
                    onMouseLeave={() => setBtnHover(undefined)}
                >
                    {title}
                </a>
            </div>
        )
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 3 }}>
            <GlassmorphismComponent height={"fit-content"} addStyle={{ position: "fixed", zIndex: 12 }} addClass={"animate__animated animate__fadeIn  animate__delay-3s"} width={"90vw"}>
                <NavBar orientation={`${orientation}`} >
                    <NavList orientation={`${orientation}`} >
                        <MenuButton title={"Acceuil"} id={"#homepage"} classname={`${btnHover}isHover`} />
                        <MenuButton title={"Outils"} id={"#tools"} classname={`${btnHover}isHover`} />
                        <MenuButton title={"Portfolio"} id={"#portfolio"} classname={`${btnHover}isHover`} />
                        <MenuButton title={"A propos de moi"} id={"#about_me"} classname={`${btnHover}isHover`} />
                        <MenuButton title={"Contact"} id={"#contact"} classname={`${btnHover}isHover`} />
                        <Toggle theme={theme} action={() => setTheme(theme === "Spécial" ? "Sombre" : "Spécial")} />
                    </NavList>
                </NavBar >
            </GlassmorphismComponent >
        </div>
    )
}


const NavBar = styled.nav`
display: flex; align-items: center; justify-content: center;
flex-direction: ${props => props.orientation !== "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"};
width: ${props => props.orientation === "portrait" ? "180px" : "100%"};
background-color: ${props => props.theme && props.theme};
padding: 5px 0;
`;

const NavList = styled.div`
display: flex;  z-index: 2;  
justify-content: ${props => props.desktop ? "right" : "space-around"}; 
align-items: center; position:"relative"; padding: 0px;
flex-direction: ${props => props.orientation === "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"}; 
width: ${props => props.desktop ? "95%" : "100%"};
border: none;
.link {
    color: ${props => props.desktop ? "whitesmoke" : "black"};
    font-weight: bold;
    margin: ${props => props.orientation === "portrait" ? "25px 0px" : "0px 20px"};
    padding: 5px 8px 5px 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    :hover {
        color: black;
        background-color: #FDF8F8;
        opacity: 1 !important;
        box-shadow: 0px 0px 5px 0px whitesmoke;
        cursor: pointer;
    }
}
.isHover {
    color: black;
    background-color: whitesmoke;
    opacity: 1 !important;
    box-shadow: 0px 0px 5px 0px whitesmoke;
}
`;

const Displayer = styled.button`
display: flex; 
align-items: center; 
justify-content: center; 
background-color:  ${props => !props.desktop && props.theme};;
margin-top: ${props => props.orientation !== "portrait" && "0px"};
margin-left: ${props => props.orientation === "portrait" && "-5px"};
border-radius: ${props => props.orientation === "portrait" ? "0% 90% 90% 0%" : "0 0 90% 90%"};
height: ${props => props.orientation === "portrait" ? "20vh" : "fit-content"};
width: ${props => props.orientation === "portrait" ? "fit-content" : "20vw"};
border: none;
.arrow {
    rotate: ${props => props.orientation === "portrait" && "-90"}deg;
    transform: translateY(2px);
    background-color: transparent;
}
.true {
    rotate: ${props => props.orientation === "portrait" ? "90" : "180"}deg
}
`;