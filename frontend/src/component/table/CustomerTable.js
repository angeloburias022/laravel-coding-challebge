import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Box } from '@mui/material';
import { Delete, Visibility, Edit } from '@mui/icons-material';
import ViewCustomerDialog from '../dialog/ViewCustomerDialog';
import EditCustomerDialog from '../dialog/EditCustomerDialog';

const CustomerTable = ({ customers, onDelete, onEdit }) => {
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [customerToView, setCustomerToView] = useState(null);
    const [customerToEdit, setCustomerToEdit] = useState(null);


    const handleViewModalOpen = (customer) => {
        setCustomerToView(customer);
        setOpenViewModal(true);
    };

    const handleViewModalClose = () => {
        setOpenViewModal(false);
        setCustomerToView(null);
    };

    const handleEditModalOpen = (customer) => {
        setCustomerToEdit(customer);
        setOpenEditModal(true);
    };

    const handleEditModalClose = () => {
        setOpenEditModal(false);
        setCustomerToEdit(null);
    };

    const handleEditCustomer = (editedCustomer) => {
        // Handle edit logic, e.g., update state or call API
        console.log('Edited customer:', editedCustomer);
        handleEditModalClose();
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Contact Number</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(customer => (
                        <TableRow key={customer.id}>
                            <TableCell>{customer.first_name}</TableCell>
                            <TableCell>{customer.last_name}</TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.contact_number}</TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleViewModalOpen(customer)}
                                        sx={{ marginRight: '8px' }}
                                    >
                                        <Visibility />
                                    </IconButton>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleEditModalOpen(customer)}
                                        sx={{ marginRight: '8px' }}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => onDelete(customer.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* View customer dialog */}
            <ViewCustomerDialog open={openViewModal} onClose={handleViewModalClose} customer={customerToView} />

            {/* Edit customer dialog */}
            {customerToEdit && (
                <EditCustomerDialog
                    open={openEditModal}
                    onClose={handleEditModalClose}
                    onSave={handleEditCustomer}
                    customer={customerToEdit}
                    onUpdated={onEdit}
                />
            )}
        </TableContainer>
    );
};

export default CustomerTable;
