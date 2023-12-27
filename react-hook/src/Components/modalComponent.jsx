import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewBlog from "./addBlogComponent";
function Popup() {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const buttonStyle = {
        backgroundColor: 'blue', // Set the background color of the buttons to blue
        color: 'white', // Set the text color of the buttons to white
        // Add other custom styles for the buttons if needed
        transition: 'background-color 0.3s, color 0.3s', // Add smooth transition for hover effect
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3', // Set a darker blue for hover effect
        color: 'white',
    };
    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);
    }
    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup;
