import React from "react";
import Styled from "styled-components";
import { Button, Container, Nav, Navbar, Row, InputGroup, FormControl } from "react-bootstrap";

import Illustration from "./components/Illustration";
import SocialIcons from "./components/SocialIcons";
import FAQ from "./components/FAQ";
import SponsorTiersDisplay from "./components/sponsors/SponsorTiersDisplay";
import SponsorCarousel from "./components/sponsors/SponsorCarousel";
import Icon from "./assets/icon.svg";
import SponsorHawk from "./assets/sponsor_hawk_heart.png";
import AboutIllustration from "./assets/illustration_about.svg";

import "./App.css";
import PartnersSection from "./components/partners/PartnersSection";

const GradientBackground = Styled.div`
`;

function App() {
  return (
    <>
        <GradientBackground className="bg-hh-gradient">
            <div className="page-wrap">
                <Illustration src_name="illustration_1" top="2em" />
                <Illustration src_name="illustration_2" top="40em" />
                <Illustration src_name="illustration_3" top="110em" />

                <Navbar id="header" expand="lg" sticky="top" className="bg-hh-accent">
                    <Container className="mt-4 mb-3">
                        <Navbar.Brand href="#">
                            <img
                                className="mx-2"
                                src={Icon}
                                width="50"
                                height="50"
                                alt="HawkHacks Icon"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="nav-main me-auto">
                                <Nav.Link href="#about" className="mx-1">
                                    About
                                </Nav.Link>
                                <Nav.Link href="#why-laurier" className="mx-1">
                                    Why us? (rename?)
                                </Nav.Link>
                                <Nav.Link href="#faq" className="mx-1">
                                    FAQ
                                </Nav.Link>
                                <Nav.Link href="#newsletter" className="mx-1">
                                    Newsletter
                                </Nav.Link>
                                <Nav.Link href="#sponsors" className="mx-1">
                                    Sponsors
                                </Nav.Link>
                                <Nav.Link href="#team" className="mx-1">
                                    Meet The Team
                                </Nav.Link>
                            </Nav>
                            <Nav className="nav-right d-flex">
                                <Nav.Link href="#apply" className="mx-1">
                                    Apply Now
                                </Nav.Link>
                                <SocialIcons />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container
                    id="home"
                    className="d-flex flex-column align-items-center foreground"
                >
                    <div className="spacer" style={{ width: "100%", height: "8em" }} />
                    <img
                        className="mx-2"
                        src={Icon}
                        width="110"
                        height="110"
                        alt="HawkHacks Icon"
                    />
                    <h1 className="font-weight-bold">&lt;HawkHacks/&gt;</h1>
                    <h1 className="font-weight-bold">2022</h1>
                    <h5>put some fun slogan here</h5>
                    <p>Laurier | On-Campus and Virtual</p>
                    <div id="home-buttons" className="d-flex flex-column flex-sm-row w-100 px-4 justify-content-center">
                        <Button className="d-flex flex-grow-1 flex-sm-grow-0 justify-content-center my-2 py-2">Apply</Button>
                        <Button className="d-flex flex-grow-1 flex-sm-grow-0 justify-content-center my-2 py-2">Sponsor</Button>
                        <Button className="d-flex flex-grow-1 flex-sm-grow-0 justify-content-center my-2 py-2">Events</Button>
                    </div>
                </Container>

                <Container id="about" className="foreground">
                    

                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold">&lt;About HawkHacks/&gt;</h2>
                            <p>
                                HawkHacks came out of a desire to give everyone an equal
                                opportunity to get into tech, whether that be programming,
                                networking, researching, learning, or teaching.<br/>
                                <br/>
                                Join hundreds of students across Canada (and across the
                                world) in a 36 hour period of exploration, creativity, and
                                learning!<br/>
                                <br/>
                                Remember, you don't have to be a pro to participate - show up
                                with ten years or ten minutes of experience (oh yeah, and a
                                great attitute too!)
                            </p>
                        </div>

                        <div className="col-md-6 text-right">
                            <img src={AboutIllustration} className="img-fluid" alt="About Illustration" style={{opacity: "1.0"}}/>
                        </div>

                        <div className="col" />
                    </div>
                </Container>

                <Container id="why-laurier" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <div className="row">
                        <div className="pe-lg-5"/>
                        <div className="col-md-6 text-center">
                            {/*eslint-disable-next-line*/}
                            <h3>// Why Laurier?</h3> 
                        </div>
                        <div className="col-md-5 text-left">
                            <p>
                                Our goal with HawkHacks is to showcase the amazing talent on display at our university. 
                                Often, smaller universities are outshun by bigger ones - we’d like to change that, 
                                by showing how awesome of a community exists here too!
                            </p>
                        </div>
                    </div>

                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/*eslint-disable-next-line*/}
                            <h3>// What can I gain?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nam in ligula ut nisi volutpat mollis. 
                            Mauris in augue quis augue dignissim ullamcorper non porttitor nulla. 
                            Nam dapibus urna eget sagittis suscipit. 
                            Sed quis ipsum libero. Aliquam non tempor enim.
                            </p>
                        </div>
                    </div>

                </Container>

                <Container id="faq" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <FAQ />
                </Container>

                <Container id="newsletter" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <div className="row">
                        <div className="col-md-6 text-left">
                            {/*eslint-disable-next-line*/}
                            <h3>// Want to stay updated?</h3>
                            <p>
                                Reach out at <a href="mailto:hello@hawkhacks.ca">hello@hawkhacks.ca</a> for any help or support!
                                <SocialIcons></SocialIcons>
                            </p>

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter your email to subscribe to our newsletter!"
                                    aria-label="Recipient's email"
                                    aria-describedby="basic-addon2"
                                />
                                
                                <Button>
                                  {">>"}
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Container>

                <Container id="partners">
                    <div className="spacer" style={{ width: "100%", height: "8em" }} />
                    <PartnersSection/>
                </Container>

                <Container id="sponsors" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "10em" }} />
                    <div className="our-sponsors">
                        <h2 className="sponsors-title">{"<Our Sponsors/>"}</h2>
                        <p className="sponsors-subtitle">
                            These are the people who make what we do possible. Check out all our amazing sponsors below, and tell them we sent you!
                        </p>
                        <img src={SponsorHawk} alt="sponsor bird" className="sponsors-bird"/>
                    </div>
                    <SponsorCarousel/>
                    <SponsorTiersDisplay/>
                </Container>

                <Container id="team" className="foreground"></Container>
                
                {/* <div className="spacer" style={{ width: '100%', height: '13em' }} />
                <div className="spacer" style={{ width: '100%', height: '30em' }} /> */}
            </div>

            <div>
                <Illustration src_name="illustration_4" width="100%" maxWidth="102em" position="relative" id="illustration-footer" />
                <div id="footer" className="foreground site-footer m-0 w-100 d-flex justify-content-center">
                    <Row className="site-footer-content d-flex justify-content-center align-items-center">
                        <a 
                            className="my-1 w-auto" 
                            href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"} 
                            target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            Code of Conduct
                        </a>
                        <p className="my-1 w-auto d-flex flex-grow-1 justify-content-center">
                            &#169; Copyright {new Date().getFullYear()}, HawkHacks
                        </p>
                        <SocialIcons />
                    </Row>
                </div>
            </div>
        </GradientBackground>
    </>
  );
}

export default App;
