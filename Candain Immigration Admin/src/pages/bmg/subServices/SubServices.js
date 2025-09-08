import { useEffect, useState } from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../../helpers/PageTitle';
import { Loading } from '../../../helpers/loader/Loading';
import Pagination from '../../../helpers/Pagination';
import SubServicesModal from './SubServicesModal/SubServicesModal';
import FloatingActionButton from '../../../components/FloatingActionButton';
import { getSubServicesActions, getServicesActions } from '../../../redux/services/actions';

const SubServices = () => {
    const dispatch = useDispatch();
    const { subServicesData, servicesData, loading } = useSelector(state => state.servicesData || {});

    const [totalRecords, setTotalRecords] = useState(0);
    const [search, setSearch] = useState('');
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [totalPages, setTotalPages] = useState(1);

    const [subServicesModal, setSubServicesModal] = useState({
        type: '',
        data: null,
        isVisible: false,
    });

    useEffect(() => {
        dispatch(getSubServicesActions());
        dispatch(getServicesActions());
    }, [dispatch]);

    useEffect(() => {
        if (subServicesData?.subServices) {
            setTotalRecords(subServicesData.subServices.length);
        }
    }, [subServicesData]);

    useEffect(() => {
        setTotalPages(Math.ceil(totalRecords / pageSize));
    }, [totalRecords, pageSize]);

    const handleSubServicesModal = (type, data = null) => {
        setSubServicesModal({ type, data, isVisible: true });
    };

    const filteredData = subServicesData?.subServices?.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase())
    ) || [];

    return (
        <>
            <PageTitle breadCrumbItems={[{ label: 'Sub Services', path: '/admin/sub-services', active: true }]} title="Sub Services Management - Canadian Dream Immigration" />

            <Row>
                <Col xs={12}>
                    <Card className="border-0 shadow-lg animate-fade-in hover-lift" style={{ borderRadius: '15px' }}>
                        <Card.Header className="bg-gradient border-0 gradient-animate" style={{ borderRadius: '15px 15px 0 0' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                                        <i className="mdi mdi-briefcase-variant text-muted" style={{ fontSize: '1.5rem' }}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-muted mb-1 fw-bold">Sub Services Management</h4>
                                        <p className="text-muted-50 mb-0">Manage detailed immigration sub-services</p>
                                    </div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-pill px-4 py-2">
                                    <span className="text-muted fw-semibold">
                                        <i className="mdi mdi-cog me-2"></i>
                                        {totalRecords || 0} Total Sub Services
                                    </span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="py-0">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="position-relative">
                                        <input
                                            type="text"
                                            className="form-control ps-5"
                                            placeholder="Search sub-services by name..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            style={{ borderRadius: '25px', width: '300px', border: '2px solid #e9ecef' }}
                                        />
                                        <i className="mdi mdi-magnify position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}></i>
                                    </div>
                                    {search && (
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            className="rounded-circle"
                                            onClick={() => setSearch('')}
                                            style={{ width: '35px', height: '35px' }}
                                        >
                                            <i className="mdi mdi-close"></i>
                                        </Button>
                                    )}
                                </div>
                                <Button
                                    className="px-4 py-2 fw-semibold btn-animated hover-glow"
                                    style={{
                                        backgroundColor: '#006AAB',
                                        borderColor: '#006AAB',
                                        borderRadius: '25px',
                                        boxShadow: '0 4px 15px rgba(0, 106, 171, 0.3)'
                                    }}
                                    onClick={() => handleSubServicesModal('Add')}
                                >
                                    <i className="mdi mdi-plus-circle me-2"></i>Add New Sub Service
                                </Button>
                            </div>

                            {loading ? (
                                <Loading />
                            ) : filteredData.length > 0 ? (
                                <div className="table-responsive">
                                    <Table className="mb-0 modern-table">
                                        <thead>
                                            <tr>
                                                <th className="border-0 py-3 text-muted fw-semibold">#</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Name</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Service Category</th>
                                                <th className="border-0 py-3 text-muted fw-semibold">Image</th>
                                                <th className="border-0 py-3 text-muted fw-semibold text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.map((data, index) => (
                                                <tr key={data._id || index} className="stagger-item">
                                                    <td className="align-middle">
                                                        <span className="badge bg-light text-dark rounded-pill">{(pageIndex - 1) * pageSize + index + 1}</span>
                                                    </td>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip id={`tooltip-${index}`}>{data?.name}</Tooltip>
                                                        }>
                                                        <td className="align-middle">{data?.name?.slice(0, 30) + '...' || 'N/A'}</td>
                                                    </OverlayTrigger>
                                                    <td className="align-middle">{data?.serviceCategoryId?.name || 'N/A'}</td>
                                                    <td className="align-middle">
                                                        {data?.image ? (
                                                            <img src={data.image} alt="Service" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                                                        ) : (
                                                            <span className="text-muted">No Image</span>
                                                        )}
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="action-btn-group">
                                                            <button
                                                                className="action-btn edit-btn"
                                                                onClick={() => handleSubServicesModal('Edit', data)}
                                                                title="Edit Sub Service"
                                                            >
                                                                <i className="mdi mdi-pencil"></i>
                                                            </button>
                                                            <button
                                                                className="action-btn delete-btn"
                                                                onClick={() => handleSubServicesModal('Delete', data)}
                                                                title="Delete Sub Service"
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
                                        <i className="mdi mdi-briefcase-variant-outline text-muted" style={{ fontSize: '4rem' }}></i>
                                    </div>
                                    <h5 className="text-muted mb-3">No Sub Services Found</h5>
                                    <p className="text-muted mb-4">Start adding your detailed immigration sub-services</p>
                                    <Button
                                        className="px-4 py-2"
                                        style={{ backgroundColor: '#006AAB', borderColor: '#006AAB', borderRadius: '25px' }}
                                        onClick={() => handleSubServicesModal('Add')}
                                    >
                                        <i className="mdi mdi-plus-circle me-2"></i>Add Your First Sub Service
                                    </Button>
                                </div>
                            )}
                            {totalRecords > 20 && (
                                <Pagination
                                    pageIndex={pageIndex}
                                    pageSize={pageSize}
                                    totalPages={totalPages}
                                    setPageIndex={setPageIndex}
                                    onChangePageSize={setPageSize}
                                />
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <SubServicesModal
                show={subServicesModal.isVisible}
                hide={() => setSubServicesModal({ ...subServicesModal, isVisible: false })}
                subServicesData={subServicesModal}
                servicesData={servicesData?.services || []}
            />

            <FloatingActionButton
                onClick={() => handleSubServicesModal('Add')}
                icon="mdi-briefcase-plus"
                tooltip="Add New Sub Service"
            />
        </>
    );
};

export default SubServices;