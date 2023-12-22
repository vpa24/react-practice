export default function UserInput({ onInvestmentChange, investmentValue }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentValue;

  function handleInvestmentChange(event) {
    onInvestmentChange(event.target.valueAsNumber, annualInvestment, expectedReturn, duration);
  }

  function handleAnnualChange(event) {
    onInvestmentChange(
      initialInvestment,
      event.target.valueAsNumber,
      expectedReturn,
      duration
    );
  }

  function handleExpectedChange(event) {
    onInvestmentChange(
      initialInvestment,
      annualInvestment,
      event.target.valueAsNumber,
      duration
    );
  }

  function handleDurationChange(event) {
    onInvestmentChange(
      initialInvestment,
      annualInvestment,
      expectedReturn,
      event.target.valueAsNumber
    );
  }

  return (
    <div id="user-input">
      <div className="input-group group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            onChange={handleInvestmentChange}
            value={initialInvestment}
          />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" onChange={handleAnnualChange} value={annualInvestment} />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECPTED RETURN</label>
          <input
            type="number"
            onChange={handleExpectedChange}
            value={expectedReturn}
          />
        </div>
        <div>
          <label>DURATION</label>
          <input
            type="number"
            onChange={handleDurationChange}
            value={duration}
          />
        </div>
      </div>
    </div>
  );
}
