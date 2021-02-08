import React from "react";
import TechListItem from '../TechListItem';
import "./styles.css";

function Card ({ idword, imgSrc, siteTitle, siteDescription, url, github, tech }) {

  const handleCodeClick = () => {
    window.location = github;
  }

  const handleSiteClick = () => {
    window.location = url;
  }

  return (
    <div className="col mb-4">
      <div id={idword} className="card">
        <img src={imgSrc} alt={siteTitle + " website screenshot"} className="card-img-top border-0" />
        <div className="card-body">
          <h5 className="card-title">{siteTitle}</h5>
          <p className="card-text">{siteDescription}</p>
          <div className="card-footer border-0">
            <h6 className="card-title">Technologies</h6>
            <ul>
              {tech.map((item, index) => (<TechListItem key={index} item={item}/>))}
              </ul>
            <button type="button" className="btn btn-primary m-1" onClick={handleSiteClick}>Deployed Site</button>
            <button type="button" id={idword + "-code-button"} className="btn btn-danger m-1" onClick={handleCodeClick}>Show me code</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;