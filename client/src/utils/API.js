import axios from 'axios';

export default {
    //get store from yelp API
    getStore: function(term, location) {
        return axios.get('/api/yelp', { params: { term: term, location:location }});  
    },
    //get all saved stores
    getSavedStores: function() {
        return axios.get('/api/stores');
    },
    //Deletes the saved store with the given id 
    deleteStore: function(id) {
        return axios.delete('/api/stores' + id);
    },
    //save to database 
    saveStore: function(storeData) {
        return axios.post('/api/stores', storeData)
    }
}