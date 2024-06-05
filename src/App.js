import React from "react";
import NewClient from "./components/NewClient";
import ClientList from "./components/ClientList";

const App = () => {
    return (
        <div>
            <NewClient />
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <ClientList />
        </div>
    );
};

export default App;
