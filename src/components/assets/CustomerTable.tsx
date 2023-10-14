import React, { useState } from 'react';
import { ConfigProvider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { customerDataType, myProps } from './types/types';
import { Modal } from 'antd';

const CustomerTable:React.FC<myProps> = ({customerData}) => {

  const openModal = (data:customerDataType) => {
    setPopupData(data)
    setIsModalOpen(true)
  }

  const columns: ColumnsType<customerDataType> = [
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
  };
  
  return(
  <>
    <ConfigProvider theme={{components: {Table: 
      {
        cellPaddingBlockMD:15,
        cellPaddingInlineMD:30,
        borderRadius:0
      }}
    }}> 
      
      <Table columns={columns}  dataSource={customerData} rowKey={(record) => record.email} pagination={false} size="middle"/>

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
)};

export default CustomerTable;