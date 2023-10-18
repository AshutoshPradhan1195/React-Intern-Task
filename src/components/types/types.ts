export type customerDataType = {
    name:string
    email:string
    phone:string
    address:string
    gender:string
    age:number
  }

export  type myProps = {
    customerData:customerDataType[]
}

export type formType = {
  email:string | null
  isUpdate:boolean
}

export type FieldType = {
  name: string;
  age: number;
  gender: string;
  phone:string;
  email:string;
  address:string;
};

export type bearStorageType = {
  lightTheme:boolean,
  setTheme: (state:boolean) => void
}