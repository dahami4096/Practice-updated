import React from 'react';
import ContentHeader from '../contentHeader/ContentHeader';
import './content.css';
import steam from '../../assets/steam1.jpg';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import water from '../../assets/waterhand2.jpg';
import fuel from '../../assets/fuel5.jpg';
import co2 from '../../assets/co25.avif';
import comair from '../../assets/comair2.jpg';
import strnd from '../../assets/strend2.jpg';
import elec from '../../assets/elec1.avif';
import kpi from '../../assets/kpi4.png';


const Content = () => {
    return (
        <div className='content'>
            <ContentHeader />

            <div className='content-text'>
                Welcome to Lion Brewery (Pvt.) Ltd.
            </div>
            <p>The Ceylon Brewery was the first brewery established in Sri Lanka. It was established in 1849 by Sir Samuel Baker[3][4] (1821–93) as a cottage industry, catering for the British colonial tea plantations in the hill country retreat of Nuwara Eliya. Nuwara Eliya was the ideal location for a brewery, with its cool climate and natural spring water.[5] It wasn't however until 1881[6] that it began brewing on a commercial basis, with the Ceylon Brewery Company, managed by Messrs Bremer and Pa Bavary</p>
            <div className='row justify'>
                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={steam} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">Steam</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/steam" className="content-card-btn">Steam <FaArrowRightFromBracket /> </a>
                    </div>
                </div>

                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={water} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/water" className="content-card-btn">Water <FaArrowRightFromBracket /> </a>
                    </div>
                </div>

                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={fuel} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">Fuel</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/fuel" className="content-card-btn">Fuel <FaArrowRightFromBracket /> </a>
                    </div>
                </div>

                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={co2} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">CO2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/co2" className="content-card-btn">CO2 <FaArrowRightFromBracket /> </a>
                    </div>
                </div>
                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={comair} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">Compressed Air</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/comair" className="content-card-btn">Com Air <FaArrowRightFromBracket /> </a>
                    </div>
                </div>
                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={strnd} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">Steam Trend</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/steamtrend" className="content-card-btn">Steam Trend<FaArrowRightFromBracket /> </a>
                    </div>
                </div>

                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={elec} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">Electricity</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/elec" className="content-card-btn">Electricity <FaArrowRightFromBracket /> </a>
                    </div>
                </div>

                <div className="content-card" style={{ width: '18rem' }}>
                    <img src={kpi} className="card-img" alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">KPI</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/kpi" className="content-card-btn">KPI <FaArrowRightFromBracket /> </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Content;
