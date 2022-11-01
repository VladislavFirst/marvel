import ErrorMessage from "../errorMessage/errorMessage"
import { Link } from "react-router-dom"


const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'frontWeight': 'bold', 'frontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'frontWeight': 'bold', 'frontSize': '24px', 'marginTop': '30px'}} to="/">
                Back to main page
            </Link>
        </div>
    )
}

export default Page404;