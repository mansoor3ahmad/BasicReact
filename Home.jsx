function InputFields(prop){
    return (
        <>
            <div class="mb-3">
                <label for={prop.id} className="form-label">{prop.name}</label>
                <input id={prop.id} className="form-control" type={prop.type} placeholder={prop.placeholder} />
            </div>
        </>
    );
}

function HomePage(){
    const [names,setNames] = React.useState([]);
    const [roll,setRoll] = React.useState(1);

    function RemoveCard(roll){
        setNames(names.filter((item)=>{
            return item[0]!==roll;
        }));
    }

    function NameCard({roll, name, email="", phone=""}){
        return (
            <tr>
                <td>{roll}</td>
                <td><i>{name}</i></td>
                <td>{email}</td>
                <td>{phone}</td>
                <td><a onClick={()=>RemoveCard(roll)}>Delete</a></td>
            </tr>
        );
    }

    function AddNames(){
        const id = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        setNames(names.concat([[roll, id, email, phone]]));
        setRoll(roll+1);
    }

    return (
    <>
    <div>
        <form>
            <InputFields id="name" type="text" name="User Name" placeholder="Enter Username..."/>
            <InputFields id="email" type="email" name="Email address" placeholder="Enter Email..."/>
            <InputFields id="phone" type="tel" name="Phone Number" placeholder="Enter Phone Number..."/>
            <button className="btn btn-primary" onClick={AddNames}>Submit</button>
        </form>
        <br/>
        <table>
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