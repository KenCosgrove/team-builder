import React, {useState} from 'react';
import './App.css';
import Form from './Form'
import TeamMembers from './TeamMembers'

const initialData = [
  {
  name: '',
  email: '',
  role: '',
  },
]

function App() {
  const [teamMember, setTeamMember] = useState([])
  const [formData, setFormData] = useState(initialData)

  const update = (inputName, inputData)=>
  setFormData({...formData, [inputName]: inputData})
  
  const submit = ()=>{
    const newTeamMember = {
      name:formData.name,
      email:formData.email,
      role:formData.role,
    }
    setTeamMember([...teamMember, newTeamMember])
  }
  return (
    <div className="App">
      <Form values={formData} update={update} submit={submit}/>
      {
        teamMember.map(member =>{
          return(
            <TeamMembers details={member}/>
          )
        })
      } 
    </div>
  );
}

export default App;
