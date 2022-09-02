import { Data } from "./styled"
import { useCurrentDate } from "./useCurrentDate";

const TimeAndDate = () => {
    const date = useCurrentDate();

    return (
        <Data>
            Dzisiaj jest {date.toLocaleString(undefined, {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
            })}
        </Data>
    );
};

export default TimeAndDate;