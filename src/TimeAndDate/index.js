import React from 'react';
import { Clock } from "./styled";
import { useCurrentDate } from './useCurrentDate.js'

const TimeAndDate = () => {
    const date = useCurrentDate();
    return (
        <Clock>
            {`Dzisiaj jest ${date.toLocaleString(date, {
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
            })}`}
        </Clock>
    )
};

export default TimeAndDate