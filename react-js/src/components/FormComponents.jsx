import React from "react";
import { toast } from 'react-toastify';
class FormComponent extends React.Component {
    state = {
        id: "",
        title: ""
    }
    handleId = (e) => {
        this.setState({
            id: e.target.value
        })
    }
    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleOnclick = (e) => {
        e.preventDefault();
        if (!this.state.id || !this.state.title) {
            toast.error('Missing required')
            return;
        }
        console.log('>>>> check data input: ', this.state);
        this.props.addJob({
            id: this.state.id,
            title: this.state.title
        });

        this.setState({
            id: '',
            title: ''
        })
        toast.success('Add success')
    }

    render() {
        return (
            <div>
                <form className="flex flex-col gap-2 p-4 bg-blue-100 rounded-md justify-center items-center">
                    <h2 className="mt-6">Login</h2>
                    <label htmlFor="id">Id
                        :</label>
                    <input className="border-2 border-black mx-auto" type="text" id="id" value={this.state.id
                    } onChange={(e) => this.handleId(e)} required />

                    <label htmlFor="title">Title
                        :</label>
                    <input className="border-2 border-black mx-auto" type="text" id="title" value={this.state.title
                    } onChange={(e) => this.handleTitle(e)} required />

                    <button className="bg-blue-500 text-white rounded-md p-2" onClick={(e) => this.handleOnclick(e)} type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;
