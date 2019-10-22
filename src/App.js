import React from 'react';
import {Game, Score, ProgressBar} from './components';
import './App.css';
import { connect } from 'react-redux';
import { getColorsSaga, startCounter, incrementScore } from './actions';

class App extends React.Component {

    onSquareClick = (color) => {
        this.colorsCheckup(color);
        this.props.getColorsSaga();
        this.props.startCountdown();
    }

    colorsCheckup = (color) => {
        if (color === this.props.colorToGuess) {
            this.props.incrementScore();
        }
    }

    componentDidMount = () => {
        this.props.getColorsSaga();
    }

    render() {
        return (
            <div className='app'>
                <h2 className='heading'>Pick a color to start 🛠</h2>
                <Game
                    onSquareClick={this.onSquareClick}
                    colors={this.props.colors}
                    textColors={this.props.textColors}
                    colorToGuess={this.props.colorToGuess}
                />
                <Score score={this.props.score} />
                <ProgressBar progress={this.props.timeLeft*100/10} timeLeft={this.props.timeLeft}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    colors: state.colors,
    textColors: state.textColors,
    colorToGuess: state.colorToGuess,
    timeLeft: state.timeLeft,
    score: state.score
});

const mapDispatchToProps = (dispatch) => ({
    getColorsSaga: () => dispatch(getColorsSaga()),
    startCountdown: () => dispatch(startCounter()),
    incrementScore: () => dispatch(incrementScore())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
