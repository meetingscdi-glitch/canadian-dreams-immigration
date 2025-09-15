import { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addJobActions, updateJobActions, deleteJobActions } from '../../../../redux/actions';

const JobsModal = ({ show, hide, jobsData }) => {
    const dispatch = useDispatch();
    const { jobsDataReducer } = useSelector((state) => state);

    const [formData, setFormData] = useState({
        job: '',
        department: '',
        jobType: '',
        location: '',
        payScale: '',
        headerOne: '',
        headerTwo: '',
        image: null
    });

    const [existingImage, setExistingImage] = useState(null);
    const [selectedImagePreview, setSelectedImagePreview] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (jobsData.type === 'Edit' && jobsData.data) {
            setFormData({
                job: jobsData.data.job || '',
                department: jobsData.data.department || '',
                jobType: jobsData.data.jobType || '',
                location: jobsData.data.location || '',
                payScale: jobsData.data.payScale || '',
                headerOne: jobsData.data.headerOne || '',
                headerTwo: jobsData.data.headerTwo || '',
                image: null
            });
            setExistingImage(jobsData.data.image || null);
        } else {
            setFormData({
                job: '',
                department: '',
                jobType: '',
                location: '',
                payScale: '',
                headerOne: '',
                headerTwo: '',
                image: null
            });
            setExistingImage(null);
        }
        setSelectedImagePreview(null);
        setErrors({});
    }, [jobsData]);

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            if (files && files[0]) {
                const file = files[0];
                setFormData(prev => ({ ...prev, [name]: file }));

                const reader = new FileReader();
                reader.onload = (e) => {
                    setSelectedImagePreview(e.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                setFormData(prev => ({ ...prev, [name]: null }));
                setSelectedImagePreview(null);
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.job.trim() || formData.job.length < 2) {
            newErrors.job = 'Job title must be at least 2 characters long';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const submitData = new FormData();
        submitData.append('job', formData.job);
        submitData.append('department', formData.department);
        submitData.append('jobType', formData.jobType);
        submitData.append('location', formData.location);
        submitData.append('payScale', formData.payScale);
        submitData.append('headerOne', formData.headerOne);
        submitData.append('headerTwo', formData.headerTwo);

        if (jobsData.type === 'Edit') {
            submitData.append('_id', jobsData.data._id);
            if (formData.image && formData.image instanceof File) {
                submitData.append('image', formData.image);
            }
            dispatch(updateJobActions(jobsData.data._id, submitData));
        } else if (jobsData.type === 'Add') {
            if (formData.image && formData.image instanceof File) {
                submitData.append('image', formData.image);
            }
            dispatch(addJobActions(submitData));
        }
        hide();
    };

    const handleDelete = () => {
        dispatch(deleteJobActions(jobsData.data._id));
        hide();
    };

    const getModalTitle = () => {
        switch (jobsData.type) {
            case 'Add': return 'Post New Job';
            case 'Edit': return 'Edit Job';
            case 'View': return 'View Job';
            case 'Delete': return 'Delete Job';
            default: return 'Job';
        }
    };

    if (jobsData.type === 'View') {
        return (
            <Modal show={show} onHide={hide} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>View Job: {jobsData.data?.job}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <h4>{jobsData.data?.job}</h4>
                            <p><strong>Department:</strong> {jobsData.data?.department || 'N/A'}</p>
                            <p><strong>Job Type:</strong> {jobsData.data?.jobType || 'N/A'}</p>
                            <p><strong>Location:</strong> {jobsData.data?.location || 'N/A'}</p>
                            <p><strong>Pay Scale:</strong> {jobsData.data?.payScale || 'N/A'}</p>
                        </Col>
                        <Col md={6}>
                            {jobsData.data?.image && (
                                <img
                                    src={jobsData.data.image}
                                    alt={jobsData.data.job}
                                    className="img-fluid rounded mb-3"
                                />
                            )}
                        </Col>
                    </Row>
                    {jobsData.data?.headerOne && (
                        <div className="mt-3">
                            <h6>Header One:</h6>
                            <p>{jobsData.data.headerOne}</p>
                        </div>
                    )}
                    {jobsData.data?.headerTwo && (
                        <div className="mt-3">
                            <h6>Header Two:</h6>
                            <p>{jobsData.data.headerTwo}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="btn-cancel" onClick={hide}>
                        <i className="mdi mdi-close"></i>Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Modal show={show} onHide={hide} size={jobsData.type === 'Delete' ? 'sm' : 'lg'} centered className="modal-animate">
            {jobsData.type === 'Delete' ? (
                <>
                    <Modal.Header closeButton className="border-0">
                        <Modal.Title className="fw-bold">{getModalTitle()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center py-4">
                        <div className="mb-3">
                            <i className="mdi mdi-delete-outline text-danger" style={{ fontSize: '4rem' }}></i>
                        </div>
                        <h5 className="mb-3 fw-bold">Delete Job Posting</h5>
                        <p className="mb-2">Are you sure you want to delete</p>
                        <p className="fw-bold text-primary mb-3">"{jobsData.data?.job}"?</p>
                        <div className="alert alert-warning d-flex align-items-center" role="alert">
                            <i className="mdi mdi-alert me-2"></i>
                            <small>This action cannot be undone and will permanently remove this job posting.</small>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="border-0 justify-content-center">
                        <Button variant="outline-secondary" onClick={hide} className="px-4 me-2 btn-cancel">
                            <i className="mdi mdi-close me-1"></i>Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDelete} className="px-4">
                            <i className="mdi mdi-delete me-1"></i>Delete Job
                        </Button>
                    </Modal.Footer>
                </>
            ) : (
                <>
                    <Modal.Header className="px-3 py-3 text-light border-0" style={{ backgroundColor: '#006AAB', borderRadius: '0.375rem 0.375rem 0 0' }}>
                        <Modal.Title className="fw-bold d-flex align-items-center">
                            <i className={`mdi ${jobsData.type === 'Add' ? 'mdi-plus-circle' : 'mdi-pencil'} me-2`}></i>
                            {getModalTitle()}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="bg-white p-4 rounded shadow-sm animate-slide-left">
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold mb-2">
                                                <i className="mdi mdi-briefcase me-2 text-primary"></i>
                                                Job Title <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="job"
                                                value={formData.job}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.job}
                                                placeholder="Enter job title..."
                                                style={{ borderRadius: '8px' }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.job}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold mb-2">
                                                <i className="mdi mdi-domain me-2 text-primary"></i>
                                                Department
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="department"
                                                value={formData.department}
                                                onChange={handleInputChange}
                                                placeholder="Enter department..."
                                                style={{ borderRadius: '8px' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold mb-2">
                                                <i className="mdi mdi-clock me-2 text-primary"></i>
                                                Job Type
                                            </Form.Label>
                                            <Form.Select
                                                name="jobType"
                                                value={formData.jobType}
                                                onChange={handleInputChange}
                                                style={{ borderRadius: '8px' }}
                                            >
                                                <option value="">Select job type...</option>
                                                <option value="Full-time">Full-time</option>
                                                <option value="Part-time">Part-time</option>
                                                <option value="Contract">Contract</option>
                                                <option value="Internship">Internship</option>
                                                <option value="Remote">Remote</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold mb-2">
                                                <i className="mdi mdi-map-marker me-2 text-primary"></i>
                                                Location
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                placeholder="Enter location..."
                                                style={{ borderRadius: '8px' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold mb-2">
                                        <i className="mdi mdi-currency-usd me-2 text-primary"></i>
                                        Pay Scale
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="payScale"
                                        value={formData.payScale}
                                        onChange={handleInputChange}
                                        placeholder="Enter pay scale (e.g., $50,000 - $70,000)..."
                                        style={{ borderRadius: '8px' }}
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold mb-2">
                                                <i className="mdi mdi-text me-2 text-primary"></i>
                                                Header One
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="headerOne"
                                                value={formData.headerOne}
                                                onChange={handleInputChange}
                                                placeholder="Enter first header description..."
                                                style={{ borderRadius: '8px' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold mb-2">
                                                <i className="mdi mdi-text me-2 text-primary"></i>
                                                Header Two
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="headerTwo"
                                                value={formData.headerTwo}
                                                onChange={handleInputChange}
                                                placeholder="Enter second header description..."
                                                style={{ borderRadius: '8px' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold mb-2">
                                        <i className="mdi mdi-image me-2 text-primary"></i>
                                        Job Image
                                    </Form.Label>

                                    {(existingImage || selectedImagePreview) && (
                                        <div className="mb-3 p-3 bg-light rounded border">
                                            <small className="text-muted d-block mb-2">Image Preview:</small>
                                            <div className="d-flex gap-3 flex-wrap">
                                                {existingImage && jobsData.type === 'Edit' && (
                                                    <div className="position-relative">
                                                        <img
                                                            src={existingImage}
                                                            alt="Current job image"
                                                            className="img-thumbnail shadow-sm"
                                                            style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                                        />
                                                        <small className="d-block text-center mt-1 text-muted">Current</small>
                                                    </div>
                                                )}
                                                {selectedImagePreview && (
                                                    <div className="position-relative">
                                                        <img
                                                            src={selectedImagePreview}
                                                            alt="Selected image preview"
                                                            className="img-thumbnail shadow-sm"
                                                            style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                                                        />
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            className="position-absolute top-0 end-0 rounded-circle shadow"
                                                            style={{ width: '24px', height: '24px', padding: '0', transform: 'translate(8px, -8px)' }}
                                                            onClick={() => {
                                                                setSelectedImagePreview(null);
                                                                setFormData(prev => ({ ...prev, image: null }));
                                                            }}
                                                        >
                                                            <i className="mdi mdi-close" style={{ fontSize: '12px' }}></i>
                                                        </Button>
                                                        <small className="d-block text-center mt-1 text-success">New</small>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <Form.Control
                                        type="file"
                                        name="image"
                                        onChange={handleInputChange}
                                        accept="image/*"
                                        style={{ borderRadius: '8px' }}
                                    />
                                    <Form.Text className="text-muted mt-2">
                                        <i className="mdi mdi-information me-1"></i>
                                        Recommended: JPG, PNG files. Max size: 5MB
                                    </Form.Text>
                                </Form.Group>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="px-4 py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                        <Button variant="outline-secondary" onClick={hide} className="px-4 me-2 btn-cancel">
                            <i className="mdi mdi-close me-1"></i>Cancel
                        </Button>
                        <Button
                            className="px-4 btn-animated hover-glow"
                            style={{ backgroundColor: '#006AAB', borderColor: '#006AAB' }}
                            onClick={handleSubmit}
                            disabled={jobsDataReducer?.loading}
                        >
                            {jobsDataReducer?.loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <i className={`mdi ${jobsData.type === 'Add' ? 'mdi-plus' : 'mdi-content-save'} me-1`}></i>
                                    {jobsData.type === 'Add' ? 'Post Job' : 'Update Job'}
                                </>
                            )}
                        </Button>
                    </Modal.Footer>
                </>
            )}
        </Modal>
    );
};

export default JobsModal;