import SourceCurrencyValue from "../SourceCurrencyValue";
import "./style.css";

const ButtonForm = ({ convertValue }) => (


    <button
    onClick={() => convertValue()}
    >
        Przelicz walutę!
    </button>
);

export default ButtonForm; 