import { NavigationBar } from "../assets/NavigationBar";
import { CustomerForm } from "../assets/CustomerForm";

const AddCustomer = () => {

    return(
        <div>
            <NavigationBar/>
            <div className="pl-[6%] pr-[5%] py-0">
                <CustomerForm email={null} isUpdate={false}/>
            </div>
        </div>
        
    )  
}

export default AddCustomer;