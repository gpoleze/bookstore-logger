import React, {Component} from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
    render() {
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>

                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="#">Company</a>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Writers</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Books</a></li>

                        </ul>
                    </div>
                </div>

                <div id="main">
                    <div className="header">
                        <h1>Writer's Registrar</h1>
                    </div>

                    <div className="content">

                        <div className="pure-form pure-form-aligned">
                            <form className="pure-form pure-form-aligned">
                                <div className="pure-control-group">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" name="name" value=""/>
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" value=""/>
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" name="password"/>
                                </div>
                                <div className="pure-control-group">
                                    <label></label>
                                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                        <div>
                            <table className="pure-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Alberto</td>
                                    <td>alberto.souza@caelum.com.br</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
