import React, { useEffect, useState } from 'react'

function Chatpg() {
    const [chats, setChats]=useState([]);

    const getData=async ()=>{
        let data=await fetch("/chat");
        data=await data.json();

        setChats(data);

        console.warn(data);
    }

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div>
        <ul>
            {
                chats.map((chat)=>{
                    return (
                        <li key={chat._id}>{chat.chatName}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Chatpg