
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
import RefForm from './components/RefForm/RefForm'
import Resuable from './components/ResuableForm/Resuable'
import StatefulForm from './components/StatefulForm/StatefulForm'
import Form from './components/form/Form'
import HookForm from './components/form/HookForm/HookForm'

function App() {
  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
  };

  const handleUpdateProfile = data => {
    console.log('update profile', data);
  }

  return (
    <> 
      <h1>Form Master</h1>
      <GrandPa></GrandPa>




      {/* <Form></Form> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      
      {/* <Resuable formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up right now</p>
        </div>
        </Resuable>
      <Resuable formTitle={"Profile Update"} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </Resuable> */}
    </>
  );
}

export default App
