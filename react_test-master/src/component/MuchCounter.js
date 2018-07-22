import React,{Component} from 'react'
import Counter from './Couter'

export default class MuchCounter extends Component {
    constructor(props) {
        super(props);
        this.state={summary:0};
    }
    calculate=(num)=>{
         let currentNum=this.state.summary;
         this.setState({summary:currentNum+num});
    }

    productMuchCouters(size){
        let counters=[];
        for (let i = 0; i < size; i++) {
            counters.push(<Counter calculate={this.calculate}/>);
        }
        return counters;
    }

    render(){
        return(
            <div>
                {this.productMuchCouters(this.props.size)}
                <p>总数为 <span>{this.state.summary}</span></p>
            </div>

        )
    }
}
