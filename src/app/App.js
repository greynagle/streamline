import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import config from "../config";
import "./App.css";
import Landing from "../landing/landing";
import PDM from "../pdm/pdm";
import MFG from "../mfg/mfg";
import Routing from "../routing/routing";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            folders: [],
        };
    }

    // componentDidMount() {
    //     // // grabs all notes and folders from the local JSON server
    //     // Promise.all([
    //     //     fetch(`${config.API_ENDPOINT}/notes`),
    //     //     fetch(`${config.API_ENDPOINT}/folders`),
    //     // ])
    //     //     .then(([notesRes, foldersRes]) => {
    //     //         // if notes break, reject
    //     //         if (!notesRes.ok)
    //     //             return notesRes.json().then((e) => Promise.reject(e));
    //     //         // if folders break reject
    //     //         if (!foldersRes.ok)
    //     //             return foldersRes.json().then((e) => Promise.reject(e));

    //     //         return Promise.all([notesRes.json(), foldersRes.json()]);
    //     //     })
    //     //     .then(([notes, folders]) => {
    //     //         this.setState({ notes, folders });
    //     //     })
    //     //     .catch((error) => {
    //     //         console.error({ error });
    //     //     });
    // }

    // renderNavRoutes() {
    //     return (
    //         <>
    //             {/* for root and folders*/}
    //             {["/", "/folder/:folderId"].map((path) => (
    //                 <Route
    //                     exact
    //                     key={path}
    //                     path={path}
    //                     component={<div></div>}
    //                 />
    //             ))}
    //         </>
    //     );
    // }

    renderMainRoutes() {
        return (
            <>
                <Route exact path="/" component={Landing} />
                <Route path="/pdm" component={PDM} />
                <Route path="/mfg" component={MFG} />
                <Route path="/routing" component={Routing} />
            </>
        );
    }

    render() {
        // const value = {
        //     notes: this.state.notes,
        //     folders: this.state.folders,
        //     deleteNote: this.handleDeleteNote,
        //     addFolder: this.addFolder,
        //     addNote: this.addNote,
        // };
        return (
            // <ApiContext.Provider value={value}>
            <div className="App">
                <nav className="App_nav"></nav>
                <header className="App_header">
                    <h1>
                        <Link to="/">Streamline</Link>{" "}
                    </h1>
                </header>
                <main className="App_main">{this.renderMainRoutes()}</main>
            </div>
            // </ApiContext.Provider>
        );
    }
}

export default App;
