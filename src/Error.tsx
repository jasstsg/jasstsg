import { useRouteError } from "react-router-dom";
import Header from "./sections/header/Header";
import Footer from "./sections/footer/Footer";

function Error() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error;