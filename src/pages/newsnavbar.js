import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { weatherNewsAction, generalNewsAction, businessNewsAction, techNewsAction, moviesNewsAction, sportsNewsAction, searchNewsAction } from "../actions/news.action";
import './newsnavbarandpage.css';
import newslogo from '../images/newslogo.png';
import NewsPageComponent from "./newspage";
import Loader from "../components/loader";

function NewsComponent(){
    const dispatch = useDispatch();
    const [newsData,setNewsData] = useState([]);
    const [searchvalue,setSearchValue] = useState('');
    const [bool,setBool] = useState(false);

    const data = useSelector(state=>state.weatherNews);
    useEffect(()=>{
        dispatch(weatherNewsAction());
    },[])
    var weatherNews = () => {
        dispatch(weatherNewsAction());
        setBool(false);
    }
    useEffect(()=>{
        setNewsData(data);
    },[data])

    const data1 = useSelector(state=>state.generalNews);
    var generalNews = () => {
        dispatch(generalNewsAction());
        setBool(false);
    }
    useEffect(()=>{
        setNewsData(data1);
    },[data1])

    const data2 = useSelector(state=>state.businessNews);
    var businessNews = () => {
        dispatch(businessNewsAction());
        setBool(false);
    }
    useEffect(()=>{
        setNewsData(data2);
    },[data2])

    const data3 = useSelector(state=>state.techNews);
    var technologyNews = () => {
        dispatch(techNewsAction());
        setBool(false);
    }
    useEffect(()=>{
        setNewsData(data3);
    },[data3])

    const data4 = useSelector(state=>state.moviesNews);
    var moviesNews = () => {
        dispatch(moviesNewsAction());
        setBool(false);
    }
    useEffect(()=>{
        setNewsData(data4);
    },[data4])

    const data5 = useSelector(state=>state.sportsNews);
    var sportsNews = () => {
        dispatch(sportsNewsAction());
        setBool(false);
    }
    useEffect(()=>{
        setNewsData(data5);
    },[data5])

    const data6 = useSelector(state=>state.searchNews);
    var searchNews = () => {
        if(searchvalue === ''){
            alert('Enter any Topic related to news');
            setBool(true);
        }
        dispatch(searchNewsAction(searchvalue));
        setSearchValue('');
    }
    useEffect(()=>{
        setNewsData(data6);
    },[data6])

    var links = document.getElementsByClassName('nav-link');
    for(let i=0; i<links.length; i++){
        links[i].addEventListener("click", () => {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.className += "active";
        });
    }

    var lists = document.getElementById('navbarNav');
    var showList = () => {
        if(lists.style.display === 'none'){
            lists.style.display = 'block';
        }else {
            lists.style.display = 'none';
        }
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/news"><img src={newslogo} alt='newslogo' width='80px' height='80px'/></a>
                    <button className="navbar-toggler" type="button" onClick={showList} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="fa-solid fa-bars fa-xl"></i></span>
                    </button>
                    <div className="collapse navbar-collapse mx-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home" onClick={weatherNews}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#india" onClick={generalNews}>India</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#business" onClick={businessNews}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#technology" onClick={technologyNews}>Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#movies" onClick={moviesNews}>Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sports" onClick={sportsNews}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <form className="d-flex navform">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e=>setSearchValue(e.target.value)} value={searchvalue}/>
                                    <button className="btn btn-outline-success" type="button" onClick={searchNews}>Search</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {newsData && newsData.isLoading ? (bool ? <NewsPageComponent /> : <Loader />) : <NewsPageComponent newsData={newsData.data}/>}
        </div>
    )
}
export default NewsComponent;
