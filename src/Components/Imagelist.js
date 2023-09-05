
import ImageShow from './ImageShow';
import "./Imagelist.css"
function Imagelist({images}) {
  const renderedImages= images.map((image) =>{
  return <ImageShow key={image.id} image={image}/>
  });
  return (
    <div className='imagelist'>
     {renderedImages}
    </div>
  
)}

export default Imagelist;
