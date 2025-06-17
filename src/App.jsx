import logo from "./assets/investment-calculator-logo.png"
import UserInput from "./components/User-input";
import  {useState} from 'react';
import Result from "./components/Result";

function App() {
  const [userInput  , setUserInput] = useState({
    initialInvestment : 6000,
    annualInvestment : 1000,
    expectedReturn : 6,
    duration : 10,
})
const inputIsValid = userInput.duration >= 1 ; 
function handleChange(initialIdentifier , newValue){
    setUserInput((prevValue) => {
        return{
            ...prevValue,
            [initialIdentifier] : +newValue
        }
    })
}
  return (
    <>
      <header id ="header" >
        <img src= {logo} alt= "app-logo"/>
        <h1>React Investment Calculator</h1>
       </header>
       <UserInput  userInput={userInput} onChange = {handleChange}/>
       {inputIsValid ? <Result input={userInput}/> : <p className="center">Please Enter Duration greater than 0</p>}
       </> 
   )
}

export default App
