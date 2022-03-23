import { Fragment } from "react/cjs/react.production.min";

import mealsImage from "../../assets/meals.jpg"
import classes from "../Layout/Header.module.css"
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton onClick={props.onShownCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="a table of delicious food"/>
        </div>
    </Fragment>
};

export default Header;