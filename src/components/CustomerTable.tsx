import React from 'react';
import { ConfigProvider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { customerDataType, myProps } from './assets/types';
import PopupModal from './PopupModal';
import { render } from '@testing-library/react';
import { FollowBtn } from './FollowBtn';



const columns: ColumnsType<customerDataType> = [
  
  {
    title: 'Name',
    dataIndex: 'name',
    onCell : (record,rowIndex) => {
      return{
        onClick : () => {
          render( 
            <PopupModal name={record.name} age={record.age} address={record.address} email={record.email} phone={record.phone} gender={record.gender}/>
          )
        }
      }
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    onCell : (record,rowIndex) => {
      return{
        onClick : () => {
          render( 
            <PopupModal name={record.name} age={record.age} address={record.address} email={record.email} phone={record.phone} gender={record.gender}/>
          )
        }
      }
    }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    onCell : (record,rowIndex) => {
      return{
        onClick : () => {
          render( 
            <PopupModal name={record.name} age={record.age} address={record.address} email={record.email} phone={record.phone} gender={record.gender}/>
          )
        }
      }
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onCell : (record,rowIndex) => {
      return{
        onClick : () => {
          render( 
            <PopupModal name={record.name} age={record.age} address={record.address} email={record.email} phone={record.phone} gender={record.gender}/>
          )
        }
      }
    }
  },
  {
    title:"",
    render: () => (
      <FollowBtn styles={{width:"100px"}} />
    ), 
    width:"150px"
  }
];


const CustomerTable = (props:myProps) => (
  <>
    <ConfigProvider theme={{components: {Table: 
      {
        cellPaddingBlockMD:10,
        cellPaddingInlineMD:30,
        borderRadius:0
      }}
    }}>
      
      <Table columns={columns} dataSource={props.customerData} rowKey={(record) => record.email} pagination={false} size="middle"/>

    </ConfigProvider>

  </>

);

export default CustomerTable;