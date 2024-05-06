import React from "react";
import NavigationBar from "../../components/other/navigation bar/NavigationBar";
import EasyToUse from "../../assets/easy to use.jpg";
import QuickResponses from "../../assets/quick responses.jpg";
import FreeOfCost from "../../assets/free of cost.jpg";
import FrequentUpdates from "../../assets/frequent updates.jpg";
import OpenForAll from "../../assets/open for all.jpg";
import Responsiveness from "../../assets/responsiveness.jpg";
import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
    return (
        <>
            <header></header>
            <nav>
                <NavigationBar />
            </nav>
            <main>
                <h1>Hello dear user <br /> Welcome to quizwiz!</h1>
                <div>
                    <h1>Why quizwiz?</h1>
                    <div>
                        {/* Create a table for content */}
                        <table>
                            <tbody>
                                <tr>
                                    <td id="2">Easy To Use system</td>
                                    <td id="7">
                                        <img src={EasyToUse} alt="Show icon for easy to use" />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="1">Quick Responses</td>
                                    <td id="8">
                                        <img src={QuickResponses} alt="Show icon for quick responses" />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="3">Free Of Cost</td>
                                    <td id="9">
                                        <img src={FreeOfCost} alt="Show icon for free of cost" />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="4">Frequent Updates</td>
                                    <td id="10">
                                        <img src={FrequentUpdates} alt="Show icon for frequent updates" />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="5">Open For All</td>
                                    <td id="11">
                                        <img src={OpenForAll} alt="Show icon for open for all" />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="6">Responsiveness</td>
                                    <td id="12">
                                        <img src={Responsiveness} alt="Show icon for responsiveness" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="What">
                    <h1>What's new</h1>
                    <div>
                        <p>Nothing new right now</p>
                    </div>
                </div>
                <button>Start the quiz</button>
            </main>
        </>
    )
}


export default Home;