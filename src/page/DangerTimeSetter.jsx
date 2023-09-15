import React from 'react';
import Header from "../component/Header";
import TimeSetter from "../component/TimeSetter";

function DangerTimeSetter(props) {
    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <Header content={"set danger time"} />
            <TimeSetter />
        </div>
    );
}

export default DangerTimeSetter;