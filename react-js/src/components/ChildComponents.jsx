import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleClick = (e) => {
        this.setState(
            {
                showJobs: !this.state.showJobs
            }
        )
    }

    handleDelete = (item) => {
        this.props.deleteJob(item)
    }

    componentDidMount() {

    }
    render() {
        let arrJob = this.props.arrJobs
        let status = this.state.showJobs;
        let check = status;
        return (
            <React.Fragment>
                {status === false ? <div><button className="bg-blue-500 text-black" onClick={(e) => this.handleClick(e)}> Show</button></div>
                    :
                    <React.Fragment>
                        <div className="arrJobs">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title} <></> <span className="cursor-pointer" onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div><button className="bg-blue-500 text-black" onClick={(e) => this.handleClick(e)}>Hide</button></div>
                    </React.Fragment>
                }
            </React.Fragment >
        )
    }
}

export default ChildComponent;
