import React from 'react';
import Header from "../component/Header";
import TimeSetter from "../component/TimeSetter";

function WarningTimeSetter(props) {
    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <Header content={"set warning time"} />
            <TimeSetter />
        </div>
    );
}

export default WarningTimeSetter;