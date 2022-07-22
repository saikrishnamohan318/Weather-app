import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import loc from '../images/getloc.png';
import PageOne from './page1';
//import MobileNav from "./mobilenav";
const apikey = '57585867c017425c442cf8a689ef42aa';

function Navcom(){
    const [inputValue,setInputValue] = useState('');
    const [loading,setLoading] = useState(true);
    const [getData,setGetData] = useState({});
    const [display,setDisplay] = useState(true);
    const [latlon,setLatlon] = useState({lat: '',lon: ''});
    var searchByCity = (iv) => {
        console.log(iv);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apikey}`)
        .then(res=>{
            if(res.ok){
                setLoading(false);
                return res.json()
            }else{
                alert('city not found');
                setLoading(false);
                setDisplay(true);
            }
        }).then(data=>{setGetData(data)})
        setDisplay(false);
        setLoading(true);
        setInputValue('')
    }
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                setLatlon({lat:position.coords.latitude,lon:position.coords.longitude})
            });
        }
    },[])
    var getByLatLon = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=57585867c017425c442cf8a689ef42aa`)
        .then(res=>{
            if(res.ok){
                setLoading(false);
                return res.json()
            }else{
                alert('city not found');
                setLoading(false);
                setDisplay(true);
            }
        }).then(data1=>{setGetData(data1)})
        setDisplay(false);
        setLoading(true);
    }
    return(
        <div className="maindiv">
            <div className='div1'>
                <Navbar className='nav justify-content-between'>
                    <Navbar.Brand className='nb'><img className="nbimg" src={logo} alt='logo'/><span className="wa">Weather App</span></Navbar.Brand>
                    <Nav className="defaultscreen">
                        <button style={{border:"none",backgroundColor:"white",marginRight:"10px"}} onClick={getByLatLon}><img className="latlonimg" src={loc} alt='loc'/></button>
                        <Form className='form d-flex'>
                            <FormControl type='search' placeholder='Search by City Name' className='search me-2' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                            <Button onClick={searchByCity} className="searchBtn">Search</Button>
                        </Form>
                    </Nav>
                </Navbar>
            </div>
            {/*<MobileNav locbtn={getByLatLon} mns={searchByCity}/>*/}
            {display ? <h1 style={{textAlign:"center"}}>Add city from Search</h1> : loading ? <h3 style={{textAlign:"center"}}>Loading...</h3> : <PageOne data={getData}/>}
        </div>
    )
}
export default Navcom;