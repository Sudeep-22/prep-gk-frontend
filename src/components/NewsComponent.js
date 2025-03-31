import React from 'react'

const NewsComponent = (props) => {
  let { title, description, imageUrl, newsUrl, source, date } = props; 
  description = description || "";
  let tTitle = title.length > 100 ? title.substring(0, 100) + "..." : title;
  let tDes = description.length > 150 ? description.substring(0, 150) + "..." : description;
  return (
    <div className="card my-3 mx-2 shadow-sm"
        style={{ 
          height: "430px",  
          width: "100%", 
          maxWidth: "320px", 
          display: "flex", 
          flexDirection: "column", 
          overflow: "hidden"
        }}>
        
        {/* Image Section */}
        <img src={imageUrl} className="card-img-top" alt="News" 
          style={{ 
            height: "180px", 
            objectFit: "cover" 
          }} 
        />
        
        {/* Card Body */}
        <div className="card-body d-flex flex-column flex-grow-1">
          <h5 className="card-title" style={{ fontSize: "16px", fontWeight: "bold" }}>
            {tTitle}
          </h5>

          {/* Allow full description display */}
          <p className="card-text flex-grow-1" 
             style={{ 
                fontSize: "14px", 
                color: "#555"
             }}>
            {tDes}
          </p>
          
          {/* Footer - Keep minimal spacing */}
          <footer className="blockquote-footer mb-2">
            {source} on <cite title="Source Title">{date}</cite>
          </footer>

          {/* Read More Button - Ensuring 4px from the bottom */}
          <div className="mt-auto" style={{ paddingBottom: "3px" }}>
            <a href={newsUrl} target="_blank" rel="noreferrer" 
              className="btn btn-sm btn-dark w-100">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
};

export default NewsComponent;
