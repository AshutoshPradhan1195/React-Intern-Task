
import { myProps } from './assets/types';
import CustomerTable from './CustomerTable';


  export const Task = (props:myProps
    ) => {


        return(
            <div style={{display:'flex',width:"100vw", height:"100vh",justifyContent:"center", alignItems:"center"}}>

                
                <CustomerTable customerData={props.customerData}/>                
                
            </div>
        )
    }
    