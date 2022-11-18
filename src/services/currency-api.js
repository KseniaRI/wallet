import axios from 'axios';

const API_KEY = "yhSH4pfCw5v0WVxS3YIejdaUsNNRbi8Q";

axios.defaults.headers = { apikey: API_KEY };

export const fetchLatestRates = async () => {
    try {
        const response = await axios.get(`https://api.apilayer.com/currency_data/live?source=EUR&currencies=USD,GBP,RUB,AED,CNY`);
        return response.data.quotes;
    } catch (error) {
        console.log(error.message); 
    }
}