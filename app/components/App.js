import React, { Component } from 'react';

class App extends Component {
    onButtonClick(e){
        const btn = e.target;
        alert(`${btn.name} , ${btn.value}`);

    }

    render() {
        return (
            <div>
                <h1>Is React awesome?</h1>
                <button 
                    onClick={this.onButtonClick}
                    value='great'
                    name= 'button Great'
                >
                Great
                </button>
                <button 
                    onClick={this.onButtonClick}
                    value='awesome'
                    name= 'button Awesome'
                > 
                Awesome
                </button>
                <p>
Our click handler function receives an event object, evt. evt has an attribute target that is a reference to the button that the user clicked. This way we can access the button that the user clicked without creating a function for each button. We can then log out different messages for different user behavior.</p>
            </div>
        );
    }
}

export default App;