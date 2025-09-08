import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addSubServicesActions, updateSubServicesActions, deleteSubServicesActions } from '../../../../redux/services/actions';

const SubServicesModal = ({ show, hide, subServicesData, servicesData }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        serviceCategoryId: '',
        name: '',
        image: '',
        headerOne: '',
        SubHeaderTwo: '',
        paragraphOne: '',
        headerThree: '',
        SubHeaderThree: '',
        paragraphTwo: '',
        headerFour: '',
        SubHeaderFour: '',
        paragraphThree: '',
        headerFive: '',
        SubHeaderFive: '',
        paragraphFour: '',
        headerSix: '',
        SubHeaderSix: '',
        paragraphFive: '',
        headerSeven: '',
        SubHeaderSeven: '',
        paragraphSix: ''
    });

    useEffect(() => {
        if (subServicesData.type === 'Edit' && subServicesData.data) {
            setFormData({
                serviceCategoryId: subServicesData.data.serviceCategoryId?._id || '',
                name: subServicesData.data.name || '',
                image: subServicesData.data.image || '',
                headerOne: subServicesData.data.headerOne || '',
                SubHeaderTwo: subServicesData.data.SubHeaderTwo || '',
                paragraphOne: subServicesData.data.paragraphOne || '',
                headerThree: subServicesData.data.headerThree || '',
                SubHeaderThree: subServicesData.data.SubHeaderThree || '',
                paragraphTwo: subServicesData.data.paragraphTwo || '',
                headerFour: subServicesData.data.headerFour || '',
                SubHeaderFour: subServicesData.data.SubHeaderFour || '',
                paragraphThree: subServicesData.data.paragraphThree || '',
                headerFive: subServicesData.data.headerFive || '',
                SubHeaderFive: subServicesData.data.SubHeaderFive || '',
                paragraphFour: subServicesData.data.paragraphFour || '',
                headerSix: subServicesData.data.headerSix || '',
                SubHeaderSix: subServicesData.data.SubHeaderSix || '',
                paragraphFive: subServicesData.data.paragraphFive || '',
                headerSeven: subServicesData.data.headerSeven || '',
                SubHeaderSeven: subServicesData.data.SubHeaderSeven || '',
                paragraphSix: subServicesData.data.paragraphSix || ''
            });
        } else {
            setFormData({
                serviceCategoryId: '',
                name: '',
                image: '',
                headerOne: '',
                SubHeaderTwo: '',
                paragraphOne: '',
                headerThree: '',
                SubHeaderThree: '',
                paragraphTwo: '',
                headerFour: '',
                SubHeaderFour: '',
                paragraphThree: '',
                headerFive: '',
                SubHeaderFive: '',
                paragraphFour: '',
                headerSix: '',
                SubHeaderSix: '',
                paragraphFive: '',
                headerSeven: '',
                SubHeaderSeven: '',
                paragraphSix: ''
            });
        }
    }, [subServicesData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (subServicesData.type === 'Add') {
            dispatch(addSubServicesActions(formData));
        } else if (subServicesData.type === 'Edit') {
            dispatch(updateSubServicesActions({
                _id: subServicesData.data._id,
                ...formData
            }));
        } else if (subServicesData.type === 'Delete') {
            dispatch(deleteSubServicesActions({ _id: subServicesData.data._id }));
        }
        
        hide();
    };

    const getModalTitle = () => {
        switch (subServicesData.type) {
            case 'Add': return 'Add New Sub Service';
            case 'Edit': return 'Edit Sub Service';
            case 'Delete': return 'Delete Sub Service';
            default: return 'Sub Service';
        }
    };

    return (
        <Modal show={show} onHide={hide} size="xl" centered>
            <Modal.Header closeButton>
                <Modal.Title>{getModalTitle()}</Modal.Title>
            </Modal.Header>
            
            <Form onSubmit={handleSubmit}>
                <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {subServicesData.type === 'Delete' ? (
                        <div className="text-center">
                            <i className="mdi mdi-alert-circle-outline text-danger" style={{ fontSize: '4rem' }}></i>
                            <h5 className="mt-3">Are you sure?</h5>
                            <p className="text-muted">
                                Do you want to delete the sub-service "{subServicesData.data?.name}"? 
                                This action cannot be undone.
                            </p>
                        </div>
                    ) : (
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Service Category <span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        name="serviceCategoryId"
                                        value={formData.serviceCategoryId}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Service Category</option>
                                        {servicesData.map(service => (
                                            <option key={service._id} value={service._id}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sub Service Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter sub-service name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="url"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleInputChange}
                                        placeholder="Enter image URL"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Header One</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="headerOne"
                                        value={formData.headerOne}
                                        onChange={handleInputChange}
                                        placeholder="Enter header one"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sub Header Two</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="SubHeaderTwo"
                                        value={formData.SubHeaderTwo}
                                        onChange={handleInputChange}
                                        placeholder="Enter sub header two"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Paragraph One</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="paragraphOne"
                                        value={formData.paragraphOne}
                                        onChange={handleInputChange}
                                        placeholder="Enter paragraph one"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Header Three</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="headerThree"
                                        value={formData.headerThree}
                                        onChange={handleInputChange}
                                        placeholder="Enter header three"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sub Header Three</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="SubHeaderThree"
                                        value={formData.SubHeaderThree}
                                        onChange={handleInputChange}
                                        placeholder="Enter sub header three"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Paragraph Two</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="paragraphTwo"
                                        value={formData.paragraphTwo}
                                        onChange={handleInputChange}
                                        placeholder="Enter paragraph two"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Header Four</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="headerFour"
                                        value={formData.headerFour}
                                        onChange={handleInputChange}
                                        placeholder="Enter header four"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sub Header Four</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="SubHeaderFour"
                                        value={formData.SubHeaderFour}
                                        onChange={handleInputChange}
                                        placeholder="Enter sub header four"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Paragraph Three</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="paragraphThree"
                                        value={formData.paragraphThree}
                                        onChange={handleInputChange}
                                        placeholder="Enter paragraph three"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Header Five</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="headerFive"
                                        value={formData.headerFive}
                                        onChange={handleInputChange}
                                        placeholder="Enter header five"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sub Header Five</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="SubHeaderFive"
                                        value={formData.SubHeaderFive}
                                        onChange={handleInputChange}
                                        placeholder="Enter sub header five"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Paragraph Four</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="paragraphFour"
                                        value={formData.paragraphFour}
                                        onChange={handleInputChange}
                                        placeholder="Enter paragraph four"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Header Six</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="headerSix"
                                        value={formData.headerSix}
                                        onChange={handleInputChange}
                                        placeholder="Enter header six"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sub Header Six</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="SubHeaderSix"
                                        value={formData.SubHeaderSix}
                                        onChange={handleInputChange}
                                        placeholder="Enter sub header six"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Paragraph Five</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="paragraphFive"
                                        value={formData.paragraphFive}
                                        onChange={handleInputChange}
                                        placeholder="Enter paragraph five"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Header Seven</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="headerSeven"
                                        value={formData.headerSeven}
                                        onChange={handleInputChange}
                                        placeholder="Enter header seven"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Sub Header Seven</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="SubHeaderSeven"
                                        value={formData.SubHeaderSeven}
                                        onChange={handleInputChange}
                                        placeholder="Enter sub header seven"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Paragraph Six</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="paragraphSix"
                                        value={formData.paragraphSix}
                                        onChange={handleInputChange}
                                        placeholder="Enter paragraph six"
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
                        variant={subServicesData.type === 'Delete' ? 'danger' : 'primary'}
                    >
                        {subServicesData.type === 'Delete' ? 'Delete' : 'Save'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default SubServicesModal;