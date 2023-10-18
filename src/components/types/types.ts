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

export type popupModalType = {
  data:customerDataType
  isModalOpen:boolean
  isUpdate:boolean
  handleCancel:any
}