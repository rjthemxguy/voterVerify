import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {
    return (
        <Fragment>
            
           
            
        
            <div className="container-fluid bg_navy navContainer fixed-top">
                <div className="container">
                    <div className="row pt-2 pb-2">
                        <div className="col-md-6 text-center text-md-left"></div>
                        <div className="col-md-6 text-right">
                            
                                
                                <Link style={{textDecoration:'none'}} className="text-light" to='/about'>About</Link>
                            

                        </div>
                    </div>
                </div>
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
