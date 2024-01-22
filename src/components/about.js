import React from "react";
import UserClass from "./userClass";

const About = ()=>{
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is React Practise Project</h2>
        </div>
    )
};

class ABoutClass extends React.Component{
    render(){
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is React Practise Project(AboutClass)</h2>
                <UserClass name="Kumar Badal" gmail="testfood@support.in" />
            </div>
        )
    }
};

export default ABoutClass;