import type { HistoryMessage } from "../App";

// export type result = {
//     user: string;
//     contents: string;
// }

export const PostCall = async (url: string, data: object): Promise<HistoryMessage> => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    let res: HistoryMessage = {
        author: "",
        contents: ""
    }
    fetch(url, requestOptions)
        // .then(response => {
            // res = response.json();
            // res.user = got['user'];
            // res.contents = got['contents'];
            // return  res
        // })
        .then(response => response.json())
        .then((data: HistoryMessage) => {
            res.contents = data?.contents
            res.author = data?.author
        })
    return res;
        // .then(data => {return data});
}