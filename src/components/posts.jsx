import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import './posts.css'
import { FiRepeat } from "react-icons/fi";


function Posts({profileImage, postImage, postParagraph, postTime, postCaptions}) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(7);
    let comments = 2;
    let repost = 5

    const [saved, setSaved] = useState(false);

    function handleLike() {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    }

    function handleSave() {
        setSaved(!saved);
    }

    return (

        <div className="main">

            <article>

                <div className="header">
                    <img src={profileImage} alt="profile picture" />
                    <p>{postParagraph}</p>
                    <span>{postTime}</span>
                    <button className="more" style={{ background: "none" }}>...</button>
                </div>

                <div className="post">
                    <img src={postImage} alt="post picture" />

                </div>

                <div className="footer">
                    <button onClick={handleLike} style={{ background: "none" }}>
                        {liked ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
                    </button>
                    <span>{likes} </span>

                    <button style={{ background: "none" }}><HiOutlineChatBubbleOvalLeft size={22} /></button>
                    <span>{comments}</span>

                    <button style={{ background: "none" }}><FiRepeat size={20} /></button>
                    <span>{repost}</span>

                    <button style={{ background: "none" }}><IoPaperPlaneOutline size={20} /></button>

                    <button className="marker" style={{ background: "none" }} onClick={handleSave}>
                        {saved ? <FaBookmark size={20} /> : <FiBookmark size={22} />}
                    </button>
                </div>

                <div className="captions">
                    <p>{postCaptions}</p>
                </div>
                <div className="translate">
                    <p> See translation</p>
                </div>
            </article>

        </div>

    )
}

export default Posts