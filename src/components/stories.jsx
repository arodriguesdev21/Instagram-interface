import { useState } from "react"
import './stories.css'
import avatar from "../assets/stories/avatar.jpg";
import avatar2 from "../assets/stories/avatar-2.jpg";
import avatar3 from "../assets/stories/avatar-3.jpg";
import avatar4 from "../assets/stories/avatar-4.jpg";
import avatar5 from "../assets/stories/avatar-5.jpg";
import avatar6 from "../assets/stories/avatar-6.jpg";
import avatar7 from "../assets/stories/avatar-7.jpg";
import avatar8 from "../assets/stories/avatar-8.jpg";
import avatar9 from "../assets/stories/avatar-9.jpg";


function Stories() {

    const users = [
        { id: 1, name: "joao.s", img: avatar },
        { id: 2, name: "ju.snt", img: avatar2 },
        { id: 3, name: "marcel.b", img: avatar3 },
        { id: 4, name: "arthur.js", img: avatar4 },
        { id: 5, name: "pam", img: avatar5 },
        { id: 6, name: "rose.kim", img: avatar6 },
        { id: 7, name: "kashi.22", img: avatar7 },
        { id: 8, name: "oldcars", img: avatar8 },
        { id: 9, name: "skt4rever", img: avatar9 },
    ];
    return (
        <nav className="container">
            <div className="btn1">
                <button>‹</button>
            </div>

            <div className="stories-container">
                {users.map((user) => (
                    <div key={user.id} className="story">
                        <img src={user.img} alt={user.name} />
                        <span>{user.name}</span>
                    </div>
                ))}
            </div>

            <div className="btn2">
                <button>›</button>
            </div>

        </nav>
    )
}

export default Stories