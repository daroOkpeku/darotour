import React, { Component } from 'react'
import "../Tour/Tour.scss"
export default class Tour extends Component {
    state = {
        display: false,
    }
    shock = () => {
        this.setState({
            display: !this.state.display
        })
    }
    render() {

        const { id, city, img, info } = this.props.one
        const { removeId } = this.props
        console.log(this.props.one)
        console.log(this.props)
        return (
            <article className="tour">
                <div className="container">
                    <img src={img} alt="image" />
                    <span className="close" onClick={() => removeId(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <aside className="tourInfo">
                    <h3>{city}</h3>
                    <h4>info<span onClick={this.shock}><i className="fas fa-caret-square-down" /></span></h4>
                    {this.state.display ? <p> {info}</p> : null}


                </aside>
            </article>
        )
    }
}
