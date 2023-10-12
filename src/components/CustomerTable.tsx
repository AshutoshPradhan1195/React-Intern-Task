import React from 'react';
import { ConfigProvider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { customerDataType } from './assets/types';
import PopupModal from './PopupModal';
import { render } from '@testing-library/react';

type myProps = {
    customerData:customerDataType[]
}

const columns: ColumnsType<customerDataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },

  
];


const CustomerTable = (props:myProps) => (
  <>
        <ConfigProvider
      theme={{
        components: {
          Table: {
            cellPaddingBlockMD:15,
            cellPaddingInlineMD:30,
            borderRadius:0
          },
        },
      }}
    >
      
      <Table columns={columns}    dataSource={props.customerData} rowKey={(record) => record.email} pagination={false} size="middle" onRow={(record, rowIndex) => {
        return{
            onClick : event => {
                render(
                    <PopupModal name={record.name} age={record.age} address={record.address} email={record.email} phone={record.phone} gender={record.gender}/>
                )
            }
        }
      }}/>

    </ConfigProvider>

  </>

);

export default CustomerTable;