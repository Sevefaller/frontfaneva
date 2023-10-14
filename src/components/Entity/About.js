// About.js
import React from "react";
import Navbar2 from "./Navbar2";
import Footer from "./Footer2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { FaUserCircle, FaUserClock } from "react-icons/fa";
import logo from './efianara.png';
import Footer2 from "./Footer2";
import TitreComponent from "./TitreComponent";

const divStyle = {
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,148,153,1) 59%)",
   // color: 'white',
    backgroundSize: 'cover', // Pour assurer que l'image de fond couvre tout l'élément
    backgroundPosition: 'center', // Pour centrer l'image de fond
    // Vous pouvez également ajouter d'autres styles ici selon vos besoins
  };


const About = () => {
    return (
        <div className="About" style={divStyle}>
            <Navbar2 />
            <TitreComponent />
            <Container fluid className="mt-2 mt-md-2 mb-4">               
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>

                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>



                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>
                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>

                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>


                </Row>


            </Container>
            <Container fluid className="mt-4 mt-md-5 mb-4">
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>

                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>
                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>
                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={logo}
                                style={{ height: '100px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
                            />
                            {/* Autres contenus de la carte */}
                            <Card.Body>
                                <Card.Title>Nom organisation</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>

                                <Card.Link href="#">Plus de detail </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>


                </Row>


            </Container>



            <div className="foot">
                <Footer2 />
            </div>
        </div>


    );
};

export default About;
