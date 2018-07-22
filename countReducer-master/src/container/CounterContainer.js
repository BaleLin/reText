import {connect} from 'react-redux'
import Counter from "../components/Counter";
import {decrement, increment, multiple,incrementAsync} from "../actions";


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onIncrementAsync:(index) => dispatch(incrementAsync(index)),
        onMultiple:(index, multipler) => dispatch(multiple(index,multipler)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)