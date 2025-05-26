import { useState } from 'react'
import './App.css'
import { ChatHistory } from './ChatHistory.tsx';

const AUTHOR="client"

export type HistoryMessage = {
  author: string;
  contents: string;
}

function App({}) {
  const [history, setHistory] = useState<HistoryMessage[]>([]);
  const [textArea, setTextArea] = useState<string | null>("");
  const [disableInput, setDisableInput] = useState<boolean>(false);

  
  const handleChange = (event: any) => {
    setTextArea(event.target.value);
  }
  const url = "http://127.0.0.1:8080/question/";
  const handleSubmit = async (event: React.SyntheticEvent) => {
    setDisableInput(true)
    event.preventDefault()
    const postQuestion = async (data: HistoryMessage) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      const response = await fetch(url, requestOptions)
      const responseJson: HistoryMessage = await response.json()
      console.log(responseJson)
      setHistory([...newHistory, responseJson])
      setDisableInput(false)
      }
  let newHistory = history;
  const data: HistoryMessage = {
    author: AUTHOR,
    contents: textArea || "",
  };
  newHistory = [...newHistory, data]
  setHistory([...history, data])
  postQuestion(data).then(res => console.log(res))
  setTextArea("")
  }
  
  return (
    <>
      <ChatHistory messages={history} />
      <form onSubmit={handleSubmit} style={{width: "400px"}}>
        <textarea
          name={"text"}
          placeholder='Ask the agent a question...'
          rows={10} cols={10}
          value={textArea || ""}
          onChange={handleChange}
          style={{width: "380px"}}/>
        <button className={"button"} disabled={disableInput}>Submit</button>
      </form>
    </>
  )
}

export default App
