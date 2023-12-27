const Todo = (props) => {
    const handleClickDelete = (item) => {
        props.delete(item.id)
    }
    return (
        <div className='todo-container'>
            <div>{props.title}</div>
            {
                props.todos.map((item, index) => {
                    return (
                        <div key={item.id} className='todo-child'>
                            {item.id} - {item.title} <span onClick={() => handleClickDelete(item)} className="ml-2 cursor-pointer bg-yellow-400 text-black px-2 rounded">x</span>
                        </div>
                    )
                })
            }
            <hr className="mb-2" />
        </div>
    )
}

export default Todo;