import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage(props) {



    const [data, setDate] = useState([]);
    const [selecteddata, setSelectedData] = useState([])
   

    const {id}= useParams();
   
    const display = async () => {
        const Responce = await fetch('http://localhost:3000/test');
        const user = await Responce.json()
        console.log(user);
        setDate(user)

    let fdata=user.filter((v)=>v.id===id);
        console.log(fdata);
        
        setSelectedData(fdata)

    }

    useEffect(() => {
        display()
    }, [])

    return (


        <div>
            <h1>prince</h1>
           
            {
                selecteddata.map((v)=>(
             <div key={v.id} className="card">
            <h1>Name :{v.name}</h1>
            <h4>Description : {v.Description}</h4>
           {}
          </div>
                
                ))
            }
        

        </div>
    );
}

export default CategoryPage;