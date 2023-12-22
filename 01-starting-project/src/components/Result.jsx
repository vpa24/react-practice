import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ investmentObj }) {
  const annualInvestmentResult = calculateInvestmentResults(investmentObj);
  const intitalInvestment =
    annualInvestmentResult[0].valueEndOfYear -
    annualInvestmentResult[0].interest -
    annualInvestmentResult[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Inverstment Capital</td>
        </tr>
      </thead>
      <tbody>
        {annualInvestmentResult.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            intitalInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
