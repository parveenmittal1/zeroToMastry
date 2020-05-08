import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className=' tc bg-light-red dib  br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${this.props.id}?100x100`} alt="robots" />
                <div>

                    <p>{this.props.id}</p>
                    <h1>{this.props.name} </h1>
                    <h1>{this.props.username}</h1>
                    <p>{this.props.email}</p>

                </div>
            </div>
        )
    }
}
export default Card;