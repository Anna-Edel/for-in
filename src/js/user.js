// user.js
import { httpGet } from './http';

export const loadUser = async (id) => {
    try {
        const response = await httpGet(`http://server:8080/users/${id}`);
        return JSON.parse(response);
    } catch (error) {
        throw new Error('Network error');
    }
};
