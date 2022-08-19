import React, { useState } from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import loc from '../images/getloc.png';
import { NavLink } from "react-router-dom";
import './menu.css';

function MobileNavComponent(props){
    const [inputValue,setInputValue] = useState('');
    var getByLatLon = () => {
        props.bylatlon();
    }
    var searchByCity = () => {
        props.byCity(inputValue);
        setInputValue('')
    }
    var myFunction = () => {
        var menu = document.getElementById('menu');
        if(menu.style.display === 'block'){
            menu.style.display = 'none';
        }else {
            menu.style.display = 'block';
        }
    }
    return(
        <div className='div1'>
            <Navbar className='nav justify-content-between'>
                <Navbar.Brand className='nb'><NavLink to='/' style={{textDecoration:"none",color:"black"}}><img className="nbimg" src={logo} alt='logo'/><span className="wa">Weather App</span></NavLink></Navbar.Brand>
                <span onClick={myFunction} style={{cursor:"pointer"}}><i className="fa-solid fa-bars fa-2x"></i></span>
            </Navbar>
            <ul className="menuitems" id="menu">
                <li><NavLink to='/news' className='newslink1'>News</NavLink></li>
                <li className="d-flex justify-content-center"><button className='latlonbtn' onClick={getByLatLon}><img className="latlonimg" src={loc} alt='loc'/></button></li>
                <li>
                    <Form className='form1 d-flex'>
                        <FormControl type='search' placeholder='Search by City Name' className='search me-2' onChange={e=>setInputValue(e.target.value)} value={inputValue}/>
                        <Button className="searchBtn" onClick={searchByCity}>Search</Button>
                    </Form>
                </li>
            </ul>
        </div>
    )
}
export default MobileNavComponent;