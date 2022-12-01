import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { Table,Button } from 'semantic-ui-react'

import {app} from '../../DatabaseConnection';
import React,{useState,useEffect} from 'react';
const db = getFirestore(app);

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
    //console.log(sortedItems)
    return { items: sortedItems, requestSort, sortConfig };
  };


function Read_Stadiums(){
  const [stadioane, setStadioane] = useState([]);
  
  const fetchStadioane = async()=>{
    let response=collection(db, 'stadion');
    let data =await getDocs(response).then((querySnapshot) => {

      querySnapshot.forEach(element => {
          var date = element.data();
          setStadioane(arr => [...arr , date]);

      });
  });

  }

    useEffect(()=>{
      fetchStadioane();
    },[])
    
    const { items, requestSort, sortConfig } = useSortableData(stadioane);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
        };

console.log(stadioane)
    return(
        
   
        <Table singleLine className='tabel'>
        <Table.Header className='tt1'>
            <Table.Row>
            
            
                <Table.HeaderCell className='titlu'><button
      type="button"
      onClick={() => requestSort('name')}
      className={getClassNamesFor('name')}
    >Name</button></Table.HeaderCell>
                <Table.HeaderCell className='titlu'><button
      type="button"
      onClick={() => requestSort('capacity')}
      className={getClassNamesFor('capacity')}
    >Capacity</button></Table.HeaderCell>
                <Table.HeaderCell className='titlu'><button
      type="button"
      onClick={() => requestSort('surface')}
      className={getClassNamesFor('surface')}
    >Surface</button></Table.HeaderCell>
                <Table.HeaderCell className='titlu'><button
      type="button"
      onClick={() => requestSort('address')}
      className={getClassNamesFor('address')}
    >Address</button></Table.HeaderCell>
                
                

            </Table.Row>
        </Table.Header>

        <Table.Body>
        
        {stadioane && stadioane.map((data) =>  {
return (
<Table.Row key = {data.denumire}>

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
