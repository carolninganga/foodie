import React, { Component } from 'react';
import Card from '../components/Card';
import Store from '../components/Store';
import Footer from '../components/Footer';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';


class Saved extends Component {
    state = {
        stores: []
    };

    componentDidMount() {
        this.getSavedStores();
    }

    getSavedStores = () => {
        API.getSavedStores()
        .then(res => 
            this.setState({
                stores: res.data
            })
        ).catch(err => console.log(err));
    }

    handleStoreDelete = id => {
        API.deleteStore(id).then(res => this.getSavedStores());
    }
    render() {
        return (
            <Container>
            <Row>
                <Col size="md-12">
                    <h1 className="text-center">
                        <strong>Search Restaurant With Foodie</strong>
                    </h1>
                    <h2 className="text-center">Search for and Save Stores of Interest</h2>

                </Col>
            </Row>

            <Row>
                <Col size="md-12">
                    <Card title="Saved Restaurant" icon="download">
                        {this.state.stores.length ? (
                            <List>
                                {this.state.stores.map(store => (
                                    <Store
                                        key={store._id}
                                        name={store.name}
                                        phone={store.phone}
                                        street={store.street}
                                        city={store.city}
                                        state={store.state}
                                        zip_code={store.zip_code}
                                        image={store.image_url}
                                        url={store.url}
                                        rating={store.rating}
                                        Button={()=> (
                                            <button
                                                style={{backgroundColor: "#2196f3", color: "white"}}
                                                onClick={() => this.handleStoreDelete(store._id)}
                                                className="btn btn-danger ml-2">
                                                    Delete
                                                </button>
                                        )}
                                        />
                                ))}
                            </List>
                        ) : (
                            <h2 className="text-center">No Saved Stores</h2>
                        )} 
                    </Card>
                </Col>
            </Row>
            <Footer /> 
        </Container>
        )
    }
}

export default Saved;
