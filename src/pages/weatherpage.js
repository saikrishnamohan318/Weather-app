import React from "react";
import './weathernavbarandpage.css';
import location from '../images/location.png';
import humidity from '../images/humidity.png';
import wind from '../images/wind.png';
import pressure from '../images/pressure.png';

function PageOne(props){
    const data = props.locData;
    let date = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return(
        <>
        {data ? (
            <div className="div2">
                <div className="citydeg d-flex justify-content-between align-items-center">
                    {data ? <p className='city'><img src={location} alt='location'/>{data.name}</p> : null}
                    <div>
                        {data ? <p className='deg1'>{Math.round(data.main.temp-273.15)}&#730;C</p> : null}
                        {data ? <p className='deg2'>Feels like {Math.round(data.main.feels_like-273.15)}&#730;C</p> : null}
                        {data ? <p className="deg3" style={{textAlign:"center"}}>High/Low : {Math.round(data.main.temp_max-273.15)}&#730;C/{Math.round(data.main.temp_min-273.15)}&#730;C</p> : null}
                    </div>
                </div>
                <div className='dayhwp d-flex justify-content-between'>
                    <div>
                        {data ? <h2 className="day">{days[date.getDay()]}</h2> : null}
                        {data ? <p><img src={humidity} alt='humidity'/>{data.main.humidity}%</p> : null}
                        {data ? <p><img src={wind} alt='wind'/>{(data.wind.speed*3.6).toFixed(1)}km/h</p> : null}
                        {data ? <p><img src={pressure} alt='pressure'/>{data.main.pressure}hPa</p> : null}
                    </div>
                    {data ? <p className="condition align-self-end">{data.weather[0].main}</p> : null}
                </div>
            </div>
        ) : <p className='acfs'>Add City from search</p>}
        </>
    )
}
export default PageOne;