import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieTop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h2 className='homeTitle'>Movie List</h2>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default React.memo(MovieTop)