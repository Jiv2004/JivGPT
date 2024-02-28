/* eslint-disable react/prop-types */
import gptLogo from '../assets/chatgpt.svg'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'
import rocket from '../assets/rocket.svg'
const Sidebar = ({ setInput, postInput }) => {
    return (
        <div className="sideBar">
            <div className="upperSide">
                <div className="upperSideTop">
                    <img src={gptLogo} alt="ChatGPT logo" className="logo" />
                    <span className="brand">JivGPT</span>
                </div>
                <button
                    className="midBtn"
                    onClick={() => {
                        window.location.reload()
                    }}
                >
                    <img src={addBtn} alt="new chat" className="addBtn" />
                    New Chat
                </button>
                <div className="upperSideBottom">
                    <button
                        className="query"
                        onClick={() => {
                            setInput('What is Programming?')
                            postInput()
                        }}
                    >
                        <img src={msgIcon} alt="query" />
                        What is Programming?
                    </button>
                    <button
                        className="query"
                        value={'How to use an API?'}
                        onClick={() => {
                            setInput('How to use an API?')
                            postInput()
                        }}
                    >
                        <img src={msgIcon} alt="query" />
                        How to use an API?
                    </button>
                </div>
            </div>
            <div className="lowerSide">
                <div className="listItems">
                    <img src={home} alt="home icon" className="listItemsImg" />
                    Home
                </div>
                <div className="listItems">
                    <img
                        src={saved}
                        alt="saved icon"
                        className="listItemsImg"
                    />
                    Saved
                </div>
                <div className="listItems">
                    <img
                        src={rocket}
                        alt="rocket icon"
                        className="listItemsImg"
                    />
                    Upgrade to Pro
                </div>
            </div>
        </div>
    )
}
export default Sidebar
