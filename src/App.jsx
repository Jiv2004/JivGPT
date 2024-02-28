import './App.css'
import axios from 'axios'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainInterface from './components/MainInterface'

function App() {
    const [input, setInput] = useState('')
    const [chatResponse, setChatResponse] = useState([
        {
            text: "Hi I am JivGPT, a computer program developed by Jiv. I am based on the GPT-3.5 architecture, which stands for Generative Pre-trained Transformer 3.5. I'm designed to understand and generate human-like text based on the input provided to me. You can ask me questions, seek information, or engage in conversations on a wide range of topics, and I'll do my best to assist you. How can I help you today?",
            isBot: true,
        },
    ])

    const postInput = async () => {
        const options = {
            method: 'POST',
            url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key':
                    'e3669e7e87msh2d5f5135627c5f7p147f99jsnad5d2dad2c34',
                'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com',
            },
            data: {
                question: input,
            },
        }

        try {
            const response = await axios.request(options)
            const resData = response.data
            console.log(resData)

            setChatResponse((prevChatResponse) => [
                ...prevChatResponse,
                { text: resData.answer, isBot: true },
            ])

            setInput('')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="App">
            <Sidebar setInput={setInput} postInput={postInput} />
            <MainInterface
                input={input}
                setInput={setInput}
                chatResponse={chatResponse}
                setChatResponse={setChatResponse}
                postInput={postInput}
            />
        </div>
    )
}

export default App
