import "./App.css";

// TASK: Calculate tip
// FORMULA --> let total = (billAmt * serviceQual) / numOfPeople;
// Round to two decimal places
// total = Math.round(total * 100) / 100;
// Next line allows us to always have two digits after decimal point
// total = total.toFixed(2);
// Display the tip

function App() {
  return (
    <div id="container">
      <h1>Tip Calculator</h1>
      <div id="calculator">
        <form>
          <p>How much was your bill?</p>
          $ <input id="billamt" type="text" placeholder="Bill Amount" />
          <p>How was your service?</p>
          <select id="serviceQual">
            <option disabled selected value="0">
              -- Choose Tip Option --
            </option>
            <option value="0.3">30% - Outstanding</option>
            <option value="0.2">20% - Good</option>
            <option value="0.15">15% - It was OK</option>
            <option value="0.1">10% - Bad</option>
            <option value="0.05">5% - Terrible</option>
          </select>
        </form>
        <p>How many people are sharing the bill?</p>
        <input id="peopleamt" type="text" placeholder="Number of People" />{" "}
        <button type="button" id="calculate">
          Calculate!
        </button>
      </div>
      <div className="totalTip">
        <span>Total Tip: </span>
        <sup>$</sup>
        <span className="tip">0.00</span>
      </div>
      <div className="totalTip">
        <span>Total tip per person: </span>
        <sup>$</sup>
        <span className="tip">0.00</span>
        <small id="each">/person</small>
      </div>
    </div>
  );
}

export default App;
