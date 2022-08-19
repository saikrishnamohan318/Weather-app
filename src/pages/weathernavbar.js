import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { liveLocAction } from "../actions/liveloc.action";
import { searchAction } from "../actions/search.action";
import './weathernavbarandpage.css'
import PageOne from "./weatherpage";
import Loader from '../components/loader';
import DefaultNavBar from "../components/defaultnavbar";
import MobileNavComponent from "../components/mobilenavbar";

function Navcom(){
    const [latlon,setLatlon] = useState({lat: '',lon: ''});
    const [getData,setGetData] = useState({});
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
        if(bool === true){
            setBool(false);
        }
    }
    var searchByCity = (inputValue) => {
        if(inputValue === ''){
            alert('Enter Valid City name');
            setBool(true);
        }
        dispatch(searchAction(inputValue));
    }
    return(
        <div className="maindiv">
            <div className='default'>
                <DefaultNavBar bylatlon={getByLatLon} byCity={searchByCity}/>
            </div>
            <div className="mobile">
                <MobileNavComponent bylatlon={getByLatLon} byCity={searchByCity}/>
            </div>
            {getData && getData.isLoading ? (bool ? <PageOne /> : <Loader />) : <PageOne locData={getData.data}/>}
        </div>
    )
}
export default Navcom;