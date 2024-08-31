import React from 'react';
import NavBar from '../components/NavBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Team.css';

export default function Team() {    
    return (
        <div>
        <NavBar />
        <h1 className = "title"> Team </h1>
        <BioCards />
        </div>
    );
}

function BioCards() {
  return (
    <>
    <div className = "cards-container">
        <div className = "row-one">
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src="../public/images/hirad.jpg" className='card-img' style={{objectPosition: '50% 25%'}} />
            <Card.Body>
                <Card.Title>Hirad Hosseini</Card.Title>
                <Card.Text>
                Hirad hails from Shiraz, Iran and is currently a senior at USC. His interests lie in leveraging computer and data science to solve problems in the life sciences. In his free time, Hirad enjoys playing and watching basketball, listening to punk rock (especially Blink 182), and tinkering with Arduino's and Raspberry Pi's.  
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>University of Southern California</ListGroup.Item>
                <ListGroup.Item>BS/MS Quantitative and Computational Biology</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://hirad.presumably.net/" target="_blank">Website</Card.Link>
                <Card.Link href="https://www.linkedin.com/in/hirad-hosseini-1899231b0" target='_blank'>LinkedIn</Card.Link>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src="../public/images/nikhil.jpg" className='card-img' />
                <Card.Body>
                    <Card.Title>Nikhil Lingineni</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>University of Southern California</ListGroup.Item>
                    <ListGroup.Item>BS Business Administration</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://www.linkedin.com/in/nikling/" target='_blank'>LinkedIn</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src="../public/images/navneeth.jpg" className='card-img' />
                <Card.Body>
                    <Card.Title>Navneeth Gurachar</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Princeton University</ListGroup.Item>
                    <ListGroup.Item>BS Molecular Biology & Geology</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://www.linkedin.com/in/navneeth-gurachar-6ba777189/" target='_blank'>LinkedIn</Card.Link>
                </Card.Body>
            </Card>
        </div>
        <div className = "row-two">
            <Card style={{ width: '18rem' }} className='card'>
                    <Card.Img variant="top" src="../public/images/siddhant.jpg" className='card-img' />
                    <Card.Body>
                        <Card.Title>Siddhant Watwani</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>University of California- Los Angeles</ListGroup.Item>
                        <ListGroup.Item>BS Computational and Systems Biology & Human Biology and Society</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://www.linkedin.com/in/siddhantwatwani/" target='_blank'>LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
        </div>


    </div>
    </>

  );
}
