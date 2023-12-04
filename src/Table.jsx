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
      items: 'Item 1',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 65,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 2,
      items: 'Item 2',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 86,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 3,
      items: 'Item 3',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 21,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 4,
      items: 'Item 4',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 42,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 5,
      items: 'Item 5',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 35,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 6,
      items: 'Item 6',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 88,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 7,
      items: 'Item 7',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 88,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 8,
      items: 'Item 8',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 68,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 9,
      items: 'Item 9',
      assignor: 'John Doe',
      department: 'Design Team',
   progressbar: 70,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 10,
      items: 'Item 10',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 45,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 11,
      items: 'Item 11',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 41,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 12,
      items: 'Item 12',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 22,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 13,
      items: 'Item 13',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 92,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 14,
      items: 'Item 14',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 39,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 15,
      items: 'Item 15',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 72,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 16,
      items: 'Item 16',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 70,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 17,
      items: 'Item 17',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 13,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 18,
      items: 'Item 18',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 13,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 19,
      items: 'Item 19',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 27,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 20,
      items: 'Item 20',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 74,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 21,
      items: 'Item 21',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 59,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 22,
      items: 'Item 22',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 3,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 23,
      items: 'Item 23',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 11,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 24,
      items: 'Item 24',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 30,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 25,
      items: 'Item 25',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 5,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 26,
      items: 'Item 26',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 62,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 27,
      items: 'Item 27',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 58,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 28,
      items: 'Item 28',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 33,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 29,
      items: 'Item 29',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 93,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 30,
      items: 'Item 30',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 20,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 31,
      items: 'Item 31',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 22,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 32,
      items: 'Item 32',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 26,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 33,
      items: 'Item 33',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 29,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 34,
      items: 'Item 34',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 85,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 35,
      items: 'Item 35',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 70,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 36,
      items: 'Item 36',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 97,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 37,
      items: 'Item 37',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 57,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 38,
      items: 'Item 38',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 46,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 39,
      items: 'Item 39',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 12,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 40,
      items: 'Item 40',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 62,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 41,
      items: 'Item 41',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 21,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 42,
      items: 'Item 42',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 64,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 43,
      items: 'Item 43',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 16,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 44,
      items: 'Item 44',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 27,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 45,
      items: 'Item 45',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 29,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 46,
      items: 'Item 46',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 40,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 47,
      items: 'Item 47',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 64,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 48,
      items: 'Item 48',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 55,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 49,
      items: 'Item 49',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 93,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 50,
      items: 'Item 50',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 11,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 51,
      items: 'Item 51',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 34,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 52,
      items: 'Item 52',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 36,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 53,
      items: 'Item 53',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 57,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 54,
      items: 'Item 54',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 3,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 55,
      items: 'Item 55',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 32,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 56,
      items: 'Item 56',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 21,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 57,
      items: 'Item 57',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 35,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 58,
      items: 'Item 58',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 65,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 59,
      items: 'Item 59',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 36,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 60,
      items: 'Item 60',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 14,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 61,
      items: 'Item 61',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 87,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 62,
      items: 'Item 62',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 12,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 63,
      items: 'Item 63',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 63,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 64,
      items: 'Item 64',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 82,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 65,
      items: 'Item 65',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 33,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 66,
      items: 'Item 66',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 60,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 67,
      items: 'Item 67',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 72,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 68,
      items: 'Item 68',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 35,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 69,
      items: 'Item 69',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 3,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 70,
      items: 'Item 70',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 67,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 71,
      items: 'Item 71',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 44,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 72,
      items: 'Item 72',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 52,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 73,
      items: 'Item 73',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 77,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 74,
      items: 'Item 74',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 8,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 75,items: 'Item 75',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 42,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 76,
      items: 'Item 76',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 43,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 77,
      items: 'Item 77',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 87,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 78,
      items: 'Item 78',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 51,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 79,
      items: 'Item 79',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 84,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 80,
      items: 'Item 80',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 29,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 81,
      items: 'Item 81',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 34,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 82,
      items: 'Item 82',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 64,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 83,
      items: 'Item 83',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 88,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 84,
      items: 'Item 84',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 93,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 85,
      items: 'Item 85',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 20,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 86,
      items: 'Item 86',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 79,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 87,
      items: 'Item 87',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 43,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 88,
      items: 'Item 88',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 45,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 89,
      items: 'Item 89',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 61,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 90,
      items: 'Item 90',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 10,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 91,
      items: 'Item 91',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 95,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 92,
      items: 'Item 92',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 80,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 93,
      items: 'Item 93',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 43,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 94,
      items: 'Item 94',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 56,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 95,
      items: 'Item 95',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 92,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 96,
      items: 'Item 96',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 100,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 97,
      items: 'Item 97',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 89,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 98,
      items: 'Item 98',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 61,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 99,
      items: 'Item 99',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 86,
      deadline: '2023-12-31',
      status: 'Ongoing'
    },
    {
      id: 100,
      items: 'Item 100',
      assignor: 'John Doe',
      department: 'Design Team',
      progressbar: 91,
      deadline: '2023-12-31',
      status: 'Ongoing'
    }
  
  
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
        renderCell: () => (
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
