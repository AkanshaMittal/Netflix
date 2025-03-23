
export const SeriesCard=({data})=>{
  
 
    const{img_url,name,rating,description,cast,genre,watch_url,id}=data//desstructing props
    
    const Rating_style=rating >= 8.5 ? 'super_hit' : 'average'
    const btn_style={
    
      padding:"1.2rem 2.4rem",
      border:"none",
      fontSize:"75%",
      backgroundColor:`${rating >= 8.5 ? '#7dcae0' : '#f7dc6f'}`,
      color: "var(--btn-color)",
      fontWeight:"bold",
      cursor:"pointer",
}

    return(
      <li key={id} className="card">
      <div >
        <img src={img_url} alt={name} width="40%" height="40%" />  
      </div>
      <div className="card-content" >
        <h2 >Name: {name} </h2>
<h3>
  Rating:
<span className={`rating ${Rating_style}`}>{rating}</span>
</h3>
      
         <p style={{margin:'1.2rem 0'}}>Summary: {description}</p>
        <p style={{margin:'1.2rem 0'}}>Genre: {genre}</p>
        <p style={{margin:'1.2rem 0'}}>Cast: {cast}</p>
        <a href={watch_url}>
        <button style={btn_style}>Watch Now</button>
        </a>
       
    </div>
    </li>
           
    )
}