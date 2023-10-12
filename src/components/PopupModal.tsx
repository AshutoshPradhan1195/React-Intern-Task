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
      <Modal title="Customer Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <p>Address: {props.address}</p>

      </Modal>
    </>
  );
};

export default PopupModal;