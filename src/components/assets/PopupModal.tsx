import { Button, Form, Input, Modal, Space } from "antd"
import { popupModalType } from "../types/types"
import { useEffect } from "react";
import {  addCustomer, deleteCustomer, editCustomer } from '../pages/Task'

export const PopupModal:React.FC<popupModalType>= ({data, isModalOpen, isUpdate, handleCancel}) => {
    
  type FieldType = {
    name: string;
    age: number;
    gender: string;
    phone:string;
    email:string;
    address:string;
  };

  const [form] = Form.useForm()
  
  const onFinish = () => {

    if(isUpdate){
      onEdit()
    }
    if(!isUpdate){
      onEdit()
      onAdd()
    }

    handleCancel()

  };

  
  useEffect(() => {
      form.setFieldsValue(data)
  },[data])

  const onAdd = () => {
    addCustomer(form.getFieldsValue())
  }

  const onEdit = () => {
    editCustomer(form.getFieldsValue())
    
  };

  const deleteOrReset = () => {
    if(isUpdate){
      deleteCustomer(form.getFieldValue("email"))
      handleCancel()
    }
    else{
      form.resetFields()
    }
  }

    return(

      <Modal title= {isUpdate? "Update Customer Details" : "Add New Customer"} open={isModalOpen} onCancel={handleCancel} footer={[
      ]} width={"35%"}>

        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 23 }}
          layout='vertical'
          style={{ display:"flex", flexDirection:"column" }}
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            label="Full Name"
            name="name"
          >
            <Input placeholder='Full Name'/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Age"
            name="age"
          >
            <Input placeholder='Age'/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Gender"
            name="gender"
          >
            <Input placeholder='Gender' />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone No"
            name="phone"
          >
            <Input placeholder='Phone Number'/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{required:true, message:"Email Address is required"}]}
          >
            <Input placeholder='Email Address' readOnly={isUpdate}/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Address"
            name="address"
          >
            <Input placeholder='Address '/>
          </Form.Item>

          <Form.Item wrapperCol={{span: 16 }}>

          <Space wrap>
            <Button type="primary" htmlType="submit" >
                {isUpdate? "Update" : "Add"}
              </Button>

              <Button onClick={() => {
                deleteOrReset()
              }}>
                  {isUpdate? "Delete" : "Reset"}
              </Button>
          </Space>
            
          </Form.Item>

        </Form>        
        
      </Modal>
    )

} 