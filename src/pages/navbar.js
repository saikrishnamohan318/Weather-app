import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { liveLocAction } from "../actions/liveloc.action";
import { searchAction } from "../actions/search.action";
import logo from '../images/logo.jpg';
import loc from '../images/getloc.png';
import PageOne from "./page1";
import Loader from '../components/loader';

function Navcom(){
    const [latlon,setLatlon] = useState({lat: '',lon: ''});
    const [getData,setGetData] = useState({});
    const [inputValue,setInputValue] = useState('');
    const [bool,setBool] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state=>state.liveLoc);
    const data1 = useSelector(state=>state.searchByCity);
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                setLatlon({lat:position.coords.latitude,lon:position.coords.longitude})
            });
        }
    },[])
    useEffect(()=>{
        setGetData(data);
    },[data])
    useEffect(()=>{
        setGetData(data1);
    },[data1])
    var getByLatLon = () => {
        dispatch(liveLocAction(latlon));
    }
    var searchByCity = () => {
        if(inputValue === ''){
            alert('Enter City name');
            setBool(true);
        }
        dispatch(searchAction(inputValue));
        setInputValue('');
    }
    return(
        <div className="maindiv">
            <div className='div1'>
                <Navbar className='nav justify-content-between'>
                    <Navbar.Brand className='nb'><img className="nbimg" src={logo} alt='logo'/><span className="wa">Weather App</span></Navbar.Brand>
                    <Nav className="defaultscreen">
                        <button style={{border:"none",backgroundColor:"white",marginRight:"10px"}} onClick={getByLatLon}><img className="latlonimg" src={loc} alt='loc'/></button>
                        <Form className='form d-flex'>
                            <FormControl type='search' placeholder='Search by City Name' className='search me-2' onChange={e=>setInputValue(e.target.value)} value={inputValue}/>
                            <Button className="searchBtn" onClick={searchByCity}>Search</Button>
                        </Form>
                    </Nav>
                </Navbar>
            </div>
            {getData && getData.isLoading ? (bool ? <PageOne /> : <Loader />) : <PageOne locData={getData.data}/>}
        </div>
    )
}
export default Navcom;