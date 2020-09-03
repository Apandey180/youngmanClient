import apiClient from './apiclient';

export default {
    getCarouselData(cb) {
        apiClient.get('/api/carousel').then(resp => {
            cb(resp.data)
        });
    },

    getFeaturedCategories(cb) {
        apiClient.get('/api/featured').then(resp => {
            cb(resp.data);
        });
    },

    getOffers(cb) {
        apiClient.get('/api/offers').then(resp => {
            cb(resp.data)
        });
    },

    getTopReviews(cb) {
        apiClient.get('/api/getTopReviews').then(resp => {
            cb(resp.data)
        });
    },
    
    getSpeciality(cb) {
        apiClient.get('/api/speciality').then(resp => {
            cb(resp.data)
        });
    }
}