// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Sign from './container/Sign';
import store from './store';
import Details from './container/Details';
import {Provider} from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/sign' component={Sign} />
                            <Route path='/topic/:page' component={Details} />
                        </div>
                        <div className="sider">
                            <img src={require('./right.png')} style={{width:270,height:500}}/>
                        </div>
                    </div>
                </div>
            </Router>
            </Provider>
        )
    }
}