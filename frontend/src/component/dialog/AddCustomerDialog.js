import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { addCustomer } from '../../api/CustomerAPI';

const AddCustomerDialog = ({ open, onClose }) => {
    const [newCustomer, setNewCustomer] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact_number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            console.log("first");

            const response = await addCustomer(newCustomer);
            // onCustomerAdded(response.data);
            setNewCustomer({
                first_name: '',
                last_name: '',
                email: '',
                contact_number: ''
            });
            onClose();
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Customer</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="first_name"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={newCustomer.first_name}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="last_name"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={newCustomer.last_name}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={newCustomer.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="contact_number"
                    label="Contact Number"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={newCustomer.contact_number}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddCustomerDialog;
