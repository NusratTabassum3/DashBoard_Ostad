import Expenses from "./components/Expenses";
import Today from "./components/Today";
import Monday from "./components/Monday";
import Money from "./components/Money";
import SaveMoney from "./components/SaveMoney";
Money;
function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="">
          <Expenses />
          <Today />
          <Monday />
        </div>
        <div className="lg:bg-[#F9FAFC]  min-h-screen bg-white">
          <Money />
          <SaveMoney />
        </div>
      </div>
    </>
  );
}

export default Home;
