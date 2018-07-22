import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.inputText = React.createRef();
    }

    multiple = () => {
        const multiplier = this.inputText.current.value
        const onMultiple = this.props.onMultiple;
        onMultiple(this.props.index, multiplier)
    }

    incrementAsync=()=>{
       const onIncrementAsync = this.props.onIncrementAsync;
        const index = this.props.index;
        setTimeout(()=>{onIncrementAsync(index)},1000);

    }
    render() {
        const {value, onIncrement, onIncrementAsync,onDecrement, index} = this.props;
        return (
                <p>
                    Clicked: {value} times
                    {' '}
                    <button onClick={()=>onIncrement(index)}>
                        +
                    </button>
                    <button onClick={this.incrementAsync}>
                        Increment Async
                    </button>
                    <button onClick={()=>onDecrement(index)}>
                        -
                    </button>
                    <input type="text" defaultValue={0} ref={this.inputText}/>
                    <button onClick={this.multiple}>
                        *
                    </button>
                    <br/>
                </p>
        );
    }
}

export default Counter;
