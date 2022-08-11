import "./style.css";

const ButtonForm = ({ convertValue }) => (
    <button className="button"
        onClick={() => convertValue()}
    >
        Przelicz walutę!
    </button>
);

export default ButtonForm; 