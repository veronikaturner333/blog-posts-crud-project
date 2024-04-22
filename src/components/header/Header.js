import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';

const cardTitle = {
    fontSize: '60px',
    fontWeight: 'bold',
    color: 'white',
}

const cardText = {
    fontSize: '20px',
    color: 'white',
}

//in the header, we have a card with an image and text overlay
//give elements within card custom styles with variables above
export const Header = () => {
    return (
        <Card className='bg-dark text-white'>
            <Card.Img src='./purple-background.jpg' alt='Card image' />
            <Card.ImgOverlay>
                <Card.Title style={cardTitle} className='text-center'>
                    <h1 className='d-none d-sm-block mt-5'>Veronika's Blog</h1>
                    <h2 className='d-sm-none'>Veronika's Blog</h2>
                </Card.Title>
                <Card.Text style={cardText} className='text-center'>Welcome to my blog for assignment 16</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Header;