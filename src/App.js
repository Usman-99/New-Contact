import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactCard from './components/ContactCard';
import {useState} from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from 'react';

function App() {
  let LOCAL_STORAGE_KEY="CONTACTS";

  const[list,setList]=useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[]);
  let addToList=(name,gender,email)=>{
    let newList=[...list];
    newList.push({
      id:uuid(),
      name:name,
      gender:gender,
      email:email
    })
    setList(newList)
  }
  let removeContact=(id)=>{
    setList(list.filter((curentid)=>{
      return curentid.id!==id;
    }))
  }
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(list))
  },[list]);
  return (
<>
<Header/>
<AddContact addToList={addToList}/>
<ContactCard contactList={list} removeContact={removeContact}/>
</>
  );
}

export default App;
