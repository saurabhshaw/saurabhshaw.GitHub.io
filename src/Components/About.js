import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
	const AffiliationPic = "images/" + "AffiliationsBanner.JPG"
    const bio = this.props.data.bio;
	const bio_current = this.props.data.bio_current;
	const bio_past = this.props.data.bio_past;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;
	const DownloadstyleObj = {width: "auto",textAlign: "center"};

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                style={DownloadstyleObj}
                src={profilepic}
                alt="Saurabh Shaw Profile Pic"
              />
			  <div className="columns download">
				<a href={resumeDownload} className="button" style={DownloadstyleObj}>
				    <i className="fa fa-download"></i> Download Resume/CV
				</a>
			  </div>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
			  <p>{bio_current}</p>
			  <p>{bio_past}</p>
              <div className="row">
                <div className="column">
                  <h2>Affiliations:</h2>
                  <img
					src={AffiliationPic}
					alt="Affiliations"
				  />
                </div>
				
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
