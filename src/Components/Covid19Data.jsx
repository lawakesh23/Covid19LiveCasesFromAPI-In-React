import { React, useEffect, useState } from "react";

const Covid19Data = () =>{
    const [ data , setData] = useState([]);

    const getCovidData= async() =>{
       const response = await fetch('https://api.covid19india.org/data.json');
        const actualdata = await response.json();
        console.log(actualdata.statewise);
        setData(actualdata.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return(
        <>
        <div className="container-fluid no-gutters p-0">
            <div className="bg-warning py-2 position-fixed w-100 headerVetical">
            <h2 className="text-center">INDIA COVID-19 <span className="text-danger">LIVE </span>DAILY REPORT DASHBOARD</h2>
            </div>
            <table className="table table-hover table-dark table-Margin63 mb-0">
                <thead>
                    <tr className="bg-primary">
                    <th scope="col">State</th>
                    <th scope="col">Active</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {  data.map((currElement, index) => {
                        return(
                                <tr key={index}>
                                <th scope="row">{currElement.state}</th>
                                <td>{currElement.active}</td>
                                <td>{currElement.confirmed}</td>
                                <td>{currElement.deaths}</td>
                                <td>{currElement.recovered}</td>
                                <td>{currElement.lastupdatedtime}</td>
                                </tr>
                        )
                    })
                    }

                </tbody>
            </table>
            <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>REPORT DASHBOARD</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2021 || Designed & Developed With <i class="icon ion-heart"></i>  by Lawakesh</p>
            </div>
        </footer>
    </div>
            </div>
        </>

    );
}

export default Covid19Data;