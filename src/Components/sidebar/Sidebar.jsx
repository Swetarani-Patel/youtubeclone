import React from 'react'
import './_sidebar.scss'
import {MdSubscriptions,MdExitToApp,MdThumbUp,MdHistory,MdLibraryBooks,MdHome,MdSentimentDissatisfied} from 'react-icons/md'
import { logout } from '../../Redux/actions/authaction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Sidebar = ({sidebar,handl}) => {
 const naviget  =  useNavigate()
  const  dispatch = useDispatch()
  function logouthanddler(){
    
    dispatch(logout())
   

  }
  // let classes = sidebar? ' sidebar sidebarshow':'sidebar'
  return (
    <nav className= {sidebar? ' sidebar show':'sidebar'} onClick={()=>handl()}>
       <li>
        <MdHome size={23}/>
        <span>Home</span>
       </li>

       <Link to='/feed/subscriptions' className='sub-link'>
       <li>
        <MdSubscriptions size={23}/>
        <span>Subcriptions</span>
       </li>
       </Link>
       
       <li>
        <MdThumbUp size={23}/>
        <span>Liked Video</span>
       </li>
       <li>
        <MdHistory size={23}/>
        <span>Histroy</span>
       </li>
       <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
       </li>
       <li>
        <MdSentimentDissatisfied size={23}/>
        <span>i don't know</span>
       </li>
       <hr />
       <li onClick={logouthanddler}>
        <MdExitToApp size={23}/>
        <span>Log out</span>
       </li>
       <hr />
    </nav>
  )
}

export default Sidebar
