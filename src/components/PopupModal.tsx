import React, { useState } from 'react';
import { Modal } from 'antd';
import { customerDataType } from './assets/types';

export const PopupModal = (props:customerDataType) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [popupData, setPopupData] = useState(props)

  const handleOk = () => {

  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPopupData({...popupData, [event.target.name] : event.target.value})
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Customer Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={"35%"}>

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
            <input type='text' value={popupData.email} id='email' name='email' placeholder='Email' readOnly/>
          </div>
          
          <div>
            <label htmlFor="address">Address</label>
            <input type='text' value={popupData.address} id='address' name='address' placeholder='Address' onChange={handleChange}/>
          </div>

        </div>
        
        
      </Modal>
    </>
  );
};

