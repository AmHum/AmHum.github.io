import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid="md" className="my-5">
      <Row className="align-items-center">
        <Col sm={4} className="p-5">
          <Image
            fluid
            roundedCircle
            src={require(`../../assets/small/SRB_8373.jpg`)}
            alt="Aaron Humelsine"
          />
        </Col>
        <Col sm={8} className="p-5 mb-5">
          <h1 id="about">About Me</h1>
          <div>
            <p>
              I have spent my life learning trades and skills from successful people. 
              The pivotal moments that allowed me to become an essential component of 
              a team and leader, continue to drive my ambition for future success.
              <p></p>
              I studied full stack development at the University of Utah and learned how to fully develop websites
               and applications, utilizing API's and databases to create smooth user experiences.
               I have truly loved every second of learning to code and manifesting my creativity on-screen. 
               <p></p>
               I have 9 years of management experience and have worked with teams a small as 3 and as large 20. 
               I am confident in my written and verbal communication skills, as I believe they are the key to 
               success.        
               </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
