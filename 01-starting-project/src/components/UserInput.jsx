export default function UserInput({ onInvestmentChange, investmentValue }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentValue;

  return (
    <section id="user-input">
      <div className="input-group group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            onChange={(event) =>
              onInvestmentChange("initialInvestment", event.target.value)
            }
            value={initialInvestment}
          />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            onChange={(event) =>
              onInvestmentChange("annualInvestment", event.target.value)
            }
            value={annualInvestment}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECPTED RETURN</label>
          <input
            type="number"
            onChange={(event) =>
              onInvestmentChange("expectedReturn", event.target.value)
            }
            value={expectedReturn}
          />
        </div>
        <div>
          <label>DURATION</label>
          <input
            type="number"
            onChange={(event) =>
              onInvestmentChange("duration", event.target.value)
            }
            value={duration}
          />
        </div>
      </div>
    </section>
  );
}
