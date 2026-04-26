import './right.css'
import { PiPaperPlaneTiltFill } from "react-icons/pi";



function RightSide() {
    return (
        <aside className='right'>
            <div className='main-box'></div>
            <div className='box-messages'>
                <PiPaperPlaneTiltFill size={25} color="#ffffff" />
                <span>Messages</span>
            </div>
        </aside>

    )
}

export default RightSide