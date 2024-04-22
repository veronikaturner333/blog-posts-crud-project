import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

//about me page will feature a picture of me and a bio
function AboutMe() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={4}><Image src='./veronika.jpg' fluid /></Col>
        <Col sm={8}>
          <div className='row mt-2'>
            <h2>About Me</h2>
          </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Rhoncus mattis rhoncus urna neque. Rhoncus urna neque viverra justo. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
        <br></br>
        <br></br>
        Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Sem viverra aliquet eget sit amet tellus. Elementum pulvinar etiam non quam. Facilisis volutpat est velit egestas dui id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Tempor nec feugiat nisl pretium fusce. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Ut placerat orci nulla pellentesque dignissim enim. Feugiat scelerisque varius morbi enim nunc faucibus a. Odio ut enim blandit volutpat maecenas.
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;