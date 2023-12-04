import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import { ConnectWithoutContactOutlined, DateRangeOutlined, Description, DescriptionOutlined, DocumentScannerOutlined, FlagCircleOutlined, FlagOutlined, HomeOutlined, List, ListAltOutlined, MoreVertOutlined, PercentOutlined, Person, Person2Outlined } from '@mui/icons-material';
import { DateCalendar } from '@mui/x-date-pickers';


const rows = [
    { id: 1, items: 'Landing Page', assignor: 'John Doe', department: 'Design Team', progressbar: 50, deadline: '2023-12-31', status: 'Ongoing' },
    { id: 2, items: 'Ads', assignor: 'John Doe', department: 'Marketing', progressbar: 75, deadline: '2023-11-30', status: 'Ongoing' },
    { id: 3, items: 'Application', assignor: 'John Doe', department: 'Design Team', progressbar: 35, deadline: '2023-11-30', status: 'Ongoing' },

];

const columns = [
    {
        field: 'id', headerName: 'ID', width: 60, headerClassName: 'custom-header', cellClassName: 'custom-cell'
    },
    {
        field: 'items', headerName: 'Items', width: 113, headerClassName: 'custom-header',
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <DescriptionOutlined />
                <span>Items</span>
            </div>
        ),
    },
    {
        field: 'assignor', headerName: 'Assignor', width: 150, headerClassName: 'custom-header',
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Person2Outlined />
                <span>Assignor</span>
            </div>
        ),
    },
    {
        field: 'department', headerName: 'Department', width: 150, headerClassName: 'custom-header', 
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                < HomeOutlined/>
                <span>Department</span>
            </div>
        ),
    },
    {
        field: 'progressbar',
        headerName: 'Progress',
        width: 150,
        headerClassName: 'custom-header',
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PercentOutlined />
                <span>Progress</span>
            </div>
        ),
        renderCell: (params) => (
            <div style={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={params.value} />
                <span style={{ marginLeft: 8 }}>{params.value}%</span>
            </div>
        ),
    },
    {
        field: 'deadline', headerName: 'Deadline', width: 130, headerClassName: 'custom-header',
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                < DateRangeOutlined />
                <span>Deadline</span>
            </div>
        ),
    },
    {
        field: 'status', headerName: 'Status', width: 128, headerClassName: 'custom-header',
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                < FlagOutlined />
                <span>Status</span>
            </div>
        ),
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 144,
        headerClassName: 'custom-header',
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                < MoreVertOutlined />
                <span>Action</span>
            </div>
        ),
        renderCell: (params) => (
            <EditIcon color="" style={{ cursor: 'pointer' }} />
        ),
    },
  
];



const Table = () => {
    return (
        <div style={{ height: 400, width: '80%', paddingLeft: '8rem', marginTop: '5rem' }}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </div>
    );
};

export default Table;
