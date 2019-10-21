import React from 'react';
import {Game, Score, ProgressBar} from './components';
import './App.css';
import { connect } from 'react-redux';
import { getColorsSaga } from './actions';

class App extends React.Component {

    onSquareClick = () => {
        getColorsSaga();
    }

    componentDidMount = () => {
        getColorsSaga();
    }

    render() {
        return (
            <div className="app">
                <Game
                    onSquareClick={this.onSquareClick}
                    colors={this.props.colors}
                />
                <Score score={0} />
                <ProgressBar progress={10} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    colors: state.colors
});

const mapDispatchToProps = (dispatch) => ({
    getColorsSaga: () => dispatch(getColorsSaga()),
    // startTimer: () => dispatch(startTimer())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
