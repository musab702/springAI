import React, { useState } from "react";

function Chat() {
    const [prompt, setPrompt] = useState('');
    const [chatResponse, setChatResponse] = useState('');

    const askAI = async()=>{
        try {
       
            const response = await fetch(`http://localhost:8080/ask-ai-options?prompt=${prompt}`)
            const data = await response.text();
            console.log(data);
            setChatResponse(data);
            
        } catch (error) {
            console.error("Error generating chat response: ", error)
            
        }
    };

    return (
        <div>
            <h2>Talk to AI</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e)=> setPrompt(e.target.value)}
                placeholder="Enter a Prompt for AI"
            />
            <button onClick={askAI}>Ask AI</button>
            <div className="output">
                <p>{chatResponse}</p>
            </div>              
            
        </div>
    );
}

export default Chat