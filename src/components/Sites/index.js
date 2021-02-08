import React from "react";
import Card from '../Card';
import data from '../../assets/db/sites.json';

function Sites () {
  return (
    <div className="portfolio-color">
      <div className="container">
        <section id="portfolio" className="portfolio-section">
          <h2 className="pt-4 px-2">Portfolio</h2>
          <hr />
          <div className="container">
            <div id="my-sites" className="row row-cols-1 row-cols-md-2">
              {data.data.map(({idword, imgSrc, siteTitle, siteDescription, url, github, tech }) => (
                <Card key={url} idword={idword} imgSrc={imgSrc} siteTitle={siteTitle} siteDescription={siteDescription} url={url} github={github} tech={tech} />
              ))}

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sites;