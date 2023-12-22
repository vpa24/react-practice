import logoImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <div>
        <img src={logoImg} alt="logo" />
        <h1>React Investment Calculator</h1>
      </div>
    </div>
  );
}
