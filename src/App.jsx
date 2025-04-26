import { useState } from 'react'
import './App.css'
import './index.css'
import Personal from './components'
import Education from './components/Education'


function App() {
  const [CVdata, setCVData] = useState({
    PersonalInfo: {
      name: '',
      email: '',
      phoneNumber: ''
    },
    Education: [
      {
        name: '',
        title: '',
        date: '',
        isEditing: true,
      }
    ],
    WorkExperience:[
      {
        name: '',
        title: '',
        responsibilities:'',
        date: '', // Way to track date to and from
        isEditing: true,
      }
    ]
})

  function handlePersonChange(updatedPersonInfo){
    setCVData(prev => ({
      ...prev,
      PersonalInfo: updatedPersonInfo
    }))
  }

  function handleAddEntry(){
    setCVData(prev =>(
      {
        ...prev,
        Education:[...prev.Education, {name:"", title:"", date:"", isEditing:true}]
      }
    ) )
  }

  function toggleEdit(index, isEditing){
    setCVData(prev => {
      const updated = [...prev.Education];
      updated[index] = { ...updated[index], isEditing };
      return {
        ...prev,
        Education: updated
      };
    });
  }

  function removeEducation(index){
    setCVData(prev =>{
      const shallowCopy = [...prev.Education].filter((_,i) => i !== index);
      return{
        ...prev,
        Education: shallowCopy
      }
    })
  }

  function handleEducationChange(index, updatedEntry) {
    // store the state array as a new variable
    // set the index of the array to be the updatedEntry
    // call the set array function to trigger a rerender
    const updatedArray = [...CVdata.Education];
    updatedArray[index] = updatedEntry;
    setCVData((prev) => ({...prev, Education: updatedArray}));
  }

  return (
    <div className="app">
      <div className='CV-title'>
        <h1>Welcome to the CV generator</h1>
      </div>
      <Personal data={CVdata.PersonalInfo} onChange={handlePersonChange}/>
      <Education 
      data={CVdata.Education}
      onChange={handleEducationChange}
      toggleEdit={toggleEdit}
      removeEducation={removeEducation}
      // handleAddEntry={handleAddEntry}
      />
      <button
        type="button"
        onClick={handleAddEntry}
        >
          Add another education
      </button>

    </div>
  )
}

export default App

/*
Think about how to structure your application into components. 
Your application should include:

A section to add general information like 
name, email and phone number.

A section to add your educational experience 
(school name, 
title of study and 
date of study)

A section to add 
practical experience 
(company name, 
position title, 
main responsibilities of your jobs, 
date from and until when you worked for that company)

Be sure to include an edit and submit button for each section or for the whole CV. 
The submit button should submit your form and display the value of your input fields in HTML elements. 
The edit button should add back (display) the input fields, with the previously displayed information as values. 
In those input fields, you should be able to edit and resubmit the content. 
You’re going to make heavy use of state and props, so make sure you understood those concepts.
*/