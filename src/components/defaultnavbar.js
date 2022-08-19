import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import loc from '../images/getloc.png';
import { NavLink } from "react-router-dom";

function DefaultNavBar(props){
    const [inputValue,setInputValue] = useState('');
    var getByLatLon = () => {
        props.bylatlon();
    }
    var searchByCity = () => {
        props.byCity(inputValue);
        setInputValue('')
    }
    return(
        <div className='div1'>
            <Navbar className='nav justify-content-between'>
                <div className="brandnavlink">
                    <Navbar.Brand className='nb'><NavLink to='/' style={{textDecoration:"none",color:"black"}}><img className="nbimg" src={logo} alt='logo'/><span className="wa">Weather App</span></NavLink></Navbar.Brand>
                    <NavLink to='/news' className='newslink'>News</NavLink>
                </div>
                <Nav className="defaultscreen">
                    <button style={{border:"none",backgroundColor:"white",marginRight:"10px"}} onClick={getByLatLon}><img className="latlonimg" src={loc} alt='loc'/></button>
                    <Form className='form d-flex'>
                        <FormControl type='search' placeholder='Search by City Name' className='search me-2' onChange={e=>setInputValue(e.target.value)} value={inputValue}/>
                        <Button className="searchBtn" onClick={searchByCity}>Search</Button>
                    </Form>
                </Nav>
            </Navbar>
        </div>
    )
}
export default DefaultNavBar;