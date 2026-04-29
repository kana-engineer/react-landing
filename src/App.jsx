import Business from "./Components/Business";
import Cards from "./Components/Cards";
import Content from "./Components/Content";
import Design from "./Components/Design";
import Header from "./Components/Header";
import Overlay from "./Components/Overlay";
import Unseen from "./Components/Unseen";

export function App() {
  return (
    <>
      <Header/>
      <Overlay/>
      <Content/>
      <Cards/>
      <Unseen/>
      <Business/>
      <Design/>
    </>
  )
}

