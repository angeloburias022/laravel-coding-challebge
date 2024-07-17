// services/customerService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/customers';

export const fetchCustomers = async () => {
    return await axios.get(API_URL);
};

export const addCustomer = async (customer) => {
    return await axios.post(API_URL, customer);
};

export const editCustomer = async (customer) => {
    console.log(customer);

    return await axios.put(`${API_URL}/${customer.id}`, customer);
};

export const deleteCustomer = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
