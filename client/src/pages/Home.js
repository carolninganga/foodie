import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import Store from '../components/Store';
import Footer from '../components/Footer';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';

class Home extends Component {
    state = {
        store: [],
        term: '',
        location: '',
        message: 'Search For a restaurant'
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getStore = () => {
        API.getStore(this.state.term, this.state.location)
        .then(res => 
            this.setState({
                stores: res.data.businesses
            }))
            .catch(() =>
            this.setState({
                stores: [],
                message: 'No store found, try a different store'
            }))
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getStore();
    };

    handleStoreSave = id => {
        const store = this.state.stores.find(store => store.id === id);
        API.saveStore({
            yelpId: store.id,
            name: store.name,
            phone: store.phone,
            street: store.street,
            city: store.city,
            state: store.state,
            zipcode: store.zipcode,
            image: store.image,
            url: store.url,
            rating: store.rating,
        }).then(() => this.getStore());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size='md-12'>
                        <h1 className='text-center'>
                            <strong>(React) Foodie Restaurant Search</strong>
                        </h1>
                        <h2 className="text-center"> Search for and Save a chosen restaurant</h2>
                    </Col>
                    <Col size='md-12'>
                    <Card title='Store Search' icon='far fa-store'>
                        <Form
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            term={this.state.term}
                            location={this.state.location}
                            />
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <Card title='Results'>
                            {this.state.stores.length ? (
                                <List>
                                    {this.state.stores.map(store => (
                                        <Store
                                        key={store.id}
                                        name={store.name}
                                        phone={store.phone}
                                        street={store.street}
                                        city={store.city}
                                        state={store.state}
                                        zipcode={store.zipcode}
                                        url={store.url}
                                        image={store.image}
                                        rating={store.rating}
                                        Button={() => (
                                            <button 
                                                onClick={() => this.handleStoreSave(book.id)}
                                                className='btn btn-primary ml-2'
                                                >
                                                Save
                                                </button>
                                        )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className='text-center'>{this.state.message}</h2>
                            )}
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Home;