import { render } from '@testing-library/react'
import React from 'react'
import DisplayList from './DisplayList'

describe("display delete and edut for each task",()=>{
    const items=[
        {
            name:"gsvdhgv",
            key:1
        }
    ]
    function deleteItem(val){
        setList(items.filter(function(value){
          return value.name!=val
      }))
      
      }
      function updateItem(val,key){
        
        
      }
    
    it("delete value",()=>{
        
        const comp=render(<DisplayList list={items} deleteItem={deleteItem} updateItem={updateItem}></DisplayList>)
        expect(comp.getByTestId("delete")).toHaveClass('delete')
    })
    it("update value",()=>{
        
        const comp=render(<DisplayList list={items} deleteItem={deleteItem} updateItem={updateItem}></DisplayList>)
        expect(comp.getByTestId("update")).toHaveClass("edit")
    })
})
