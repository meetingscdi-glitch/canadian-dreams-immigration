import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addSubServicesActions, updateSubServicesActions, deleteSubServicesActions } from '../../../../redux/services/actions';

const SubServicesModal = ({ show, hide, subServicesData, servicesData }) => {
    const dispatch = useDispatch();
    const [imageInputType, setImageInputType] = useState('url');
    const [selectedFile, setSelectedFile] = useState(null);
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData(prev => ({
                    ...prev,
                    image: e.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (subServicesData.type === 'Add') {
            const submitData = new FormData();
            Object.keys(formData).forEach(key => {
                if (key !== 'image') {
                    submitData.append(key, formData[key]);
                }
            });
            if (selectedFile) {
                submitData.append('image', selectedFile);
            } else if (formData.image && !formData.image.startsWith('data:')) {
                submitData.append('imageUrl', formData.image);
            }
            dispatch(addSubServicesActions(submitData));
        } else if (subServicesData.type === 'Edit') {
            const submitData = new FormData();
            submitData.append('_id', subServicesData.data._id);
            Object.keys(formData).forEach(key => {
                if (key !== 'image') {
                    submitData.append(key, formData[key]);
                }
            });
            if (selectedFile) {
                submitData.append('image', selectedFile);
            } else if (formData.image && !formData.image.startsWith('data:')) {
                submitData.append('imageUrl', formData.image);
            }
            dispatch(updateSubServicesActions(submitData));
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
                                    <Form.Label>Image</Form.Label>
                                    <div className="mb-2">
                                        <Form.Check
                                            inline
                                            type="radio"
                                            name="imageType"
                                            label="Upload File"
                                            checked={imageInputType === 'file'}
                                            onChange={() => setImageInputType('file')}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            name="imageType"
                                            label="Image URL"
                                            checked={imageInputType === 'url'}
                                            onChange={() => setImageInputType('url')}
                                        />
                                    </div>
                                    {imageInputType === 'file' ? (
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                    ) : (
                                        <Form.Control
                                            type="url"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleInputChange}
                                            placeholder="Enter image URL"
                                        />
                                    )}
                                    {formData.image && (
                                        <div className="mt-3">
                                            <img 
                                                src={formData.image} 
                                                alt="Preview" 
                                                style={{ 
                                                    width: '200px', 
                                                    height: '150px', 
                                                    objectFit: 'cover', 
                                                    borderRadius: '8px',
                                                    border: '1px solid #ddd'
                                                }} 
                                            />
                                        </div>
                                    )}
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
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.paragraphOne}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, paragraphOne: data }));
                                        }}
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
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.paragraphTwo}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, paragraphTwo: data }));
                                        }}
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
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.paragraphThree}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, paragraphThree: data }));
                                        }}
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
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.paragraphFour}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, paragraphFour: data }));
                                        }}
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
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.paragraphFive}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, paragraphFive: data }));
                                        }}
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
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={formData.paragraphSix}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setFormData(prev => ({ ...prev, paragraphSix: data }));
                                        }}
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