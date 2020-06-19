import React, { Component} from 'react';
import './App.scss';


class App extends Component{
    render(){
        return (
            <header class="header"> 
                <div class="header__text-box"> 
                    <h1>
                        <span class="header__main-header">Justin Stewart</span>
                        <span class="header__sub-header">Web/Print portfolio</span>
                    </h1>
                    <a href="#" class="btn btn--black">explore</a>
                </div>
            </header>
        )
        }
}

export default App;