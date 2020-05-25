import React from "react";
import "./Dashboard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faChartLine,
    faClock,
    faCopy,
    faHome,
    faListAlt,
    faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import {Calendar} from "react-calendar";
import "./Calendar.css";
import Clock from 'react-live-clock';
import { AnalyticsDashboard } from 'react-analytics-charts';
import { SessionsByDateChart, SessionsGeoChart } from 'react-analytics-charts';
import person from "../../../person.jpg";

export default function Dashboard() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <FontAwesomeIcon icon={faClock} className="icon card-header-body-image--svg"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Clock
                                    </h1>
                                    <span className="card-header-body-content--description">
                                        Clock module
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h1 className="text-center">
                                <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                            </h1>
                        </div>

                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <FontAwesomeIcon icon={faChartLine} className="icon card-header-body-image--svg"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Google Analtics
                                    </h1>
                                    <span className="card-header-body-content--description">
                                        Google Analtics Chats
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <AnalyticsDashboard
                                authOptions={{ clientId: "123456789012-abc123def456ghi789jkl012mno345p.apps.googleusercontent.com" }}
                                renderCharts={(gapi, viewId) => {
                                    return (
                                        <div>
                                            <SessionsByDateChart
                                                gapi={gapi}
                                                viewId="ga:218202115"
                                                showPageViews
                                                showUsers
                                            />
                                            <SessionsGeoChart
                                                gapi={gapi}
                                                viewId="ga:218202115"
                                                showPageViews
                                            />
                                            ... More charts here ...
                                        </div>
                                    );
                                }}
                            />
                        </div>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="icon card-header-body-image--svg"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Calendar
                                    </h1>
                                    <span className="card-header-body-content--description">
                                        Calendar module
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <Calendar/>
                        </div>

                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <img src={person} alt="image" className="card-header-body-image--img"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Əli Mahmudlu
                                    </h1>
                                    <span className="card-header-body-content--description">
                                        Admin
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-body">
                                        <div className="card-header-body-image">
                                            <FontAwesomeIcon icon={faHome} className="icon card-header-body-image--svg"/>
                                        </div>
                                        <div className="card-header-body-content">
                                            <h1 className="card-header-body-content--header">
                                                Dashboard
                                                <span className="card-header-body-content--header-counter">
                                                    4
                                                </span>
                                            </h1>
                                            <span className="card-header-body-content--description">
                                                <a target="_blank" href="#">Yeni səhifədə aç</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-body">
                                        <div className="card-header-body-image">
                                            <FontAwesomeIcon icon={faListAlt} className="icon card-header-body-image--svg"/>
                                        </div>
                                        <div className="card-header-body-content">
                                            <h1 className="card-header-body-content--header">
                                                Kategoriyalar
                                                <span className="card-header-body-content--header-counter">
                                                    6
                                                </span>
                                            </h1>
                                            <span className="card-header-body-content--description">
                                                <a target="_blank" href="#">Yeni səhifədə aç</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-body">
                                        <div className="card-header-body-image">
                                            <FontAwesomeIcon icon={faNewspaper} className="icon card-header-body-image--svg"/>
                                        </div>
                                        <div className="card-header-body-content">
                                            <h1 className="card-header-body-content--header">
                                                Postlar
                                                <span className="card-header-body-content--header-counter">
                                                    8
                                                </span>
                                            </h1>
                                            <span className="card-header-body-content--description">
                                                <a target="_blank" href="#">Yeni səhifədə aç</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-body">
                                        <div className="card-header-body-image">
                                            <FontAwesomeIcon icon={faCopy} className="icon card-header-body-image--svg"/>
                                        </div>
                                        <div className="card-header-body-content">
                                            <h1 className="card-header-body-content--header">
                                                Səhifələr
                                                <span className="card-header-body-content--header-counter">
                                                    5
                                                </span>
                                            </h1>
                                            <span className="card-header-body-content--description">
                                                <a target="_blank" href="#">Yeni səhifədə aç</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
