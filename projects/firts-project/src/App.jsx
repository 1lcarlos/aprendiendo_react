import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const fortmatUserName = (userName) => `@${userName}`;
  return (
    <>
      <section className="App">
        <TwitterFollowCard
          isFollowwing={false}
          format={fortmatUserName}
          userName="Antonio"
        >
          Antonio Jose Jimenez
        </TwitterFollowCard>
        <TwitterFollowCard
          isFollowwing
          format={fortmatUserName}
          userName="lcarlos"
        >
          Luis Carlos Ramirez
        </TwitterFollowCard>
        <TwitterFollowCard
          isFollowwing
          format={fortmatUserName}
          userName="ElonMusk"
        >
          Elon musk
        </TwitterFollowCard>
        <TwitterFollowCard
          isFollowwing
          format={fortmatUserName}
          userName="Kata"
        >
          Katalina Butista
        </TwitterFollowCard>
      </section>
    </>
  );
}
