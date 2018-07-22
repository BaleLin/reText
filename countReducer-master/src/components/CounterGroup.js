import React, {Component} from 'react';
import Counter from "../container/CounterContainer";
class CounterGroup extends Component {

    render() {
        const {amount,onIncrementAsync} = this.props;
        let counters = []

        for(let i = 0; i< amount; i++) {
            counters.push(<Counter
                            index={i}
                            key={i}
            />)
        }
        return (
            <div className="App">
                {counters}
            </div>);
    }
}

export default CounterGroup;
