import React from 'react'
import { FcHome } from "react-icons/fc";
import {Link} from 'react-router-dom'

const Error = () => {
    
    return (
        <>
            <div>
                <h1 className="text-center display-3">NOT FOUND</h1>
                <div className="col-12 text-center my-5">
                    <img src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/svg/Error.png?raw=true" alt="Error"/>
                </div>
                <div>
                    <Link to='/' className="text-decoration-none text-dark shadow">
                        <h2 className="display-6 text-center border-bottom shadow"><FcHome className="h1 mx-4"/>RETURN TU HOME<FcHome className="h1 mx-4"/></h2>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Error
