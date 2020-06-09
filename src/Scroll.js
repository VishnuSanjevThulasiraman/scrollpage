import React from 'react';
import { Dynamci, D } from './Dynamci';

class Scoll extends React.Component {

    state = {
        scrollPosition: 0
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100)

        this.setState({
            scrollPosition,
        });

        return scrollPosition;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.calculateScrollDistance(),
            1
        );
    }

    render() {
        return (
            <div>
                <Navyellow scroll={this.state.scrollPosition} />
            </div>
        );
    }


}

function Navyellow(props) {
    return (
        <div>
            <D />
            <Dynamci len={props.scroll} />

        </div>


    );
}

export default Scoll;