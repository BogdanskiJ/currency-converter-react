import React from 'react';
import "./style.css";
import { useCurrentDate } from './useCurrentDate.js'

const TimeAndDate = () => {

    const date = useCurrentDate();

    return (
        <div className="clock">
            {`Dzisiaj jest ${date.toLocaleString(date, {
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
            })}`}
        </div>
    )
}

export default TimeAndDate