import React, { useState } from 'react';
import { ConfigProvider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { customerDataType, myProps } from './assets/types';
import { FollowBtn } from './FollowBtn';
import { Modal } from 'antd';
import { Button, Space } from 'antd';


const CustomerTable = (props:myProps) => {

  const [customerData,setCustomerData] = useState(props.customerData)

  const onCellClick = (record:customerDataType) =>{
    setPopupData(record)
    setIsModalOpen(true)
    setIsUpdate(true)
  }
  const columns: ColumnsType<customerDataType> = [
  
    //added onCell onclickfor each column except button in order to not show popup when pressing clicking on follow button
    {
      title: 'Name',
      dataIndex: 'name',
      onCell : (record) => {
        return{
          onClick : () => {
            onCellClick(record)
          }
        }
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      onCell : (record) => {
        return{
          onClick : () => {
            onCellClick(record)
          }
        }
      }
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      onCell : (record) => {
        return{
          onClick : () => {
            onCellClick(record)
          }
        }
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      onCell : (record) => {
        
        return{
          onClick : () => {
            onCellClick(record)
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
    age:0,
    address:"",
    email:"",
    gender:"",
    phone:""

  })

  const handleUpdateOrAdd = () => {
    
    if(!isUpdate){
      if(popupData.email !== ""){
        customerData.push(popupData)
        const newData = customerData.map((data) => {
          return data
        })
        setCustomerData(newData)
      }
      
  
    }
    else{
      const newData = customerData.map((data) => {
        if(data.email === popupData.email){
          return popupData
        }
        else{
          return data
        }
      })
      setCustomerData(newData)

    }
  
  setIsModalOpen(false);

  };

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPopupData({...popupData, [event.target.name] : event.target.value})
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleDelete = () => {

      const newData = customerData.filter((data) => data.email !== popupData.email)
      setCustomerData(newData)
      setIsModalOpen(false);
  };

  const [isUpdate,setIsUpdate] = useState(true)

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
        
      <Table columns={columns} dataSource={customerData} rowKey={(record) => record.email} size="small" pagination={{
        position:["bottomCenter"]
      }}/>

      </ConfigProvider>

      <Modal title= {isUpdate? "Update Customer Details" : "Add New Customer"} open={isModalOpen} onCancel={handleCancel} footer={[
        <Space wrap>
          <Button onClick={isUpdate? handleDelete : handleCancel} >
              {isUpdate? "Delete" : "Cancel"}
          </Button>
          <Button type="primary" onClick={handleUpdateOrAdd}>
            {isUpdate? "Update" : "Add"}
          </Button>
        </Space>
      ]} width={"35%"}>

        <div className='popup'>
          <div>
            <label htmlFor="name">Name</label>
            <input type='text' value={popupData.name} id='name' name='name' placeholder='Full Name' onChange={handleChange}/> 
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input type='number' value={popupData.age} id='age' name='age' min={1} placeholder='Age'  onChange={handleChange}/> 
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <input type='text' value={popupData.gender} id='gender' name='gender' placeholder='Gender'  onChange={handleChange}/> 
          </div>
          
          <div>
            <label htmlFor="phone">Phone No</label>
            <input type='text' value={popupData.phone} id='phone' name='phone' placeholder='Phone Number'  onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <input type='text' value={popupData.email} id='email' name='email' placeholder='Email' readOnly={isUpdate? true : false} onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="address">Address</label>
            <input type='text' value={popupData.address} id='address' name='address' placeholder='Address' onChange={handleChange}/>
          </div>

        </div>
        
        
      </Modal>

    </div>

  </>

)};

export default CustomerTable;