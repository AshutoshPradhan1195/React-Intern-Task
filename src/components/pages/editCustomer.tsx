import { useState } from "react"
import { customerData, deleteCustomerData, editCustomerData } from "./customerProfiles"
import { NavigationBar } from "../assets/NavigationBar"
import { useNavigate } from "react-router-dom"
import { Button, Space } from 'antd';


const EditCustomer = () => {

    //getting email from url
    const searchParams = new URLSearchParams(window.location.search)
    const email = searchParams.get("email")
    const navigate = useNavigate()


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditCustomer({...editCustomer, [event.target.name] : event.target.value})
    }

    const editData = () => {
        editCustomerData(editCustomer)
        navigate("/customerProfiles")
    }
    
    const deleteData = () => {
        deleteCustomerData(editCustomer.email)
        navigate("/customerProfiles")

    }
    
    //getting customer data by email
    const[editCustomer,setEditCustomer] = useState(customerData.filter((data) => data.email === email)[0])

    console.log(email)
    return(
        <div>
            <NavigationBar/>
            <div style={{padding:"0px 5% 0px 6%"}}>
                <div className='popup'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type='text' value={editCustomer.name} id='name' name='name' placeholder='Full Name' onChange={handleChange}/> 
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <input type='number' value={editCustomer.age} id='age' name='age' min={1} placeholder='Age'  onChange={handleChange}/> 
                    </div>

                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input type='text' value={editCustomer.gender} id='gender' name='gender' placeholder='Gender'  onChange={handleChange}/> 
                    </div>
                    
                    <div>
                        <label htmlFor="phone">Phone No</label>
                        <input type='text' value={editCustomer.phone} id='phone' name='phone' placeholder='Phone Number'  onChange={handleChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type='text' value={editCustomer.email} id='email' name='email' placeholder='Email' readOnly/>
                    </div>
                    
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type='text' value={editCustomer.address} id='address' name='address' placeholder='Address' onChange={handleChange}/>
                    </div>

                    <Space className="editAndAddBtn">
                        <Button type="primary" onClick={editData}>Edit</Button>
                        <Button type="primary" onClick={deleteData}>Delete</Button>
                    </Space>


                </div>          

            </div>
        </div>
    )

}

export default EditCustomer