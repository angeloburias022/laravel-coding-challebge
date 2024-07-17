import React, { useState, useEffect } from 'react';
import CustomerTable from '../component/table/CustomerTable';
import SearchBar from '../component/searchbar/SearchBar';
import AddCustomerDialog from '../component/dialog/AddCustomerDialog';
import DeleteCustomerDialog from '../component/dialog/DeleteCustomerDialog';
import ViewCustomerDialog from '../component/dialog/ViewCustomerDialog';
import { Box, Button, Container, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { deleteCustomer, fetchCustomers, addCustomer } from '../api/CustomerAPI';
import EditCustomerDialog from '../component/dialog/EditCustomerDialog';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openViewModal, setOpenViewModal] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState(null);
    const [customerToView, setCustomerToView] = useState(null);
    const [customerToEdit, setCustomerToEdit] = useState(null);

    useEffect(() => {
        fetchData();
    }, [openAddModal, customerToEdit]);

    const fetchData = async () => {
        try {
            const response = await fetchCustomers();
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteCustomer(customerToDelete);
            setCustomers(customers.filter(customer => customer.id !== customerToDelete));
            setCustomerToDelete(null);
            setOpenDeleteModal(false);
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };


    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleViewCustomer = (customer) => {
        setCustomerToView(customer);
        setOpenViewModal(true);
    };

    const handleAddModalOpen = () => {
        setOpenAddModal(true);
    };

    const handleDeleteModalOpen = (id) => {
        setCustomerToDelete(id);
        setOpenDeleteModal(true);
    };

    const handleDeleteModalClose = () => {
        setOpenDeleteModal(false);
        setCustomerToDelete(null);
    };

    const handleViewModalClose = () => {
        console.log("first");

        setOpenViewModal(false);
        setCustomerToView(null);
    };



    return (
        <Container>
            <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4">Customer List</Typography>
                <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
                <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAddModalOpen}>
                    Add Customer
                </Button>
            </Box>
            <CustomerTable
                customers={customers.filter(customer =>
                    customer.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    customer.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
                )}
                onDelete={handleDeleteModalOpen}
                onView={handleViewCustomer}
                setOpenDeleteModal={setOpenDeleteModal}
                setOpenViewModal={setOpenViewModal}
                onEdit={setCustomerToEdit}
            />
            <AddCustomerDialog
                open={openAddModal}
                onClose={() => setOpenAddModal(false)}
            />
            <DeleteCustomerDialog
                open={openDeleteModal}
                onClose={handleDeleteModalClose}
                onDelete={handleDelete}
            />
            <ViewCustomerDialog
                open={openViewModal}
                onClose={handleViewModalClose}
                customer={customerToView}

            />

        </Container>
    );
};

export default CustomerList;
