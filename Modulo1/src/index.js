import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './button';
import './styles.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  //   1- //componentDidMount() {}

  //   2- //shouldComponentUpdate(nextProps, nextState) {}

  //   3- //componentDidUpdate(prevProps, prevState) {}

  //   4- //componentWillUnmount() {}

  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
    // this.setState(state => ({ counter: state.counter + 1 }));
    // this.setState(
    //   {
    //     counter: this.state.counter + 1
    //   },
    //   () => console.log(this.state.counter)
    // );
  };

  render() {
    const { counter } = this.state;
    return (
      <Fragment>
        <h1>Hello, Suelen Helmann</h1>
        <Button onClick={this.handleClick}>Somar</Button>
        <h2>
          counter:
          {counter}
        </h2>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
