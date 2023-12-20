import React from "react";
import ChildComponent from "./ChildComponents";
import FormComponent from "./FormComponents";
class MyComponent extends React.Component {
    state = {
        name: "Nguyen Nha",
        age: 20,
        arrJobs: [
            { id: '001', title: 'java' },
            { id: '002', title: 'c#' },
            { id: '003', title: 'js' }
        ]
    }

    handleOnchangeInput = (envent) => {
        this.setState({
            name: envent.target.value
        })
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }
    render() {
        return (
            <div className="text-green-600 text-lg font-bold">
                <input className="bg-black border-solid" type="text" value={this.state.name} onChange={(event) => this.handleOnchangeInput(event)} />
                My Component with my name {this.state.name}

                <br />

                <FormComponent addJob={this.addNewJob} />
                <ChildComponent name={this.state.name} age={this.state.age} arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
                {/* <ChildComponent name={'Nguyen Hung'} age={12} /> */}
            </div>
        )
    }
}
export default MyComponent;