import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button, Box } from '@mui/material';

const ViewCustomerDialog = ({ open, onClose, customer }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Customer Details</DialogTitle>
            <DialogContent>
                {customer ? (
                    <Box>
                        <Box mb={2}>
                            <Typography variant="body1"><strong>First Name:</strong> {customer.first_name}</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body1"><strong>Last Name:</strong> {customer.last_name}</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body1"><strong>Email:</strong> {customer.email}</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body1"><strong>Contact Number:</strong> {customer.contact_number}</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body1"><strong>Created At:</strong> {customer.created_at ? new Date(customer.created_at).toLocaleString() : 'N/A'}</Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="body1"><strong>Updated At:</strong> {customer.updated_at ? new Date(customer.updated_at).toLocaleString() : 'N/A'}</Typography>
                        </Box>
                    </Box>
                ) : (
                    <Typography variant="body1">No customer details available.</Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ViewCustomerDialog;
