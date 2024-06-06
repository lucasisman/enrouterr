import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => <h1>Bienvenida</h1>;

const DisplayNumber = ({ match }) => {
    const { number } = match.params;
    return <h1>{number}</h1>;
};

const DisplayWord = ({ match }) => {
    const { word } = match.params;
    return <h1>{word}</h1>;
};

const StyledWord = ({ match }) => {
    const { word, textColor, bgColor } = match.params;
    const style = {
        color: textColor,
        backgroundColor: bgColor,
    };
    return <h1 style={style}>{word}</h1>;
};

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/:number" render={props => isNaN(props.match.params.number) ? <DisplayWord {...props} /> : <DisplayNumber {...props} />} />
                <Route exact path="/:word/:textColor/:bgColor" component={StyledWord} />
            </Switch>
        </Router>
    );
}

export default App;
