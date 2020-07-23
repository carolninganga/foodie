
import React, { Component } from "react";
import Card from '../components/Card';
import Store from '../components/Store';
import Footer from '../components/Footer';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';
import Form from "../components/Form";

class Home extends Component {
    state = {
        stores: [],
        term: '',
        location: '',
        message: 'What do you feel like eating'
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    getStores = () => {
        API.getStores(this.state.term, this.state.location)
        .then(res => 
            this.setState({
                stores: res.data.businesses
            })
        ).catch(() => 
            this.setState({
                stores: [],
                message: "No Stores Found, Try a Different Query"
            })
        )
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.getStores();
    }

    handleStoreSave = id => {
        const store = this.state.stores.find(store => store.id === id);

        API.saveStore({
            yelpId: store.id,
            name: store.name,
            phone: store.phone,
            street: store.location && store.location.street,
            city: store.location && store.location.city,
            state: store.location && store.location.state,
            zip_code: store.location && store.location.zip_code,
            image: store.image_url,
            url: store.url,
            rating: store.rating,
            source: "yelp"
        }, store.id).then(() => this.getStores());
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">
                            <strong>Restaurant Search at Foodie</strong>
                        </h1>
                        <h2 className="text-center">Search for and Save Restaurant of Interest</h2>
                    </Col>

                    <Col size="md-12">
                        <Card title="Restaurant Search" icon="far fa-book">
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
                    <Col size="md-12">
                        <Card title="Results">
                            {this.state.stores.length ? (
                                <List>
                                    {this.state.stores.map(store => (
                                        <Store 
                                            key={store.id}
                                            name={store.name}
                                            phone={store.phone}
                                            street={store.location && store.location.street}
                                            city={store.location && store.location.city}
                                            state={store.location && store.location.state}
                                            zip_code={store.location && store.location.zip_code}
                                            image={store.image_url}
                                            url={store.url}
                                            rating={store.rating} 
                                            Button={()=> (
                                                <button
                                                    onClick={()=> this.handleStoreSave(store.id)}
                                                    className="btn btn-primary ml-2">Save</button> 
                                            )} 
                                        />
                                    ))}
                                </List>
                            ):(
                                <h2 className="text-center">{this.state.message}</h2> 
                            )}
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Home;