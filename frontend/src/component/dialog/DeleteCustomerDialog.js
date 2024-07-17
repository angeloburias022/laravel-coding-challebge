// components/DeleteCustomerDialog.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button } from '@mui/material';

const DeleteCustomerDialog = ({ open, onClose, onDelete }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <Typography>Are you sure you want to delete this customer?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={onDelete} color="primary">Delete</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteCustomerDialog;
