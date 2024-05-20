import axios from "axios";

const fetchData = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/api/data', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}