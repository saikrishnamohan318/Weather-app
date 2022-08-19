import React from "react";

function NewsPageComponent({ newsData }){
    const data = newsData
    return(
        <>
        <div className="newspage mt-4">
            {data ? data.map(article=>(
                <div className="card" style={{width: "18rem"}} key={article._id}>
                    <img src={article.media} className="card-img-top" alt="img" width='200px' height='200px'/>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.excerpt}</p>
                        <a href={article.link} className="btn btn-primary" target='_blank'>Read Full article</a>
                    </div>
                </div>          
            )) : <p className="dnf">Data not found</p>}
        </div>
        </>
    )
}
export default NewsPageComponent;