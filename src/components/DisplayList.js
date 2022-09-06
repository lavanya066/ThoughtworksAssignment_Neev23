import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Display from './Display.css';
function DisplayList(props) {
    //var l=props.list
    const [l,setl]=useState([...props.list])
    
    const [form,setForm]=useState("")
    
    useEffect(()=>{
        setForm(
            
                <div>
             {
                 props.list.map((val)=>{
                     return(
                         <div className='list'>
                             <h3>{val.name}</h3>
                             
                             <div>
                                 <DeleteIcon data-testid="delete" className='delete' onClick={(e)=>{
                                    
                                     
                                    props.deleteItem(val.name)
                                     
                                     
                                 }
                                     
                                 }></DeleteIcon>
                             <EditIcon data-testid="update" className="edit" onClick={(e)=>{
                                props.updateItem(val.name,val.key)
                             }}></EditIcon>
                                 </div>
                             
                             </div>
                     )
                 })
                 
             }
             </div>
         
             )
           
        
        
        
    },[props.list])

  return (
    
       <div>
        {form}

       </div> 

    
  
  )
}

export default DisplayList