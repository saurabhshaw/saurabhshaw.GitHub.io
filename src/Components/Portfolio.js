import React, { Component } from "react";
import Slide from "react-reveal";

class Portfolio extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

	const DownloadstyleObj = {width: "auto",textAlign: "center"};

    const projectsImages = this.props.data.projects.map(function (projects) {
		let projectImagePath = "images/portfolio/" + projects.image;
      return (
        <div className="three columns header-col">
		  <h1><span><img src={projectImagePath}/></span></h1>
		</div>
      );
    });	
	
	const projects = this.props.data.projects.map(function (projects) {
		let projectImagePath = "images/portfolio/" + projects.image;

      return (		
		<div className="row projects">
            <div className="three columns header-col">
              <img src={projectImagePath}/>
            </div>
            <div className="nine columns main-col">
              <h3>{projects.title}</h3>
			  <p>{projects.category}</p>
            </div>
		</div>
        
      );
    });
	
    return (
      <section id="portfolio">

        <Slide left duration={1300}>
          <div className="row work">
			<div className="nine columns main-col"><h1>Research Projects & Themes</h1></div>

            <div className="three columns header-col">
              <h1>
                <span>&nbsp;&nbsp;</span>
              </h1>			    
            </div>
			{projects}
          </div>
        </Slide>
      </section>
    );
  }
}

export default Portfolio;
