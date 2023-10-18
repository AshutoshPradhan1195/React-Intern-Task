import React, { useEffect, useState } from 'react';
import { ConfigProvider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { customerDataType, } from '../types/types';
import { FollowBtn } from './FollowBtn';
import { PopupModal } from './PopupModal';
import { customerData } from '../pages/Task';


const CustomerTable : React.FC = () => {


  const [tableData,setTableData] = useState(customerData)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate,setIsUpdate] = useState(true)


  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const openModal = (record:customerDataType) =>{
    setPopupData(record)
    setIsModalOpen(true)
    setIsUpdate(true)
  }
  const columns: ColumnsType<customerDataType> = [
  
    //added onCell onclickfor each column except button in order to not show popup when pressing clicking on follow button
    {
      title: 'Name',
      dataIndex: 'name',
      onCell: (record:customerDataType) => {
        return{
          onClick: () => {
            openModal(record)
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
            openModal(record)
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
            openModal(record)
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
            openModal(record)
          }
        }
      }
    },
    {
      title:"",
      render: () => (
        <FollowBtn styles={{width:"100px"}} />
      ), 
      width:"150px"
    }
  ];
  
  const [popupData, setPopupData] = useState({
    name:"",
    age:0,
    address:"",
    email:"",
    gender:"",
    phone:""

  })

  useEffect(() => {
    setTableData(customerData)    
  },[customerData,isModalOpen])
  


  const addCustomerPopup = () => {
    setIsUpdate(false)
    setPopupData(
      {name:"",
      age:0,
      address:"",
      email:"",
      gender:"",
      phone:""
    })
    setIsModalOpen(true)
  }

  return(
  <>
    <div >
      <h1 className='addCustomer' onClick={addCustomerPopup}>Customers+</h1>
      <ConfigProvider theme={{components: {Table: 
        {
          cellPaddingBlockSM:10,
          cellPaddingInlineSM:15,      
          headerBorderRadius:0,
          rowHoverBg:"#efefef",
        }}
      }}>
        
      <Table columns={columns} dataSource={tableData} rowKey={(record) => record.email} size="small" pagination={{
        position:["bottomCenter"]
      }}/>

      </ConfigProvider>

      <PopupModal data={popupData} isModalOpen={isModalOpen} isUpdate={isUpdate} handleCancel={handleCancel} />
    </div>

  </>

)};

export default CustomerTable;