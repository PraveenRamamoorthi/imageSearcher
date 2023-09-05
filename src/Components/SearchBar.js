import React, { useState } from 'react'
import "./Searchbar.css"
 function SearchBar({onSubmit}) {
  const [term,setTerm]=useState('')

  const handleFormSubmit=(event)=>{

    event.preventDefault()
    onSubmit(term)
  }
  const handleChange=(event)=>{
    setTerm(event.target.value)
  }

  return (
    <div >
      <form onSubmit={handleFormSubmit}>
        
       <input value={term} onChange={handleChange}/>  
       <button>search </button>
       
     </form>
    </div>
  )
}
export default SearchBar;
