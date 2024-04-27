'use strict';

function About() {

    return (
        <React.Fragment>
            <h2>Welcome to my life...</h2>
            <p>Hello everyone, I'm Suelen, I'm 29 years old and I love to travel. </p>
            <img src="https://pbs.twimg.com/media/GKkDzzWXgAA5AjF?format=jpg&name=small" />
            <br></br>
            <a href="https://github.com/SuelenKarbivnychyy">Click here for my github profile </a>          
           
            
        </React.Fragment>

    );
}

ReactDOM.render(<About />, document.getElementById('about'));