import React from "react";
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
import { ActiveUsersChart, SessionsByDeviceCategoryChart, SessionsByUserTypeChart, SessionsByDateChart, SessionsGeoChart, SessionsBySourceChart, PageViewsPerPathChart, SessionsByHourChart,  } from 'react-analytics-charts';
import person from "../../../person.jpg";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export default function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Dashboard | Admin Panel</title>
            </Helmet>
            <Pageheader
                pageheader_header="Dashboard"
                pageheader_description="The revolution control panel"
                pageheader_icon="fas fa-home"
            />
            <Breadcrumb/>
            <div className="content">
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
                            <div className="card-body">
                                <div className="card-header-body">
                                    <div className="card-header-body-image">
                                        <img src={person} alt="Person profile pictures - Ali Mahmudlu" className="card-header-body-image--img"/>
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
                    </div>
                    <div className="col-lg-12">
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
                                    authOptions={{ clientId: "15703957385-kbn4mj7h51oeo5lhcgbhlm8v6vapnurt.apps.googleusercontent.com" }}
                                    renderCharts={(gapi, viewId) => {
                                        const chartStyles = {
                                            width: "100%",
                                            minHeight: "450px"
                                        }
                                        return (
                                            <>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <SessionsByDateChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                            style={chartStyles}
                                                            showPageViews
                                                            showUsers
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <SessionsGeoChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                            style={chartStyles}
                                                            showPageViews
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <SessionsBySourceChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                            style={chartStyles}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <SessionsByHourChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                            style={chartStyles}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <PageViewsPerPathChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <SessionsByUserTypeChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <SessionsByDeviceCategoryChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ActiveUsersChart
                                                            gapi={gapi}
                                                            viewId={viewId}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6">
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
                                                    <Link target="_blank" to="#">Yeni səhifədə aç</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
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
                                                    <Link target="_blank" to="#">Yeni səhifədə aç</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
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
                                                    <Link target="_blank" to="#">Yeni səhifədə aç</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
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
                                                    <Link target="_blank" to="#">Yeni səhifədə aç</Link>
                                                </span>
                                            </div>
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
