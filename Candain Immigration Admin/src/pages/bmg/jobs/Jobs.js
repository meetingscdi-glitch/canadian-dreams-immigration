import { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../../helpers/PageTitle';
import { Loading } from '../../../helpers/loader/Loading';
import JobsModal from './JobsModal/JobsModal';
import FloatingActionButton from '../../../components/FloatingActionButton';
import { getJobsActions } from '../../../redux/actions';

const Jobs = () => {
    const dispatch = useDispatch();
    const { jobsDataReducer } = useSelector((state) => state);

    const jobsData = jobsDataReducer?.jobsData || [];
    const loading = jobsDataReducer?.loading;

    const [jobsModal, setJobsModal] = useState({
        type: '',
        data: null,
        isVisible: false,
    });

    useEffect(() => {
        dispatch(getJobsActions());
    }, [dispatch]);

    const handleJobsModal = (type, data = null) => {
        setJobsModal({ type, data, isVisible: true });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-CA');
    };

    return (
        <>
            <PageTitle breadCrumbItems={[{ label: 'Jobs', path: '/admin/jobs', active: true }]} title="Job Management - Canadian Dream Immigration" />

            <Row>
                <Col xs={12}>
                    <Card className="border-0 shadow-lg animate-fade-in hover-lift" style={{ borderRadius: '15px' }}>
                        <Card.Header className="bg-gradient border-0 gradient-animate" style={{ borderRadius: '15px 15px 0 0' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                                        <i className="mdi mdi-briefcase text-muted" style={{ fontSize: '1.5rem' }}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-muted mb-1 fw-bold">Job Management</h4>
                                        <p className="text-muted-50 mb-0">Create and manage job postings</p>
                                    </div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-pill px-4 py-2">
                                    <span className="text-muted fw-semibold">
                                        <i className="mdi mdi-briefcase-multiple me-2"></i>
                                        {jobsData.length || 0} Total Jobs
                                    </span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="py-0">
                            <div className="d-flex justify-content-end align-items-center mb-4">
                                <Button
                                    className="px-4 py-2 fw-semibold btn-animated hover-glow"
                                    style={{
                                        backgroundColor: '#006AAB',
                                        borderColor: '#006AAB',
                                        borderRadius: '25px',
                                        boxShadow: '0 4px 15px rgba(0, 106, 171, 0.3)'
                                    }}
                                    onClick={() => handleJobsModal('Add')}
                                >
                                    <i className="mdi mdi-plus-circle me-2"></i>Post New Job
                                </Button>
                            </div>

                            {loading ? (
                                <Loading />
                            ) : jobsData.length > 0 ? (
                                <div className="table-responsive">
                                    <Table className="mb-0 modern-table">
                                        <thead>
                                            <tr>
                                                <th className="border-0 py-3 text-muted fw-semibold">#</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Image</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Job Title</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Department</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Type</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Location</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Pay Scale</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Date</th>
                                                <th className="border-0 py-3 text-muted fw-semibold text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {jobsData.map((data, index) => (
                                                <tr key={data._id || index} className="stagger-item">
                                                    <td className="py-3 align-middle">
                                                        <span className="badge bg-light text-dark rounded-pill">{index + 1}</span>
                                                    </td>
                                                    <td className="py-3 align-middle">
                                                        <div className="position-relative">
                                                            <img
                                                                src={data?.image || '/default-job.jpg'}
                                                                alt={data?.job}
                                                                className="rounded shadow-sm"
                                                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                            />
                                                            {data?.image && (
                                                                <div className="position-absolute top-0 end-0 bg-success rounded-circle" style={{ width: '12px', height: '12px', transform: 'translate(25%, -25%)' }}></div>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="py-3 align-middle">
                                                        <div className="fw-bold text-dark mb-1" style={{ maxWidth: '200px' }}>
                                                            {data?.job || 'Untitled Job'}
                                                        </div>
                                                        <small className="text-muted">ID: {data?._id?.slice(-6) || 'N/A'}</small>
                                                    </td>
                                                    <td className="py-3 align-middle">
                                                        <span className="badge bg-primary bg-opacity-10 text-primary">
                                                            {data?.department || 'N/A'}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 align-middle">
                                                        <span className="badge bg-info bg-opacity-10 text-info">
                                                            {data?.jobType || 'N/A'}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <i className="mdi mdi-map-marker text-muted me-1"></i>
                                                            {data?.location || 'N/A'}
                                                        </div>
                                                    </td>
                                                    <td className="py-3 align-middle">
                                                        <span className="badge bg-success bg-opacity-10 text-success">
                                                            {data?.payScale || 'N/A'}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 align-middle">
                                                        <div className="d-flex flex-column">
                                                            <span className="fw-semibold">{formatDate(data?.createdAt) || 'N/A'}</span>
                                                            <small className="text-muted">{new Date(data?.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</small>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 align-middle text-center">
                                                        <div className="action-btn-group">
                                                            <button
                                                                className="action-btn view-btn"
                                                                onClick={() => handleJobsModal('View', data)}
                                                                title="View Job"
                                                            >
                                                                <i className="mdi mdi-eye"></i>
                                                            </button>
                                                            <button
                                                                className="action-btn edit-btn"
                                                                onClick={() => handleJobsModal('Edit', data)}
                                                                title="Edit Job"
                                                            >
                                                                <i className="mdi mdi-pencil"></i>
                                                            </button>
                                                            <button
                                                                className="action-btn delete-btn"
                                                                onClick={() => handleJobsModal('Delete', data)}
                                                                title="Delete Job"
                                                            >
                                                                <i className="mdi mdi-delete"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="mb-4">
                                        <i className="mdi mdi-briefcase-outline text-muted" style={{ fontSize: '4rem' }}></i>
                                    </div>
                                    <h5 className="text-muted mb-3">No Job Postings Found</h5>
                                    <p className="text-muted mb-4">Start posting jobs to attract talented candidates</p>
                                    <Button
                                        className="px-4 py-2"
                                        style={{ backgroundColor: '#006AAB', borderColor: '#006AAB', borderRadius: '25px' }}
                                        onClick={() => handleJobsModal('Add')}
                                    >
                                        <i className="mdi mdi-plus-circle me-2"></i>Post Your First Job
                                    </Button>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <JobsModal
                show={jobsModal.isVisible}
                hide={() => setJobsModal({ ...jobsModal, isVisible: false })}
                jobsData={jobsModal}
            />

            <FloatingActionButton
                onClick={() => handleJobsModal('Add')}
                icon="mdi-briefcase-outline"
                tooltip="Post New Job"
            />
        </>
    );
};

export default Jobs;