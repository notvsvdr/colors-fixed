import React from 'react';
import {Game, Score, ProgressBar} from './components';
import './App.css';
import { connect } from 'react-redux';
import { getColorsSaga, startCounter } from './actions';

class App extends React.Component {

    onSquareClick = () => {
        this.props.getColorsSaga();
        this.props.startCountdown();
    }

    componentDidMount = () => {
        this.props.getColorsSaga();
    }

    render() {
        return (
            <div className="app">
                <Game
                    onSquareClick={this.onSquareClick}
                    colors={this.props.colors}
                    textColors={this.props.textColors}
                    colorToGuess={this.props.colorToGuess}
                />
                <Score score={0} />
                <ProgressBar progress={this.props.timeLeft*100/10} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    colors: state.colors,
    textColors: state.textColors,
    colorToGuess: state.colorToGuess,
    timeLeft: state.timeLeft
});

const mapDispatchToProps = (dispatch) => ({
    getColorsSaga: () => dispatch(getColorsSaga()),
    startCountdown: () => dispatch(startCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
