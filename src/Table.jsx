import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import { ConnectWithoutContactOutlined, DateRangeOutlined, Description, DescriptionOutlined, DocumentScannerOutlined, FlagCircleOutlined, FlagOutlined, HomeOutlined, List, ListAltOutlined, MoreVertOutlined, PercentOutlined, Person, Person2Outlined } from '@mui/icons-material';
import { DateCalendar } from '@mui/x-date-pickers';


const rows = [
    {
        id: 1,
        items: 'E-commerce Platform',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 50,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 2,
        items: 'Landing Page',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 56,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 3,
        items: 'Website Redesign',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 19,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 4,
        items: 'Ads',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 29,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 5,
        items: 'Landing Page',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 96,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 6,
        items: 'Landing Page',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 4,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 7,
        items: 'Mobile App',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 17,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 8,
        items: 'Website Redesign',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 46,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 9,
        items: 'Application',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 94,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 10,
        items: 'Application',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 98,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 11,
        items: 'Mobile App',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 74,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 12,
        items: 'Ads',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 87,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 13,
        items: 'Mobile App',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 36,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 14,
        items: 'E-commerce Platform',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 33,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 15,
        items: 'Ads',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 56,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 16,
        items: 'Landing Page',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 64,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 17,
        items: 'Landing Page',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 38,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 18,
        items: 'Application',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 68,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 19,
        items: 'Ads',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 91,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 20,
        items: 'Application',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 97,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 21,
        items: 'Website Redesign',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 67,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 22,
        items: 'Ads',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 7,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 23,
        items: 'E-commerce Platform',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 53,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 24,
        items: 'Landing Page',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 16,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 25,
        items: 'Website Redesign',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 72,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 26,
        items: 'Application',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 38,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 27,
        items: 'Landing Page',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 98,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 28,
        items: 'Ads',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 43,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 29,
        items: 'Application',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 70,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 30,
        items: 'Mobile App',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 30,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 31,
        items: 'Landing Page',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 93,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 32,
        items: 'Ads',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 72,
        deadline: '2023-12-31',
        status: 'Ongoing'
    },
      {
        id: 33,
        items: 'E-commerce Platform',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 40,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 34,
        items: 'Landing Page',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 79,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 35,
        items: 'Ads',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 71,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 36,
        items: 'Application',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 26,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 37,
        items: 'Mobile App',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 94,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 38,
        items: 'Landing Page',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 19,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 39,
        items: 'Landing Page',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 14,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 40,
        items: 'Website Redesign',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 79,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 41,
        items: 'Website Redesign',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 51,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 42,
        items: 'Ads',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 67,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 43,
        items: 'Website Redesign',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 79,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 44,
        items: 'Application',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 10,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 45,
        items: 'Ads',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 90,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 46,
        items: 'Website Redesign',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 62,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 47,
        items: 'E-commerce Platform',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 37,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 48,
        items: 'Ads',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 28,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 49,
        items: 'Website Redesign',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 4,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 50,
        items: 'Landing Page',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 64,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 51,
        items: 'Website Redesign',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 53,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 52,
        items: 'Website Redesign',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 57,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 53,
        items: 'Landing Page',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 58,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 54,
        items: 'Ads',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 25,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 55,
        items: 'Landing Page',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 99,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 56,
        items: 'Application',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 95,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 57,
        items: 'E-commerce Platform',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 1,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 58,
        items: 'Landing Page',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 76,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 59,
        items: 'E-commerce Platform',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 91,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 60,
        items: 'Mobile App',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 36,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 61,
        items: 'E-commerce Platform',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 3,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 62,
        items: 'Website Redesign',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 37,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 63,
        items: 'Application',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 71,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 64,
        items: 'E-commerce Platform',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 55,
       deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 65,
        items: 'Ads',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 84,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 66,
        items: 'Ads',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 78,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 67,
        items: 'E-commerce Platform',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 67,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 68,
        items: 'Landing Page',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 64,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 69,
        items: 'Website Redesign',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 40,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 70,
        items: 'Application',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 10,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 71,
        items: 'Landing Page',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 46,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 72,
        items: 'Mobile App',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 62,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 73,
        items: 'Application',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 99,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 74,
        items: 'E-commerce Platform',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 15,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 75,
        items: 'Landing Page',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 68,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 76,
        items: 'Ads',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 60,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 77,
        items: 'Mobile App',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 100,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 78,
        items: 'Landing Page',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 24,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 79,
        items: 'Landing Page',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 62,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 80,
        items: 'Mobile App',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 99,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 81,
        items: 'Landing Page',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 97,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 82,
        items: 'Ads',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 99,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 83,
        items: 'Application',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 6,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 84,
        items: 'Landing Page',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 5,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 85,
        items: 'Landing Page',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 5,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 86,
        items: 'Website Redesign',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 40,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 87,
        items: 'Application',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 40,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 88,
        items: 'Landing Page',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 76,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 89,
        items: 'Ads',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 54,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 90,
        items: 'Application',
        assignor: 'Jane Smith',
        department: 'Design Team',
        progressbar: 16,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 91,
        items: 'Ads',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 27,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 92,
        items: 'E-commerce Platform',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 60,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 93,
        items: 'E-commerce Platform',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 92,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 94,
        items: 'Mobile App',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 59,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 95,
        items: 'Application',
        assignor: 'Charlie Brown',
        department: 'Design Team',
        progressbar: 94,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 96,
        items: 'Landing Page',
        assignor: 'Bob Johnson',
        department: 'Design Team',
        progressbar: 26,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 97,
        items: 'Mobile App',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 33,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 98,
        items: 'Mobile App',
        assignor: 'Alice Williams',
        department: 'Design Team',
        progressbar: 40,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 99,
        items: 'Website Redesign',
        assignor: 'Emma Davis',
        department: 'Design Team',
        progressbar: 10,
        deadline: '2023-12-31',
        status: 'Ongoing'
      },
      {
        id: 100,
        items: 'Mobile App',
        assignor: 'John Doe',
        department: 'Design Team',
        progressbar: 42,
        deadline: '2023-12-31',
        status: 'Ongoing'
      }
    
    
]

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
        field: 'assignor', headerName: 'Assignor', width: 130, headerClassName: 'custom-header',
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
            <div style={{  display: 'flex', flexDirection: 'row', alignItems:'center', width: '100%' }}>
                <LinearProgress variant="determinate" value={params.value} style={{width:'100%'}}/>
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
        width: 164,
        headerClassName: 'custom-header',
        renderHeader: () => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                < MoreVertOutlined />
                <span>Action</span>
            </div>
        ),
        renderCell: () => (
            <EditIcon color="" style={{ cursor: 'pointer' }} />
        ),
    },
  
];



const Table = () => {
    return (
        <div style={{ height: 330, width: '80%', paddingLeft: '8rem', marginTop: '5rem' }}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </div>
    );
};

export default Table;
