import React, { Component } from 'react';
import './app.css';
import Map from '../components/Map';
import { getCurrentLatLng } from '../services/geolocation';


class App extends Component {

    state = {
        lat: null,
        lng: null
    }

    async componentDidMount() {
        const {lat, lng} = await getCurrentLatLng();
        this.setState({lat,lng});
    }

    render() {
        return (
            <div className="App">
                <Map lat={this.state.lat} lng={this.state.lng}/>
                <header className="header">ʕง•ᴥ•ʔง</header>
            </div>
        )
    }
}

export default App;