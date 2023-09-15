import React from 'react';
import TimeSetter from "../component/TimeSetter";
import Header from "../component/Header";

function UrgentTimeSetter(props) {
    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <Header content={"set urgent time"} />
            <TimeSetter />
        </div>
    );
}

export default UrgentTimeSetter;