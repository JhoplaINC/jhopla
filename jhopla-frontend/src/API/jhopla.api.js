import axios from 'axios';

export async function getJhplData() {
    return await axios.get('http://localhost:8080/jhpl-data');
}