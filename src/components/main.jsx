import './main.css'
import Posts from './posts'
import Stories from './stories'
import post1 from '../assets/posts/post-1.jpg'
import post2 from '../assets/posts/post-2.jpg'
import post3 from '../assets/posts/post-3.jpg'
import profile1 from '../assets/posts/profile1.jpg'


function Main() {
    return (
        <main className='main-container'>
            <Stories />
            <Posts profileImage={profile1} postImage={post1} postParagraph={"arthur.codes01 •"} postTime={"5pm"} postCaptions={"arthur.codes01 • Is there a possibility to live in Mars?"}/>
            <Posts profileImage={profile1} postImage={post2} postParagraph={"arthur.codes01 •"}  postTime={"4am"} postCaptions={"arthur.codes01 • Italy and its history"}/>
            <Posts profileImage={profile1} postImage={post3} postParagraph={"arthur.codes01 •"} postTime={"8pm"}  postCaptions={"arthur.codes01 • Aviation"}/>

        </main>
    )
}

export default Main