import { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [
  {
  id: 0,
  name:"Amel",
  content: "enfin brf",
  like:1500,
},
{
  id: 1,
  name:"Yannis",
  content: "yo",
  like:500,
},
{
  id: 2,
  name:"Najib",
  content: "poète",
  like:300,
},
{
  id: 3,
  name:"Lila",
  content: "zarma",
  like:1000,
},
];

function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);


  return (
    <div>
      <div className="tweet-container">
        {tweets.map((tweet) => {
    return (
      <Tweet
      key= {tweet.id}
      id= {tweet.id}
      name={tweet.name}
      content={tweet.content}
      like={tweet.like}
      onDelete= {(id) => {
        console.log("DELETE",id)
      }}
      />
    );
  })}
      </div>
    </div>
  );
}
export default App;
