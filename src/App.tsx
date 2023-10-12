import React from 'react';
import {Task2} from './components/Task2';
import { customerDataType } from './components/assets/types';
import CustomerTable from './components/CustomerTable';


const customerData:customerDataType[] = [
  {
    name:"Joseph Rice",
    email:"josephrice131@slingacademy.com",
    phone:"9839209988",
    address:"91773 Miller Shoal\nDiaztown, FL 38841",
    gender:"male",
    age:43,
  },
  {
    name:"Gary Moore",
    email:"garymoore386@slingacademy.com",
    phone:"9820193884",
    address:"6450 John Lodge\nTerriton, KY 95945",
    gender:"male",
    age:71,

  },
  {
    name:"John Walker",
    email:"johnwalker944@slingacademy.com",
    phone:"9809098877",
    address:"27265 Murray Island\nKevinfort, PA 63231",
    gender:"male",
    age:44,

  },
  {
    name:"Eric Carter",
    email:"ericcarter176@slingacademy.com",
    phone:"98765434455",
    address:"USNS Knight\nFPO AA 76532",
    gender:"male",
    age:38,

  },
  {
    name:"William Jackson",
    email:"williamjackson427@slingacademy.com",
    phone:"9808976545",
    address:"170 Jackson Loaf\nKristenland, AS 48876",
    gender:"male",
    age:58,

  },
  {
    name:"Nicole Jones",
    email:"nicolejones228@slingacademy.com",
    phone:"9090887799",
    address:"14354 Baker Harbor Apt. 017\nEricville, HI 11192",
    gender:"female",
    age:33,
  },
  {
    name:"David Davis",
    email:"daviddavis980@slingacademy.com",
    phone:"9076467788",
    address:"021 Katherine Mall\nJameston, DC 24685",
    gender:"male",
    age:59,

  },
  {
    name:"Jason Montgomery",
    email:"jasonmontgomery889@slingacademy.com",
    phone:"9645789933",
    address:"14657 Scott Loop Apt. 735\nPort Ashley, NH 34470",
    gender:"male",
    age:58,

  },
  {
    name:"Kent Weaver",
    email:"kentweaver695@slingacademy.com",
    phone:"9844412233",
    address:"6644 Mitchell Burg\nVictorhaven, KS 66356",
    gender:"male",
    age:61,
  },
  {
    name:"Darrell Dillon",
    email:"darrelldillon573@slingacademy.com",
    phone:"9083445566",
    address:"PSC 7267, Box 9911\nAPO AE 49343",
    gender:"male",
    age:50,
  }]


function App() {
  return (
    <div >
      <Task2 customerData={customerData}/>
      
    </div>
  );
}

export default App;
