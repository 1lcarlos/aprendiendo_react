import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <>
    <section className="App">
      <TwitterFollowCard isFollowwing={false} userName="Antonio" name={"Antonio Jose Jimenez"} />
      <TwitterFollowCard isFollowwing userName="lcarlos" name={"Luis Carlos Ramirez"} />
      <TwitterFollowCard userName="ElonMusk" name={"Elon musk"} />
      <TwitterFollowCard userName="Kata" name={"Katalina Butista"} />
    </section>
    </>
  );
}
