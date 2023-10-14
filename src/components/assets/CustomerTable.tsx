import React, { useState } from 'react';
import { ConfigProvider, Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { customerDataType, myProps } from './types/types';
import { FollowBtn } from './FollowBtn';

const CustomerTable = (props:myProps) => {

  const openModal = (data:customerDataType) => {
    setPopupData(data)
    setIsModalOpen(true)
  }

  const columns: ColumnsType<customerDataType> = [
  
    //added onCell onclickfor each column except button in order to not show popup when pressing clicking on follow button
    {
      title: 'Name',
      dataIndex: 'name',
      onCell: (record) => {
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
      onCell: (record) => {
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
      onCell: (record) => {
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
      onCell: (record) => {
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
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupData, setPopupData] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    gender:"",
    age:0
  })

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return(
  <>
    <ConfigProvider theme={{components: {Table: 
      {
        cellPaddingBlockMD:10,
        cellPaddingInlineMD:30,
        borderRadius:0
      }}
    }}>
      
      <Table columns={columns} dataSource={props.customerData}  rowKey={(record) => record.email} pagination={false} size="middle"/>

    </ConfigProvider>

    <Modal title="Customer Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Name : {popupData.name}</p>
        <p>Age : {popupData.age}</p>
        <p>Gender: {popupData.gender}</p>
        <p>Email: {popupData.email}</p>
        <p>Phone: {popupData.phone}</p>
        <p>Address: {popupData.address}</p>
    </Modal>

  </>
  )
};

export default CustomerTable;