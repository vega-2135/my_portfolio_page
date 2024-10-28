import React from 'react'
import './about.css'
import myImage from '../../assets/images/me.png'

export default function About() {
    return (
        <section id='about'>

            <div className="container about_container">

                <div className="about_me">
                    <div className="about_me-image">
                        <img className="about-image" src={myImage} alt="Me" />
                    </div>
                </div>

                <div className="about_content">
                    <h2 className="about-me-title">About Me</h2>
                    <p className="about-text">
                    I am a dedicated Full Stack Developer with a unique journey that combines medical science and software development. 
                    My transition from medicine to technology exemplifies my adaptability and commitment to continuous learning. 
                    Having completed an intensive Full Stack Software Development program at Code Institute, I've developed a comprehensive 
                    understanding of both front-end and back-end technologies.
                    As an enthusiastic and driven developer, I approach each project with analytical precision honed through my medical background 
                    and master's in biomedical sciences. This distinctive perspective enables me to bring structured problem-solving and attention 
                    to detail to my software development work. Through my bootcamp experience and independent projects, I've demonstrated my ability 
                    to create efficient, user-focused solutions while adhering to industry best practices.
                    Currently seeking challenging opportunities in front-end, back-end, or full-stack development roles, I am eager to contribute to 
                    innovative projects and collaborate with experienced professionals. My commitment to continuous learning is evidenced by my ongoing 
                    exploration of React.js and artificial intelligence technologies.   
                    </p>
                </div>
            </div>
    </section>
    )
}