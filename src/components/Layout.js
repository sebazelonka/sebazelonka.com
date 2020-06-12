import React from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "./Footer";

import favicon from "../img/favicon.png";

const Wrapper = styled.div`
    font-family: "merriweather", serif;
    font-size: 1.125rem;
    line-height: 2rem;

    h1,
    h2,
    h3 {
        font-family: "Exo 2", sans-serif;
        font-weight: 700;
    }
`;

const MainContent = styled.div`
    padding-top: 58px;
    min-height: calc(100vh - 58px);
`;

const TemplateWrapper = ({ children }) => (
    <Wrapper>
        <Helmet>
            <title>
                Sebastian Zelonka | Bridging the gap between design and front
                end development.
            </title>
            <link rel="icon" type="image/png" href={favicon} />

            <link
                href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700;900&family=Merriweather:wght@300;400;700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
        <Navbar class="fixed" />
        <MainContent>{children}</MainContent>
        <Footer />
    </Wrapper>
);

export default TemplateWrapper;
