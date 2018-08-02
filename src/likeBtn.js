
import Person from './likeBtn0'

// function Person(props) {
//     return (
//         <div className="person">
//             <h1>{props.name}</h1>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

        console.log('Person:', Person)
// export default Person

// // ReactDOM.render(<Person name="Slaawwa" age="26" />, document.querySelector('#p1'))

const app = (
    <div>
        <Person name="Slaawwa" age="26" />
        <Person name="Vika" age="25" />
    </div>
)

ReactDOM.render(app, document.querySelector('#app'))

//         console.log('DONE')
//         // return (
//         //     <button onClick={() => this.setState({ liked: true })}>
//         //         Like
//         //     </button>
//         // );
