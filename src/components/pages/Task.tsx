import { myProps } from '../types/types';
import CustomerTable from '../assets/CustomerTable';


  export const Task = (props:myProps
    ) => {


        return(
            <div style={{display:'flex',width:"100%",justifyContent:"center", alignItems:"center"}}>
                <CustomerTable customerData={props.customerData}/>                      
            </div>
        )
    }
    