import React,{Component} from 'react'
export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={count:0};
        this.reduce = this.reduce.bind(this);
    }

    add=()=>{
        let count=this.state.count;
        this.setState({count:count+1});
        this.props.calculate(1);
    }
    reduce(){
        let count=this.state.count;
        this.setState({count:count-1});
        this.props.calculate(-1);

    }
    render() {
        return(
            <div>
                <button  onClick={this.add}>+</button>
                <button  onClick={this.reduce}>-</button>

                    <span>{this.state.count}</span>
            </div>
        );
    }

}
