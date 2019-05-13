import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {thunkGetCandies} from '../reducers'
 class Candies extends React.Component {

     componentDidMount() {
         this.props.getCandies()

    }

    render() {
         console.log('PROPS!!!!!', this.props)
        return (
            <div className="container">
                <h2 style={{textAlign: 'center'}}>All the CANDIES!!!!!</h2>
                    <ul>
                    {this.props.candies.map(candy => {
                        return <h2 key={candy.id} style={{textAlign: 'center'}}>{candy.name}<img src={candy.imageUrl} alt={candy.name} /></h2>
     })}
       </ul>
    </div>
        )
    }
}


const mapState = state => {
    console.log(state)
    return {
        candies: state.candies
    }
};


const mapDispatchToProps = dispatch => {
    console.log(dispatch)

    return {
        // dispatching plain actions
        getCandies: () => dispatch(thunkGetCandies()),

    }
}

export default connect(mapState, mapDispatchToProps)(Candies)

/*
simplify code: react-redux
connect =
 */