import React,{useState} from 'react'
const BasicFigure = ({ url, caption, onDelete }) => {
  return (
    <div>
      <img src={url} alt={caption} style={{ width: '200px', height: '200px' }} />
      <p>{caption}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

function Exp5() {
    const[images, setImages] = useState([
        {id:1,url:'https://picsum.photos/id/10/400/300', caption:'Image 1'},
        {id:2,url:'https://picsum.photos/id/20/400/300', caption:'Image 2'},
        {id:3,url:'https://picsum.photos/id/30/400/300', caption:'Image 3'},
    ]);
    const addImage = () => {
        const id = Date.now();
        const randomId = Math.floor(Math.random() * 100);
     console.log("Random Id",randomId)

        setImages([...images, {id, url:`https://picsum.photos/id/${randomId}/400/300`, caption:`Image ${id}`}]);
    }
    const deleteImage = (id) => {
        setImages(images.filter(img => img.id !== id));
    }
  return (
    <div>
      <h1>Experiment 5:Component Composition</h1>
      <p>figurelist renders multiple basicFigure components with props</p>
<button onClick={addImage}>Add Random Image</button>
<div>
    {images.map(img => (
        <BasicFigure

            key={img.id}
            url={img.url}
            caption={img.caption}
            onDelete={() => deleteImage(img.id)}
        />
    ))}
</div>
<div>
 {images.length === 0 && <p>No images to display. Click "Add Random Image" to add some!</p>}
</div>
 
    </div>
        
  )
}

export default Exp5
