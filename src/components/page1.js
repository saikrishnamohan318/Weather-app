import React from "react";
import location from '../images/location.png';
import humidity from '../images/humidity.png';
import wind from '../images/wind.png';
import pressure from '../images/pressure.png';

function PageOne(props){
    var propsData = props.data;
    let date = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return(
        <div className='div2'>
            <div className='citydeg d-flex justify-content-between align-items-center'>
                {propsData.name ? <p className='city'><img src={location} alt='location'/>{propsData.name}</p> : null}
                <div>
                    {propsData.main ? <p className='deg1'>{Math.round(propsData.main.temp-273.15)}&#730;C</p> : null}
                    {propsData.main ? <p className='deg2'>Feels like {Math.round(propsData.main.feels_like-273.15)}&#730;C</p> : null}
                    {propsData.main ? <p className="deg3" style={{textAlign:"center"}}>High/Low : {Math.round(propsData.main.temp_max-273.15)}&#730;C/{Math.round(propsData.main.temp_min-273.15)}&#730;C</p> : null}
                </div>
            </div>
            <div className='dayhwp d-flex justify-content-between'>
                <div>
                <h2 className="day">{days[date.getDay()]}</h2>
                {propsData.main ? <p><img src={humidity} alt='humidity'/>{propsData.main.humidity}%</p> : null}
                {propsData.wind ? <p><img src={wind} alt='wind'/>{(propsData.wind.speed*3.6).toFixed(1)}km/h</p> : null}
                {propsData.main ? <p><img src={pressure} alt='pressure'/>{propsData.main.pressure}hPa</p> : null}
                </div>
                {propsData.weather ? <p className="condition align-self-end">{propsData.weather[0].main}</p> : null}
            </div>
        </div>

    )
}
export default PageOne;