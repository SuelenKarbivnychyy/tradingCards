'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <p>Welcome to the <i>Trade Cards game</i> </p>
      <a href='/cards'>Click here to go to the Game.</a>
      <img src='/static/img/balloonicorn.jpg'></img>
    </React.Fragment>

  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
