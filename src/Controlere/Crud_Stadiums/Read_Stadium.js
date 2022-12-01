import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { Table,Button } from 'semantic-ui-react'

import {app} from '../../DatabaseConnection';
import React,{useState,useEffect} from 'react';
const db = getFirestore(app);

function Read_Stadiums(){
  const [stadioane, setStadioane] = useState([]);
  const fetchStadioane = async()=>{
    let response=collection(db, 'stadion');
    let data =await getDocs(response);
    
    data.docs.forEach(item=>{
      setStadioane([...stadioane, item.data()])
    })
  }
    useEffect(()=>{
      fetchStadioane();
    },[])
    console.log(stadioane);
    return(
        
    //   <div className="App">
    //   {
    //     stadioane && stadioane.map(blog=>{
    //       return(
    //         <div className="stadioane-container">
    //           <h4>{blog.adresa}</h4>
    //           <p>{blog.capacitate}</p>
    //           <p>{blog.denumire}</p>
    //           <p>{blog.tip_gazon}</p>
    //         </div>
    //       )
    //     })
    //   }
    // </div>

        
    <Table singleLine className='tabel'>
                <Table.Header className='tt1'>
                    <Table.Row>
                    
                        <Table.HeaderCell className='titlu'><button
              type="button"
            
            >Name</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
            
            >Capacity</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              
            >Surface</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
           
            >Address</button></Table.HeaderCell>
                        
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                
                {stadioane && stadioane.map((data) => {
     return (
       <Table.Row>
        
          <Table.Cell >{data.denumire}</Table.Cell>
          <Table.Cell >{data.capacitate}</Table.Cell>
          <Table.Cell >{data.tip_gazon}</Table.Cell>
          <Table.Cell >{data.adresa}</Table.Cell>
          
          

        </Table.Row>
   )})}
                </Table.Body>
            </Table>
    );
}

export default Read_Stadiums;
