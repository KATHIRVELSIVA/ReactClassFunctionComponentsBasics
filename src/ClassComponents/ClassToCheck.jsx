import React, { Component } from "react";

//Defining class component by extending React.Component or React.PureComponent
class ClassComponent extends Component {

    //Defining constructor if necessary
    constructor(props) {
        super(props);
        //Initialize the state if needed
        this.state = {
            count: 0,
            data: null
        };
    }

    //Define lifecycle method if necessary
    componentDidMount() {
        //Code to run after the component mounted
        console.log("Component has been mounted");
        this.fetchData();
    };

    //Component update options
    componentDidUpdate(prevProps, prevState) {
        console.log("Component has been updated");
        //Check if the data has changed
        if (prevState !== this.state.data) {
            //Data has changed
            console.log("Data has been updated", this.state.data);
        }
    }

    componentWillUnmount() {
        //Clean up tasks before the component is unmounted
        console.log('Component will unmount');
        //For example, remove event listeners, cancel ongoing tasks,etc.
    }

    fetchData() {
        //Simulate fetching data from an API
        setTimeout(() => {
            this.setState({ data: "Some data fetched from API" });
        }, 1000);
    }


    //Define instance method if necessary
    handleClick = () => {
        //Update state or perform other logics
        this.setState({ count: this.state.count + 1 });
    };

    //Decreasing event
    handleDecrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1>Class Component methods</h1>
                <p>Data:{this.state.data}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Click here to add</button>
                <button onClick={this.handleDecrease}>Click here to subtract</button>

            </div>
        )
    }
}
export default ClassComponent;