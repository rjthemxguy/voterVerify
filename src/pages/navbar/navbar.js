import React, {Fragment, useState, useContext} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';



const Navbar = ({title}) => {

const authContext = useContext(AuthContext);



const {isAuthenticated, logout} = authContext;

const [sidebar, toggleSidebar] = useState(false);

const showSidebar = () => toggleSidebar(!sidebar);

const onLogout = () => {

    showSidebar();
    logout();

}

const guestLinks = (
    <Fragment>
         <li onClick={showSidebar}><FaIcons.FaPencilAlt className="iconItem"/>
         <Link style={{textDecoration:'none'}} className="text-light" to='/register'>Register</Link></li>
         <li onClick={showSidebar}><BiIcons.BiLogInCircle className="iconItem"/>
            <Link style={{textDecoration:'none'}} className="text-light" to='/login'>Login</Link></li>
    </Fragment>
);

const authLinks = (
<Fragment>
        <li onClick={showSidebar}><FaIcons.FaSearch className="iconItem"/>Search</li>
        <li onClick={showSidebar}><BsIcons.BsPeopleFill className="iconItem"/> Select County</li>
        <li onClick={showSidebar}><BsIcons.BsFillCheckCircleFill className="iconItem"/> Approve User</li>
        <li onClick={onLogout}><BiIcons.BiLogOutCircle className="iconItem"/>Logout</li>

</Fragment>

);


    return (
        <Fragment>
            
           
            
        
            <div className="container-fluid bg_navy navContainer fixed-top text-left">
                
                <FaIcons.FaBars className="fa-3x mt-3" onClick={showSidebar}/>
                <div className="container">
                    <div className="row pt-2 pb-2">
                        <div className="col-md-6 text-center text-md-left"></div>
                        <div className="col-md-6 text-right">
                            
                                
                                {/*<Link style={{textDecoration:'none'}} className="text-light" to='/about'>About</Link>*/}
                            

                        </div>
                    </div>
                </div>
            </div>
            <div className={sidebar ? "sidebar" : "no-sidebar"}> 
            <div className="closeDiv"><FaIcons.FaWindowClose className="iconItem" onClick={showSidebar}/></div>
                <ul className="mt-4 sideBarItems">
                    {isAuthenticated ? authLinks : guestLinks}                    

                </ul>
            </div>
        </Fragment>
    )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Vote Check"
}

export default Navbar
