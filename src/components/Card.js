import { useState } from "react";

function Card({id,name,info,image,price,removeTour}){
    const [show, setShow] = useState(false);
    
    const description = show ? info : info.substring(0, 200);
    const disp = show ? "show less" : "show more";
    function toggleShow() {
        setShow(!show);
    }
     
    return(
        <div className="card">
             <img src={image} className="image"></img>
             <div className="tour-info">
                  <div className="tour-details">
                   <h2 className="tour-price">{price}</h2>  
                   <h2 className="tour-name">{name}</h2>
                  </div>   
                  <div className="description">
                    {description}
                    <span className="read-more" onClick={toggleShow}>{disp}</span>
                  </div>             
             </div>
             <button className="btn-red" onClick={()=>removeTour(id)} >
                Not Interested
             </button>
             
        </div>
    );
}

export default Card;