import axios from "axios"

const url = process.env.REACT_APP_URL

export const getAllEventInfo = async (id) =>{
    const response = await axios.get(url + id);
    const { data } = response;
    return data;
}