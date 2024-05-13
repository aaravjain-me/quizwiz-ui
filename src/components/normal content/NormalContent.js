import React from "react";
import EasyToUse from "../../assets/easy to use.jpg";
import Free from "../../assets/free of cost.jpg";
import FrequentUpdates from "../../assets/frequent updates.jpg";
import OpenForAll from "../../assets/open for all.jpg";
import QuickResponses from "../../assets/quick responses.jpg";
import Responsiveness from "../../assets/responsiveness.jpg";

function NormalContent() {
    return (
        <div>
            <h1>Why Quizwiz</h1>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Easy to use system</td>
                            <td>
                                <img src={EasyToUse} alt="display icon for easy to use" />
                            </td> 
                        </tr>
                        <tr>
                            <td>Free of cost</td>
                            <td>
                                <img src={Free} alt="display icon for free of cost" />
                            </td>
                        </tr>
                        <tr>
                            <td>Frequent updates</td>
                            <td>
                                <img src={FrequentUpdates} alt="display icon for frequent updates" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}