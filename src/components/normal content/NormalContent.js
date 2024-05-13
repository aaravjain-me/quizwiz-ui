import React from "react";
import EasyToUse from "../../assets/easy to use.jpg";
import Free from "../../assets/free of cost.jpg";
import FrequentUpdates from "../../assets/frequent updates.jpg";
import OpenForAll from "../../assets/open for all.jpg";
import QuickResponses from "../../assets/quick responses.jpg";
import Responsiveness from "../../assets/responsiveness.jpg";
import "./NormalContent.css";

function NormalContent() {
    return (
        <div>
            <h1>Why Quizwiz</h1>
            <div>
                {/* Create table so that content apppears in a single line */}
                <table>
                    <tbody>
                        <tr>
                            <td className="a1">Easy to use system</td>
                            <td>
                                <img src={EasyToUse} alt="display icon for easy to use" />
                            </td> 
                        </tr>
                        <tr>
                            <td className="a1">Free of cost</td>
                            <td>
                                <img src={Free} alt="display icon for free of cost" />
                            </td>
                        </tr>
                        <tr>
                            <td className="a1">Frequent updates</td>
                            <td>
                                <img src={FrequentUpdates} alt="display icon for frequent updates" />
                            </td>
                        </tr>
                        <tr>
                            <td className="a1">Open For All</td>
                            <td>
                                <img src={OpenForAll} alt="display icon for open for all" />
                            </td>
                        </tr>
                        <tr>
                            <td className="a1">Quick Responses</td>
                            <td>
                                <img src={QuickResponses} alt="display icon for quick responses" />
                            </td>
                        </tr>
                        <tr>
                            <td className="a1">Responsiveness</td>
                            <td>
                                <img src={Responsiveness} alt="display icon for responsiveness" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NormalContent;