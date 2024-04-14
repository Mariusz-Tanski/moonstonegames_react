import React from "react";

export const MobileUnavailable = () => {
    return (
        <div>
            <div>
                <p className="mi-description  " style={{paddingTop: "4rem"}}>ICO action is available from PC only,
                    mobile is not supported </p>
            </div>
            <img style={{width: "50%", height: "100%", paddingTop: "4rem"}}
                 src="https://moonstone.gg/wp-content/uploads/2021/11/logo.png"
                 alt=""/>
        </div>
    )
}
