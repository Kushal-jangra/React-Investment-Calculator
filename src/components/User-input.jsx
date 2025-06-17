

export default function UserInput({onChange , userInput}){
   
    return (
        <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">Initial Investment</label>
            <input type="number" required value = {userInput.initialInvestment} 
            onChange={(event) => onChange('initialInvestment', event.target.value) }/>
          </p>
          <p>
            <label htmlFor="annualInterest">Annual Interest (%)</label>
            <input type="number" required value = {userInput.annualInvestment} 
            onChange={(event) => onChange('annualInterest', event.target.value)}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="Expected">Expected Return</label>
            <input type="number" required value = {userInput.expectedReturn} 
            onChange={(event) => onChange('expectedReturn', event.target.value)}/>
          </p>
          <p>
            <label htmlFor="Duration">Duration</label>
            <input type="number" required value = {userInput.duration} 
            onChange={(event) => onChange('duration', event.target.value) }/>
          </p>
        </div>
      </section>
        
    )
}