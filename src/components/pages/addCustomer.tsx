import { useState } from "react";
import { NavigationBar } from "../assets/NavigationBar";
import { addCustomerData } from "./customerProfiles";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

const AddCustomer = () => {

    const navigate = useNavigate()

    const [newCust,setNewCust] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        gender:"",
        age:0,
    })

    const addCustomer = () => {
        console.log(addCustomerData(newCust))
        navigate("/customerProfiles")
    }

    const clear = () => {
        setNewCust({
            name:"",
            email:"",
            phone:"",
            address:"",
            gender:"",
            age:0,
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewCust({...newCust, [event.target.name] : event.target.value})
    }

    return(
        <div>
            <NavigationBar/>
            <div style={{padding:"0px 5% 0px 6%"}}>
                <div className='popup'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type='text' value={newCust.name} id='name' name='name' placeholder='Full Name' onChange={handleChange}/> 
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <input type='number' value={newCust.age} id='age' name='age' min={1} placeholder='Age'  onChange={handleChange}/> 
                    </div>

                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input type='text' value={newCust.gender} id='gender' name='gender' placeholder='Gender'  onChange={handleChange}/> 
                    </div>
                    
                    <div>
                        <label htmlFor="phone">Phone No</label>
                        <input type='text' value={newCust.phone} id='phone' name='phone' placeholder='Phone Number'  onChange={handleChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type='text' value={newCust.email} id='email' name='email' placeholder='Email' onChange={handleChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type='text' value={newCust.address} id='address' name='address' placeholder='Address' onChange={handleChange}/>
                    </div>

                    <Space className="editAndAddBtn">
                        <Button type="primary" onClick={addCustomer}>Add</Button>
                        <Button type="primary" onClick={clear}>Clear</Button>
                    </Space>

                </div>          

            </div>
        </div>
        
    )  
}

export default AddCustomer;