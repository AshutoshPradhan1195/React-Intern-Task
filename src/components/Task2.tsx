import { customerDataType } from './assets/types';
import CustomerTable from './CustomerTable';

type myProps = {
    customerData:customerDataType[]
}

  export const Task2 = (props:myProps
    ) => {

        return(
            <div style={{display:'flex', height:"100vh", width:"100vw", justifyContent:"center", alignItems:"center"}}>
                <CustomerTable customerData={props.customerData} />
            </div>
        )
    }
    