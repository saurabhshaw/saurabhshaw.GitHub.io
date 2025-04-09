import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
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

    const GoogleScholar = this.props.data.GoogleScholar;
	const ResearchGate = this.props.data.ResearchGate;
	const skillmessage = this.props.data.skillmessage;
	const DownloadstyleObj = {width: "auto",textAlign: "center"};
	
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.degree}</h3>
          <p className="info">
            {education.school} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
		  <a href={work.link}><i className="fa fa-download"></i> Download </a>
        </div>
      );
    });
	
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Work Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Publications</span>
              </h1>
			  <h6><span><a href={GoogleScholar}> <i className="fa fa-link"></i> Go to Google Scholar </a></span></h6>
			  <h6><span><a href={ResearchGate}> <i className="fa fa-link"></i> Go to Research Gate </a></span></h6>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
