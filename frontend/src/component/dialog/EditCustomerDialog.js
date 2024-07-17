import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box } from '@mui/material';
import { editCustomer } from '../../api/CustomerAPI';

const EditCustomerDialog = ({ open, onClose, customer, onUpdated }) => {
    const [editedCustomer, setEditedCustomer] = useState(customer);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const handleSave = async () => {
         try {
            console.log("first");

             const response = await editCustomer(editedCustomer);

            onUpdated(true)

            onClose();
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}maxWidth="md" fullWidth>
            <DialogTitle>Edit Customer</DialogTitle>
            <DialogContent>
                <Box sx={{ marginBottom: 2 }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="first_name"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedCustomer?.first_name}
                        onChange={handleChange}
                    />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <TextField
                        margin="dense"
                        name="last_name"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedCustomer?.last_name}
                        onChange={handleChange}
                    />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={editedCustomer?.email}
                        onChange={handleChange}
                    />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <TextField
                        margin="dense"
                        name="contact_number"
                        label="Contact Number"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedCustomer?.contact_number}
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditCustomerDialog;
