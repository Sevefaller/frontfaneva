// About.js
import React from "react";
import Navbar2 from "./Navbar2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { FaUserCircle, FaUserClock } from "react-icons/fa";


const About = () => {
  return (
    <div className="About">
      <Navbar2 />
      <Container fluid className="mt-4 mt-md-5">
        <Row>
          <Col md={3}>
          <Card>
          <Card.Img 
        variant="top" 
        src="holder.js/100px180?text=Image cap"
        style={{ height: '200px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
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
        src="holder.js/100px180?text=Image cap"
        style={{ height: '200px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
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
        src="holder.js/100px180?text=Image cap"
        style={{ height: '200px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
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
        src="holder.js/100px180?text=Image cap"
        style={{ height: '200px' }} // Spécifiez la hauteur personnalisée ici (par exemple, 150px)
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
    </div>
  );
};

export default About;
