/* eslint-disable no-useless-catch */
import axios from "axios";

export const logingAuthentication = async ({name, password}) => {
    try {
        return await axios.post("http://localhost:9090/login", 
        {
            name, 
            password,
        }
    );
    } catch (error) {
        throw error;
    }
} 