import React from "react";
import { useState, useEffect } from "react";
const CountDown = () => {
    const [count, setCount] = useState(60);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Sử dụng hàm callback để đảm bảo sử dụng giá trị mới của count
            setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
        }, 1000);

        // Hạn chế side effect chỉ đến lần đầu tiên khi component được mount
        // (do đó, không cần thiết phải thêm count vào dependency array)
        return () => clearInterval(intervalId);
    }, [count])
    return (
        <div>Count down: {count}</div>
    )
}

// class CountDown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 10,
//         };
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState((prevState) => {
//                 if (prevState.count > 0) {
//                     return { count: prevState.count - 1 };
//                 } else {
//                     clearInterval(this.timer);
//                     // Thêm bất kỳ hành động nào bạn muốn khi count đạt đến 0
//                 }
//             });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }

//     render() {
//         return <div>{this.state.count} class</div>;
//     }
// }

export default CountDown