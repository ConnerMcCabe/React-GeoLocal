import React, { Component } from 'react';
import './app.css';
import Map from '../components/Map';
import { getCurrentLatLng } from '../services/geolocation';


class App extends Component {

    async componentDidMount() {
        const {lat, lng} = await getCurrentLatLng();
        console.log(lat, lng);
    }

    render() {
        return (
            <div className="App">
                <Map />
                <header className="header">Test App</header>
            </div>
        )
    }
}

export default App;