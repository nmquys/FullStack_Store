import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import styled from "styled-components";
import EazyButton from "../EazyButton";


const H1 = styled.h1`
color: #5b21b6;
text-align: center;
`;

export default function Footer()
{
    return(
        <>  
        <EazyButton>Submit</EazyButton>
        <footer className="footer">
            Built with 
            <FontAwesomeIcon 
                icon={faHeart} 
                className="footer-icon"
                aria-hidden="true"
            /> 
            by 
            <a href ="https://nmquys.com/" target="_blank" rel="noref">nmquys</a>
        </footer>
        </>
    );
}