import React, {useEffect, useState} from 'react'
import './AppointmentsList.css'
import Row from './Row/Row'
import axios from 'axios'
import {getSundays, makeDate} from '../../../time'
import {Link} from 'react-router-dom'

const AppointmentsList = () => {
    // const [thisSunday, setThisSunday] = useState('this')
    // const [lastSunday, setLastSunday] = useState('last')
    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
        console.log('Appointments list rendred')

        // let sundays = getSundays()
        // setThisSunday(makeDate(sundays.sunday))
        // setLastSunday(makeDate(sundays.nextSunday)) 

        axios.get('http://localhost:4000/getappointments').then((response)=>{
       // axios.get('https://backbarber.herokuapp.com/getappointments').then((response)=>{
            console.log(response.data)

            let {error} = response.data
            if(error){
                console.log(error)
            }
            else{
                let newAppointments = response.data.filter((obj)=>{
               //     if( obj.timeInMS > sundays.sunday && obj.timeInMS < sundays.nextSunday)
                    return true
                //    else return false  
                })
                console.log('newAppointments: ',newAppointments)
                setAppointments(newAppointments)
            }
        })
    },[])


    return (
        <div className='appointments-list'>
            <div>
                <h1>Control Panel</h1>
                <div className='admin-profile-links-container'>
                    <Link to='/' className='admin-profile-link'>
                        Home 
                    </Link>
                    /
                    <Link to='/profile' className='admin-profile-link'>
                        Profile 
                    </Link>
                </div>
            </div>
            
            <h3>The appointments are between </h3>
        
            <table>
                <thead>
                    <tr className='table-header'>
                        <td id='td-white'></td>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
               

                 <tbody>
                    {
                        appointments.map((user, i) => 
                    {
                        return(
                          <div className="col-md-3">
  
                          <div className="product">
                            <div className="img-container">
                              <div key={i} >{user.name}</div>

                              <div key={i} >{user.phone}</div>
                              <div key={i} >{user.date}</div>
                              <div key={i} >{user.time}</div>
                              <div key={i} >{user.date}</div>


                            </div>
                          </div>
                          </div>
  
                        )
                    })
                }
                </tbody>
            </table>   
        </div>
    )
}

export default AppointmentsList

