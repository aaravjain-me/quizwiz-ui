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
            <header>
                <NavigationBar />
            </header>
            <main>
                <h1>Hello dear user <br /> Welcome to quizwiz!</h1>
                <div>
                    <h1>Why quizwiz?</h1>
                    <div>
                        {/* Create a table for content */}
                        <table>
                            <tbody>
                                <tr>
                                    <td>Easy To Use system</td>
                                    <td>
                                        <img src={EasyToUse} alt="Show icon for easy to use" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quick Responses</td>
                                    <td>
                                        <img src={QuickResponses} alt="Show icon for quick responses" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Free Of Cost</td>
                                    <td>
                                        <img src={FreeOfCost} alt="Show icon for free of cost" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Frequent Updates</td>
                                    <td>
                                        <img src={FrequentUpdates} alt="Show icon for frequent updates" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Open For All</td>
                                    <td>
                                        <img src={OpenForAll} alt="Show icon for open for all" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Responsiveness</td>
                                    <td>
                                        <img src={Responsiveness} alt="Show icon for responsiveness" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}