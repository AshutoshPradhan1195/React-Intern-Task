import { ConfigProvider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { customerDataType, myProps } from '../types/types';
import { FollowBtn } from './FollowBtn';
import { useNavigate } from 'react-router-dom';


const CustomerTable : React.FC<myProps> = ({customerData}) => {

  const navigate = useNavigate()
  const columns: ColumnsType<customerDataType> = [
  
    //onclick on row redirects to edit page with email as a param in Url
    {
      title: 'Name',
      dataIndex: 'name',
      onCell: (record:customerDataType) => {
        return{
          onClick: () => {
            navigate(`/customerProfiles/edit?email=${record.email}`)
          }
        }
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      onCell: (record:customerDataType) => {
        return{
          onClick: () => {
            navigate(`/customerProfiles/edit?email=${record.email}`)
          }
        }
      }
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      onCell: (record:customerDataType) => {
        return{
          onClick: () => {
            navigate(`/customerProfiles/edit?email=${record.email}`)
          }
        }
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      onCell: (record:customerDataType) => {
        return{
          onClick: () => {
            navigate(`/customerProfiles/edit?email=${record.email}`)
          }
        }
      }
    },
    {
      title:"",
      render: () => (
        <FollowBtn />
      ), 
      width:"150px"
    },
  ];

  return(
  <>
    <div>
      <h2 className='addCustomer' onClick={() =>navigate("/customerProfiles/create")}>Customers+</h2>
      <ConfigProvider theme={{components: {Table: 
        {
          cellPaddingBlockSM:10,
          cellPaddingInlineSM:15,      
          headerBorderRadius:0,
          headerBg:"rgb(218, 218, 218)",
          rowHoverBg:"#efefef",
        }}
      }}>
        
      <Table columns={columns} dataSource={customerData} rowKey={(record) => record.email} size="small" pagination={{
        position:["bottomCenter"]
      }}/>

      </ConfigProvider>

    </div>

  </>

)};

export default CustomerTable;