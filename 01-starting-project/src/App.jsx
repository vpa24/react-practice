import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const INVESTMENT = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 10,
};
function App() {
  const [investment, setInvestment] = useState(INVESTMENT);

  const inputIsValid = investment.duration > 0;
  function handleInvestmentValue(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  ) {
    setInvestment((prevInvest) => {
      return {
        ...prevInvest,
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput
        onInvestmentChange={handleInvestmentValue}
        investmentValue={investment}
      />
      {!inputIsValid && <p>Please enter duration greater than zero.</p>}
      {inputIsValid && <Result investmentObj={investment} />}
    </>
  );
}

export default App;
