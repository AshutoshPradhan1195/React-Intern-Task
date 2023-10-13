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
      customerData.push(popupData)
    }
      const newData = customerData.map((data) => {
      if(data.email === popupData.email){
        return data
      }
      else{
        return data
      }})
      console.log(newData)
      setCustomerData(newData)

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
      <h1 onClick={addCustomerPopup}>Customers</h1>
      <ConfigProvider theme={{components: {Table: 
        {
          cellPaddingBlockSM:10,
          cellPaddingInlineSM:10,
          borderRadius:10,
          footerBg:"red"
        }}
      }}>
        
      <Table columns={columns} dataSource={customerData} rowKey={(record) => record.email} size="small" style={{backgroundColor:"white"}}/>

      </ConfigProvider>

      <Modal title= {isUpdate? "Update Customer Details" : "Add New Customer"} open={isModalOpen} onOk={handleUpdateOrAdd} okText={isUpdate? "Update" : "Add"} onCancel={handleCancel}  width={"35%"}>

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
        
        <Space wrap style={{display:"flex", justifyContent:"end", alignItems:"end",}}>
                <Button onClick={() => {
                    handleDelete()
                }} style={{marginTop:"10px", textAlign:"right", display:isUpdate? "block" : "none"}}>
                    Delete
                </Button>
            </Space>
      </Modal>

    </div>

  </>

)};

export default CustomerTable;