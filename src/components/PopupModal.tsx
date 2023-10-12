import React, { useState } from 'react';
import { Modal } from 'antd';
import { customerDataType } from './assets/types';

const PopupModal = (props:customerDataType) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Customer Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={"35%"}>

        <div className='popup'>
          <div>
            <label htmlFor="name">Name</label>
            <input type='text' value={props.name} id='name' placeholder='Full Name' readOnly/> 
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input type='number' value={props.age} id='age' min={1} placeholder='Age' readOnly/> 
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <input type='text' value={props.gender} id='gender' placeholder='Gender' readOnly/> 
          </div>
          
          <div>
            <label htmlFor="phone">Phone No</label>
            <input type='text' value={props.phone} id='phone' placeholder='Phone Number' readOnly/>
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <input type='text' value={props.email} id='email' placeholder='Email' readOnly/>
          </div>
          
          <div>
            <label htmlFor="address">Address</label>
            <input type='text' value={props.address} id='address' placeholder='Address' readOnly/>
          </div>
        </div>
        
        
      </Modal>
    </>
  );
};

export default PopupModal;