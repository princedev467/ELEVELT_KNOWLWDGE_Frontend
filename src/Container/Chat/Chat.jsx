import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import TextForm from '../../Admin/Component/TextForm/TextForm';

function Chat(props) {

    const [to, setTo] = useState("")
    const [msg, setMsg] = useState("")
    const [allmsg, setAllmsg] = useState([])
    const [group,setGroup]=useState('');


    const socket = useMemo(() => io("http://localhost:4040"), []);

    socket.on('connect', () => {
        console.log("soket id:", socket.id);

    });
    socket.on('welcome', (messsage) => {
        console.log(messsage);

    });

    useEffect(() => {
        socket.on("recieve_msg", (Message) => {
            console.log("Message:", Message)
            setAllmsg((prev) => ([...prev, Message]))
        });
    }, [])

    socket.on("message", (Message) => console.log("Message:", Message));

    console.log("allmsg", allmsg);


    // const handlesubmit = (val) => {

    //     console.log(val.Message);

    //     const Message = val.Message
    //     socket.emit("Private_message", Message)


    // }

    const handleSubmit = () => {
        event.preventDefault();

        console.log(to, msg);

        socket.emit('send_msg', { to, msg })
    }

    const handleGroupSubmit =()=>{
         event.preventDefault();

          socket.emit('create_Group',group )

          console.log(group);
          
    }

    return (
        <div>
            {
                allmsg.map((m) => (
                    <p>{m}</p>
                ))
            }
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='to'
                    placeholder='enter sender id'
                    onChange={(event) => setTo(event.target.value)}
                />
                <br />
                <input type="text"
                    name='msg'
                    placeholder='enter message'
                    onChange={(event) => setMsg(event.target.value)}
                /> <br />
                <input type="submit" />
            </form>

            <br /><br />
            <form onSubmit={handleGroupSubmit}>
                <input type="text"
                    name='msg'
                    placeholder='enter group name'
                    onChange={(event) => setGroup(event.target.value)}
                /> <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Chat;