import type { HistoryMessage } from "./App";
import './App.css'

type ChatHistoryProps = {
    messages: HistoryMessage[];
}

export const ChatHistory = (props: ChatHistoryProps) => {

    return (
        <div className={"scroller"}>
            <div className={"scroller-content"}>
                {props.messages.map((message: HistoryMessage, index: number) => {
                    return (
                        <div className={"item"} key={index}>
                            <span style={{fontWeight: "bold", color: "blue", float: "left"}}>{message.author}: </span>{message.contents}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}