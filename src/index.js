import React from 'react';
import {createRoot} from 'react-dom/client';
import ContactApp from './components/ContactApp';

// styling
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <ContactApp />
);












// COUNTER APP

// function CounterDisplay({count}){
//     if (count === 0){
//         return <p>{count}</p>
//     }

//     if (count % 5 === 0 && count % 7 === 0){
//         return <p>FizzBuzz</p>
//     }

//     if (count % 5 === 0){
//         return <p>Fizz</p>
//     }

//     if (count % 7 === 0){
//         return <p>Buzz</p>
//     }

//     return <p>{count}</p>
// }

// function TombolTambahHandler({tambah}){
//     return (
//         <div>
//             <button onClick = {tambah}> + tambah</button>
//         </div>
//     )
// }

// function TombolKurangHandler({kurang}){
//     return (
//         <div>
//             <button onClick = {kurang}>- kurang</button>
//         </div>
//     )
// }

// function TombolHapusHandler({hapus}){
//     return (
//         <div>
//             <button onClick = {hapus}>hapus</button>
//         </div>
//     )
// }

// class CounterApp extends React.Component{
//     constructor(props){
//         super(props);

//         // inisialisasi nilai count di state
//         this.state = {
//             count: 0
//         };

//         // binding event handler
//         this.TombolTambahHandler = this.TombolTambahHandler.bind(this);
//         this.TombolKurangHandler = this.TombolKurangHandler.bind(this);
//         this.TombolHapusHandler = this.TombolHapusHandler.bind(this);
//     }

//     TombolTambahHandler(){
//         this.setState((e) => {
//             return {
//                 count: e.count + 1
//             };
//         });
//     }

//     TombolKurangHandler(){
//         this.setState((e) => {
//             return {
//                 count: e.count - 1
//             }
//         })
//     }

//     TombolHapusHandler(){
//         this.setState(() => {
//             return {
//                 count: 0
//             }
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <TombolTambahHandler tambah={this.TombolTambahHandler} />
//                 <CounterDisplay count={this.state.count} />
//                 <TombolKurangHandler kurang={this.TombolKurangHandler} />
//                 <TombolHapusHandler hapus={this.TombolHapusHandler} />
//             </div>
//         );
//     }
// }



// const counter = createRoot(document.getElementById('counter'));
// counter.render(
//     <CounterApp />
// )



// CONTROLLED COMPONENT

class MyForm extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            name: '',
            email: '',
            gender: 'Man'
        };
        // binding this untuk event handler
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(e){
        this.setState(() => {
            return {
                name: e.target.value
            };
        });
    }

    onEmailChangeEventHandler(e){
        this.setState(() => {
            return {
                email: e.target.value
            }
        })
    }

    onGenderChangeEventHandler(e){
        this.setState(() => {
            return {
                gender: e.target.value
            }
        })
    }
    
    onSubmitEventHandler(e){
        e.preventDefault();

        const message = `
            Name : ${this.state.name}
            Email: ${this.state.email}
            Gender : ${this.state.gender}
        `;

        alert(message);
    }

    render(){
        return (
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.onSubmitEventHandler}>
                    <label for="name">Name : </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                    <br />
                    <label for="email">email : </label>
                    <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeEventHandler}/>
                    <br />
                    <label for="gender">gender : </label>
                    <select id="gender" value={this.state.gender} onChange={this.OnGenderChangeEventHandler}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const form = createRoot(document.getElementById('form'));
form.render(<MyForm />);