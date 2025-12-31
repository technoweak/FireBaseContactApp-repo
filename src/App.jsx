import Navbar from "./components/navbar"
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import {collection, doc, getDoc, getDocs, onSnapshot, snapshotEqual} from "firebase/firestore";
import { db } from "./config/firebase";
import {HiOutlineUserCircle} from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import ContactCard from "./Components/ContactCard";
import Modal from "./Components/Modal";
import AddAndUpdateContact from "./Components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./Components/NotFoundContact";
const App = () => {
  const [contacts,setContacts]=useState([]);
 const{isOpen,onClose,onOpen}=useDisclose();
  useEffect(()=>{
    const getContacts=async()=>{
      try {
        const contactsRef=collection(db,"contacts");
        onSnapshot(contactsRef,(snapshot)=>{
           const contactList=snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data(),
          }
        });
        setContacts(contactList);
        return contactList;
        })
       
      } catch (error) {

      }
    }
    getContacts();
  },[])
  const filterContacts=(e)=>{
      const value=e.target.value;
       const contactsRef=collection(db,"contacts");
       onSnapshot(contactsRef,(snapshot)=>{
           const contactList=snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data(),
          }
        });
        const filteredContacts=contactList.filter(contact=> 
          contact.name.toLowerCase().includes(value.toLowerCase())
        )
        setContacts(filteredContacts);
        return contactList;
        })
       
  }
  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar/>
     <div className="flex gap-2">
       <div className="relative flex items-center flex-grow">
        <FiSearch className=" ml-1 text-white text-3xl absolute"/>
        <input onChange={filterContacts} type="text" className="bg-transparent border-white border rounded-md h-10 flex-grow text-white pl-9" />
      </div>
     
        <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />
      
     </div>
     <div className="mt-4 gap-3 flex flex-col">
      {contacts.length<=0?
      <NotFoundContact/>
      :
        contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))
      }
     </div>
    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    <ToastContainer
    position="bottom-center"
    />
    </>
    
  )
}

export default App
