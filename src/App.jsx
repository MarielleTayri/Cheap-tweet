import { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [    {
  name:"Amel",
  content: "enfin brf",
  like:1500,
},
{
  name:"Yannis",
  content: "yo",
  like:500,
},
{
  name:"Najib",
  content: "poète",
  like:300,
},
{
  name:"Lila",
  content: "zarma",
  like:1000,
},
];

function App() {
  let [tweets, setTweets] = useState(DEFAULT_TWEET);

  return (
    <div>
      <div className="tweet-container">
      <Tweet name="Amel" content= "enfin brf" like={1500} />
      <Tweet name="Yannis" content= "yo" like={500} />
      <Tweet name="Najib"content= "poète"like={300} />
      <Tweet name="Lila" content="zarma" like={1000}/>
      </div>
    </div>
  );
}
export default App;
