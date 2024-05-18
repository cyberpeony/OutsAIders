import { Pool } from 'pg';
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const fetchTool = async (id) => {
    try {
        const response = await axios.get(`http://localhost:4001/tools/${id}`);
        console.log('Tool:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching tool:', error.message);
    }
};

const fetchTools = async () => {
    try {
        const response = await axios.get('http://localhost:4001/tools');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching tools:', error);
    }
}

const TagSearch = async (category, value) => {
    try {
        const encodedCategory = encodeURIComponent(category);
        const encodedValue = encodeURIComponent(value);
        console.log(`http://localhost:4001/tools/${encodedCategory}/${encodedValue}`);
        const response = await axios.get(`http://localhost:4001/tools/${encodedCategory}/${encodedValue}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error searching tools:', error);
    }
}

const postTools = async(toolAttributes) => {
    try {
        const response = await axios.post('http://localhost:4001/tools', toolAttributes);
        console.log('Tool created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating tool:', error);
    }
}

const putTools = async(id, toolAttributes) => {
    try {
        const response = await axios.put(`http://localhost:4001/tools/${id}`, toolAttributes)
        console.log('Tool updated', response.data);
        return response.data;
    } catch(error){
        console.error('Error fetching tools:', error);
    }
}

const deleteTools = async(id) => {
    try {
        const response = await axios.delete(`http://localhost:4001/tools/${id}`)
        console.log('Tool deleted', response.data);
        return response.data;
    } catch(error){
        console.error('Error deleting tools:', error);
    }
}



const testApiPresence = () =>
{
    console.log('Hey there');
}