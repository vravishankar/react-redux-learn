import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const App = () => {
    return ( 
        <div>
            <SearchBar />
            <VideoList />
        </div>
    )
}

ReactDOM.render( <App /> , document.getElementById("app"));
