import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjc0MTcxZTFmMmYzOGI3ZDlkZWI4YSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjM1MTcwNjUsImV4cCI6MTY2Mzc3NjI2NX0.mI7xH0Mxw2JQJDPqZcY257U25VN6OF0rjRFYKW7oCyY';


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `mujeeb ${TOKEN}`}
})