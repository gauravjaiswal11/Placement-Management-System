import { NavLink } from 'react-router-dom';
import React from 'react';
import TeacherCSS from './Teacher.module.css';

function Teacher() {
      return (
            <div className={TeacherCSS.std}>
                  <h1>FACULTY MODULE</h1>

                  <div className={TeacherCSS.wrapper}>
                        <div className={TeacherCSS.card}>
                              <img src='Detail.jpg' alt="Aj" />
                              <div className={TeacherCSS.info}>
                                    <h1>Company Details</h1>
                                    <NavLink className={TeacherCSS.btn} to='/company1'>Click here</NavLink>
                                    {/* <a href='https://cutm.ac.in/' className='btn'>Click here</a> */}
                              </div>
                        </div>




                        <div className={TeacherCSS.card}>
                              <img src='PLACEMENT dRIVE RECORD.PNG' alt="Aj" />
                              <div className={TeacherCSS.info}>
                                    <h1>Placement Drive Record</h1>
                                    <NavLink className={TeacherCSS.btn} to='/PlacementRecord'>Click here</NavLink>
                                    {/* <a href='https://cutm.ac.in/' className='btn'>Click here</a> */}
                              </div>
                        </div>



                        <div className={TeacherCSS.card}>
                              <img src='report.png' alt="Aj" />
                              <div className={TeacherCSS.info}>
                                    <h1>Download report</h1>
                                    <NavLink className={TeacherCSS.btn} to='/DownloadReport'>Click here</NavLink>
                                    {/* <a href='https://cutm.ac.in/' className='btn'>Click here</a> */}
                              </div>
                        </div>
                        
                  </div>
                  
            </div>

      );
}

export default Teacher;      