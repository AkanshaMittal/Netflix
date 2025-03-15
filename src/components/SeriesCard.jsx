
export const SeriesCard=({data})=>{
    const{img_url,name,rating,description,cast,genre,watch_url}=data//desstructing props
    return(
        <li className="card">
              
              <div className="card">
                <img src={img_url} alt="series image" width="40%" height="40%" />
                <a href={watch_url}target="_blank" >
                <button>Watch Now</button>
                </a>  
                </div>
           <div className="card-content" >
              <h2>Name: {name}
                </h2>
                <h3>Rating: {rating}</h3>
                <p>Summary: {description}</p>
                <p>Genre: {genre}</p>
                <p>Cast: {cast}</p>
        
                </div> 
                </li>
           
    )
}