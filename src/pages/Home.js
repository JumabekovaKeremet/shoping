import Header from "../components/Header/Header";
import headerImage from "../assets/bluse.jpg"; 

function Home() {
  return (
    <>
      <Header title="Shop" image={headerImage}>
      In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork. In casual settings, however, it is cut into wedges to be eaten while held in the hand.
      </Header>
    </>
  );
}
export default Home;