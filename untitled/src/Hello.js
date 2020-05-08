import React ,{Component} from 'react';
import './Hello.css';
class Hello extends Component {
    render() {
        return (
            <div>
        <h1>Hello World</h1>
                <h2>{this.props.props}</h2>
            </div>
        )
    }
}
export default Hello;
