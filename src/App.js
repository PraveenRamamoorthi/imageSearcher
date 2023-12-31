
import SearchBar from './Components/SearchBar';
import SearchImages from './Api';
import Imagelist  from './Components/Imagelist';
import { useState } from 'react';


function App() {
  const [images,setImages]=useState([])
  const handleSubmit=async(term)=>{
   const result= await SearchImages(term)
   setImages(result);
  }

  return (
    <div>
      <h1> Image Search </h1>

     <SearchBar onSubmit={handleSubmit}/>
     <Imagelist images={images}/>
     
    </div>
  )
}

export default App;
