import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function InputFields(prop){
  return (
    <>
        <div className="col mb-3">
            <label htmlFor={prop.id} className="form-label">{prop.name}</label>
            <input id={prop.id} className="form-control" type={prop.type} placeholder={prop.placeholder} />
        </div>
    </>
  );
}

function App(){
  const [names,setNames] = useState([]);
  const [roll,setRoll] = useState(1);

  function RemoveCard(removeRoll){
      setNames(names.filter((item)=>{
          return item[0]!==removeRoll;
      }));
  }

  function NameCard({roll, name, email="", phone=""}){
      return (
          <tr>
              <td>{roll}</td>
              <td><i>{name}</i></td>
              <td>{email}</td>
              <td>{phone}</td>
              <td onClick={()=>RemoveCard(roll)}><a href='#'>Delete</a></td>
          </tr>
      );
  }

  function AddNames(event){
      event.preventDefault();
      const id = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      setNames(names.concat([[roll, id, email, phone]]));
      setRoll(roll+1);
  }

  return (
  <>
  <div className="container-lg">
      <form>
        <div className="row">
          <InputFields id="name" type="text" name="User Name" placeholder="Enter Username..."/>
          <InputFields id="email" type="email" name="Email address" placeholder="Enter Email..."/>
          <InputFields id="phone" type="tel" name="Phone Number" placeholder="Enter Phone Number..."/>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" onClick={(event)=>AddNames(event)}>Submit</button>
        </div>
      </form>
      <br/>
      <table className="table">
          <thead>
              <tr>
                  <th>Roll Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
          {names.map((data)=>{
              return <NameCard roll={data[0]} name={data[1]} email={data[2]} phone={data[3]}/>
          })}
          </tbody>
      </table>
  </div>
  </>
  );
  
}

export default App;
