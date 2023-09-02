
import axios from "axios"

const SearchImages =  async(term)=> {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID lGLH7LUVA8UKBViSbOnix7eSK71M7jiyy39goAjjj_c',
        },
        params:{
            query:term
        },
    })
    
  return response.data.results;
};

export default SearchImages;
