/* eslint-disable react/prop-types */
import sendBtn from '../assets/send.svg'
import userIcon from '../assets/randomuser.jpg'
import gptImgLogo from '../assets/chatgptLogo.svg'
import { useEffect, useRef } from 'react'

function MainInterface({
    input,
    setInput,
    chatResponse,
    setChatResponse,
    postInput,
}) {
    const msgEnd = useRef(null)

    useEffect(() => {
        msgEnd.current.scrollIntoView()
    }, [chatResponse])
    return (
        <div className="main">
            <div className="container1">
                <div className="container2">
                    <div className="chats">
                        {chatResponse.map((chat, i) => (
                            <div
                                key={i}
                                className={chat.isBot ? 'chat bot' : 'chat'}
                            >
                                <img
                                    className="chatimg"
                                    src={chat.isBot ? gptImgLogo : userIcon}
                                    alt="chatGPT Logo"
                                />
                                <p className="txt">
                                    {typeof chat.text === 'string'
                                        ? chat.text
                                        : chat.text?.text || ''}
                                </p>
                            </div>
                        ))}

                        <div ref={msgEnd} />
                    </div>
                </div>
            </div>
            <div className="chatFooter">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        postInput()
                        setChatResponse((prevChatResponse) => [
                            ...prevChatResponse,
                            { text: input, isBot: false },
                        ])
                        setInput('')
                    }}
                >
                    <div className="inp">
                        <input
                            type="text"
                            placeholder="Send a message"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                        />
                        <button type="submit" className="send">
                            <img src={sendBtn} alt="Send button" />
                        </button>
                    </div>
                </form>
                <p>
                    Free Research Preview. JivGPT may produce inaccurate
                    information about people, places, or facts.
                    <u>JivGPT September 25 Version</u>
                </p>
            </div>
        </div>
    )
}
export default MainInterface
