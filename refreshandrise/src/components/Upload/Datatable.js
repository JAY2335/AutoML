import React,{useState} from 'react'
import DataTable from 'react-data-table-component';
import {result,header} from '../Upload/uploadtwo'

function Datatable() {
    const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  if(0){
      console.log("checked")
    const columns = header.map(c => ({
        name: c,
        selector: c,
      }));
      setColumns(columns)


  }
    return (

        <div>
            <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
      />
            
        </div>
    )
}

export default Datatable
