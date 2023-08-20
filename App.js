import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";


function App() {
  const [posts, setPosts] = useState([
    {
      username: "NEW GOALKEEPER!",
      message: "We are happy to announce our new goalkeeper, transferd from Brentford FC. RAYA",
      message1: "Mikel Arteta says Arsenal’s decision to recruit David Raya on loan from Brentford is underpinned by a desire to make the club “better every single day” and to ensure he has optimal cover between the sticks. In Arteta’s mind, it makes total sense to have two quality keepers, both capable of playing the type of football he wants. He also believes that Jurrien Timber’s ACL injury last weekend underlines just how fragile the squad-building process can be. Asked what Raya brings to the table, Arteta said: “Better qualities for our game model, very simple. And we want two players per position, that they can do that. “You saw what happened to Jurrien, it can happen to our goalkeeper, it happened to [Real Madrid’s Thibaut] Courtois. So you need to be prepared. “The question may be, ‘What is it with two goalkeepers of this size?’ But if Aaron were to sustain a cruciate [knee ligament injury], then what do you say? You then change the thing. So we have to be prepared, we have to be proactive. “We have two excellent goalkeepers now that fit exactly what we want in our model. So I’m very happy with that.” ",
      timestamp: new Date(),
      imageUrl: "https://wallpapers.com/images/hd/arsenal-fc-logo-on-gray-wall-tyohq9j7uyvga2hq.jpg",
    },
    {
      username: "ARSENAL CONFIRM TIMBER ACL INJURY + SURGERY",
      message: "Arsenal have confirmed that Jurrien Timber has suffered an ACL injury and requires surgery ahead of a period of rehabilitation.",
      message1:"In a statement issued this afternoon, they say: Further to detailed assessments with consultant specialists since Saturday, we can confirm that Jurrien Timber has sustained an injury to his anterior cruciate ligament in his right knee. Jurrien will undergo surgery in the coming days and will be out of action for a period of time. The support and expertise from our medical team and everyone at the club will now be focussed on Jurrien’s rehabilitation programme, to ensure he recovers well and is back playing as soon as possible. It is a big blow for the player and for the team, and it remains to be seen if this news will have any impact on transfer plans – whether that’s an addition, or a possible departure put on the back burner.",
      timestamp: new Date(),
    },
    {
      username: "ARSENAL COMPLETE SIGNING OF DECLAN RICE FROM WEST HAM",
      message: "Arsenal have completed the signing of Declan Rice from West Ham United for a club-record fee that could total as much as £105 million.",
      message1: "In a statement on the West Ham website, the Hammers state they “can confirm that agreement has been reached for Declan Rice to leave the Club for a British record transfer fee.” Joint-chairman David Sullivan adds: “Declan will forever hold a special place in the hearts of Hammers fans and everyone here at the Club. We wish him well for the future and he will always be an inspiration and an example to any young player coming through our Academy.” For whatever petty reason, West Ham have chosen not to mention that their former captain is moving to Emirates Stadium.",
      timestamp: new Date(),
    },
    {
      username: "KAI HAVERTZ REACTS TO HIS ARSENAL MOVE",
      message: "Kai Havertz says he’s excited to join Arsenal after completing a £65 million move from Chelsea.",
      message1: "The Germany international, 24, was on the books at Stamford Bridge for three seasons and scored the winner in their 2021 Champions League success but leaves the Blues with his former in a state of flux following last year’s takeover by Todd Boehly. ",
      timestamp: new Date(),
    },
  ]);
  return (
    <div>
      <Navbar />

      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            message1={post.message1}
            timestamp={post.timestamp}
            imageUrl={post.imageUrl} // Provide the image URL here
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;