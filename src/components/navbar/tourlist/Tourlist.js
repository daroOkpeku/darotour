import React, { Component } from 'react'
import "../tourlist/tour.scss"
import Tour from "../../../Tour";
import { tour } from "./data";
export default class Tourlist extends Component {
    state = {
        tourData: tour

    };


    removeId = (id) => {
        const sort = this.state.tourData.filter((item) => item.id !== id)
        this.setState({
            tourData: sort
        })

    }
    render() {
        const { tourData } = this.state;
        return (
            <div className="tourList">

                { this.state.tourData.map((item) => <Tour one={item} key={item.id} removeId={this.removeId} />)}
            </div>
        )
    }
}
