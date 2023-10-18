import { NavigationBar } from "../assets/NavigationBar";
import { CustomerForm } from "../assets/CustomerForm";

const AddCustomer = () => {

    return(
        <div>
            <NavigationBar/>
            <div style={{padding:"0px 5% 0px 6%"}}>
                <CustomerForm email={null} isUpdate={false}/>
        </div>
        </div>
        
    )  
}

export default AddCustomer;