import { Button, Form, Input, Space } from "antd";
import { FieldType, formType } from "../types/types";
import { useEffect, useState } from "react";
import { addCustomerData, customerData, deleteCustomerData, editCustomerData } from "../pages/customerProfiles";
import { useNavigate } from "react-router";

export const CustomerForm:React.FC<formType>= ({email,isUpdate}) => {
    
    //getting customer data by email
    const[editCustomer] = useState(customerData.filter((data) => data.email === email)[0])

    const navigate = useNavigate()
  
    const [form] = Form.useForm<FieldType>()
    
    const onFinish = () => {
  
      if(isUpdate){
        onEdit()
        navigate("/customerProfiles")
        
      }
      if(!isUpdate){
        onAdd()
        navigate("/customerProfiles")
      }
  
    };
  
    
    useEffect(() => {
        form.setFieldsValue(editCustomer)
    },[editCustomer])
  
    const onAdd = () => {
      addCustomerData(form.getFieldsValue())
    }
  
    const onEdit = () => {
      editCustomerData(form.getFieldsValue())
      
    };
  
    const deleteOrReset = () => {
      if(isUpdate){
        deleteCustomerData(form.getFieldValue("email"))
        navigate("/customerProfiles")
      }
      else{
        form.resetFields()
      }
    }
  
      return(
  
          <Form
            form={form}
            
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 23 }}
            layout='vertical'
            className="custForm"
            style={{ display:"flex", flexDirection:"column", color:"white"}}
            onFinish={onFinish}
          >
            <Form.Item
              label="Full Name"
              name="name"
            >
              <Input placeholder='Full Name'/>
            </Form.Item>
  
            <Form.Item
              label="Age"
              name="age"
            >
              <Input placeholder='Age'/>
            </Form.Item>
  
            <Form.Item
              label="Gender"
              name="gender"
            >
              <Input placeholder='Gender' />
            </Form.Item>
  
            <Form.Item
              label="Phone No"
              name="phone"
            >
              <Input placeholder='Phone Number'/>
            </Form.Item>
  
            <Form.Item
              label="Email"
              name="email"
              rules={[{required:true, message:"Email Address is required"}]}
            >
              <Input placeholder='Email Address' readOnly={isUpdate}/>
            </Form.Item>
  
            <Form.Item
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
          
      )
  
  } 