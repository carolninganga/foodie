import React from 'react'
import styles from './Team.module.css'

const Team = () => (

    <div className={styles.cf} className={styles.teamcontainer}>
        <h1 className={styles.teamh1}>Our Team</h1>
    <div className={styles.teammember}>
      <img className={styles.teamphoto} src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen%20Shot%202020-07-29%20at%209.14.15%20PM.png?v=1596072585996"/>
      <h4>Caroline Ninganga</h4>
      <span>Office Manager/ Technical Support Specialist entering the Full Stack Web Developer space</span>
      <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/carolineninganga/" id="linkedin">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
    </div>

    <div className={styles.teammember}>
    <img className={styles.teamphoto} src="https://cdn.glitch.com/cd99f035-ecbc-4ddd-9a8c-d2f6b5fff534%2Ftwitterpic.jpg?v=1572969184446"/>
      <h4>Yaheng Wu</h4>
      <span>Web developer with a diverse background in accounting and information systems</span>
       <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/yahengwu/" id="linkedin" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
    </div> 
  
 </div>
)


export default Team;