import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addServicesActions, updateServicesActions, deleteServicesActions } from '../../../../redux/services/actions';

const ServicesModal = ({ show, hide, servicesData }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: ''
    });

    useEffect(() => {
        if (servicesData.type === 'Edit' && servicesData.data) {
            setFormData({
                name: servicesData.data.name || ''
            });
        } else {
            setFormData({ name: '' });
        }
    }, [servicesData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (servicesData.type === 'Add') {
            dispatch(addServicesActions(formData));
        } else if (servicesData.type === 'Edit') {
            dispatch(updateServicesActions({
                _id: servicesData.data._id,
                ...formData
            }));
        } else if (servicesData.type === 'Delete') {
            dispatch(deleteServicesActions({ _id: servicesData.data._id }));
        }
        
        hide();
    };

    const getModalTitle = () => {
        switch (servicesData.type) {
            case 'Add': return 'Add New Service';
            case 'Edit': return 'Edit Service';
            case 'Delete': return 'Delete Service';
            default: return 'Service';
        }
    };

    return (
        <Modal show={show} onHide={hide} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>{getModalTitle()}</Modal.Title>
            </Modal.Header>
            
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {servicesData.type === 'Delete' ? (
                        <div className="text-center">
                            <i className="mdi mdi-alert-circle-outline text-danger" style={{ fontSize: '4rem' }}></i>
                            <h5 className="mt-3">Are you sure?</h5>
                            <p className="text-muted">
                                Do you want to delete the service "{servicesData.data?.name}"? 
                                This action cannot be undone.
                            </p>
                        </div>
                    ) : (
                        <Row>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Service Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter service name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>
                        Cancel
                    </Button>
                    <Button 
                        type="submit" 
                        variant={servicesData.type === 'Delete' ? 'danger' : 'primary'}
                    >
                        {servicesData.type === 'Delete' ? 'Delete' : 'Save'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default ServicesModal;