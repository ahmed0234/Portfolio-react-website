import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <div className='Resume' id='Resume'>
            <div className="resume container">

                <div className="resume__main-title">
                    <h2>Resume</h2>
                </div>

                <div className="resume__wrapper">


{/* -----1----- */}
                        <div className="resume__container">
                            <div className="my__education">

                                    <h2>My Education</h2>

                                    <div className="my__education-content my__education-content-1">
                                        <div><h5>2000-2004</h5></div>
                                        <h4>Computer Science</h4>
                                        <h6>International University</h6>
                                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>      
                                    </div>

                                    <div className="my__education-content my__education-content-2">
                                        <div><h5>2005-2008</h5></div>
                                        <h4>Bachelor Degree</h4>
                                        <h6>University of California</h6>
                                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>      
                                    </div>

                                    <div className="my__education-content my__education-content-">
                                        <div><h5>2009-2012</h5></div>
                                        <h4>Master Degree</h4>
                                        <h6>Harvard University</h6>
                                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>      
                                    </div>

                                   

                            </div>


                           



{/* ----2------ */}
                            <div className="my__experience">
                                    <h2>My Experience</h2>

                                    <div className="my__education-content my__education-content-1">
                                        <div><h5>2012-2013</h5></div>
                                        <h4>Jr. UI UX Designer</h4>
                                        <h6>Facebook</h6>
                                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>      
                                    </div>

                                    <div className="my__education-content my__education-content-2">
                                        <div><h5>2014-2016</h5></div>
                                        <h4>Jr. Product Designer</h4>
                                        <h6>Dribble</h6>
                                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>      
                                    </div>

                                    <div className="my__education-content my__education-content-3">
                                        <div><h5>2017-2019</h5></div>
                                        <h4>Product Designer</h4>
                                        <h6>Adobe</h6>
                                        <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>      
                                    </div>



                                
                            </div>

                            </div>

{/* ------3---------- */}


                                <div className="my__skills">

                                    <h1>My Skills</h1>

                                    <div className="my__skills-wrapper">

                                        <div className="my__skills-content">
                                                <div className="my__skills-subcontent">
                                                    <h2>Web Design</h2>
                                                    <h3>65%</h3>
                                                </div>
                                                <div className="percentage-bar">
                                                        <div className="filler-1"></div>
                                                </div>
                                        </div>

                                        <div className="my__skills-content">
                                                <div className="my__skills-subcontent">
                                                    <h2>HTML/CSS</h2>
                                                    <h3>95%</h3>
                                                </div>
                                                <div className="percentage-bar">
                                                        <div className="filler-2"></div>
                                                </div>
                                        </div>

                                        <div className="my__skills-content">
                                                <div className="my__skills-subcontent">
                                                    <h2>JavaScript</h2>
                                                    <h3>80%</h3>
                                                </div>
                                                <div className="percentage-bar">
                                                        <div className="filler-3"></div>
                                                </div>
                                        </div>

                                        <div className="my__skills-content">
                                                <div className="my__skills-subcontent">
                                                    <h2>React JS</h2>
                                                    <h3>70%</h3>
                                                </div>
                                                <div className="percentage-bar">
                                                        <div className="filler-4"></div>
                                                </div>
                                        </div>

                                        <div className="my__skills-content">
                                                <div className="my__skills-subcontent">
                                                    <h2>Angular JS</h2>
                                                    <h3>60%</h3>
                                                </div>
                                                <div className="percentage-bar">
                                                        <div className="filler-5"></div>
                                                </div>
                                        </div>

                                        <div className="my__skills-content">
                                                <div className="my__skills-subcontent">
                                                    <h2>Bootstrap</h2>
                                                    <h3>99%</h3>
                                                </div>
                                                <div className="percentage-bar">
                                                        <div className="filler-6"></div>
                                                </div>
                                        </div>

                                        </div>

                                </div>

                                <div className="my__skills-button">
                                    <button className='btn-0'>Download CV <i class="fa-solid fa-download"></i></button>
                                </div>



                 






                            </div>

                </div>








            </div>
    
  )
}

export default Resume
