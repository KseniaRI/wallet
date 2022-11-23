import axios from 'axios';

const API_KEY = "yhSH4pfCw5v0WVxS3YIejdaUsNNRbi8Q";

axios.defaults.headers = { apikey: API_KEY };
axios.defaults.baseURL = "https://api.apilayer.com/fixer";

export const fetchLatestRates = async () => {
    try {
        const response = await axios.get('/latest?base=EUR&symbols=USD,GBP,RUB,AED,CNY');
        return response.data;
    } catch (error) {
        console.log(error.message); 
    }
}