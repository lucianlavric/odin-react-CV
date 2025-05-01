import { useState } from 'react'
import './App.css'
import './index.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import SubmitForm from './components/SubmitForm'
import DarkModeToggler from './components/Toggle/Index'
import { ThemeProvider } from './context/ThemeContext'

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
    ],
    isSubmitted: false
})

  function handlePersonChange(updatedPersonInfo){
    setCVData(prev => ({
      ...prev,
      PersonalInfo: updatedPersonInfo
    }))
  }

  function handleAddEntryEducation(){
    setCVData(prev =>(
      {
        ...prev,
        Education:[...prev.Education, {name:"", title:"", date:"", isEditing:true}]
      }
    ) )
  }

  function toggleEditEducation(index, isEditing){
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

  function handleAddEntryWorkExperience(){
    setCVData(prev =>(
      {
        ...prev,
        WorkExperience:[...prev.WorkExperience, {name:"", title:"", date:"", isEditing:true}]
      }
    ) )
  }

  function handleEducationChange(index, updatedEntry) {
    // store the state array as a new variable
    // set the index of the array to be the updatedEntry
    // call the set array function to trigger a rerender
    const updatedArray = [...CVdata.Education];
    updatedArray[index] = updatedEntry;
    setCVData((prev) => ({...prev, Education: updatedArray}));
  }

  function handleWorkExperienceChange(index, updatedEntry){
    const updatedArray = [...CVdata.WorkExperience];
    updatedArray[index] = updatedEntry;
    setCVData((prev) => ({...prev, WorkExperience: updatedArray}));
  }

  function toggleEditExperience(index, isEditing){
    setCVData(prev => {
      const updated = [...prev.WorkExperience];
      updated[index] = { ...updated[index], isEditing };
      return {
        ...prev,
        WorkExperience: updated
      };
    });
  }

  function removeExperience(index){
    setCVData(prev =>{
      const shallowCopy = [...prev.WorkExperience].filter((_,i) => i !== index);
      return{
        ...prev,
        WorkExperience: shallowCopy
      }
    })
  }

  function handleSubmitForm(){
    setCVData((prev) => ({
      ...prev,
      isSubmitted: true
    }))

    // take the personal info section
    // take the education and experience sections that have isEditing set to false
  }

  return (
    <>
      <ThemeProvider>
      <DarkModeToggler />
      <div className="flex flex-col items-center justify-center dark:bg-gray-900">
      {CVdata.isSubmitted === false ? (
        <div>
        <div>
        <h1>Welcome to the CV generator</h1>
        </div>
      <Personal data={CVdata.PersonalInfo} onChange={handlePersonChange}/>
      <Education 
      data={CVdata.Education}
      onChange={handleEducationChange}
      toggleEditEducation={toggleEditEducation}
      removeEducation={removeEducation}
      />
      <button
        type="button"
        className="p-3 bg-sky-500 hover:bg-sky-700 rounded-xl"
        onClick={handleAddEntryEducation}
        >
          Add another education
      </button>

      <Experience
        data={CVdata.WorkExperience}
        onChange={handleWorkExperienceChange}
        toggleEdit={toggleEditExperience}
        removeExperience={removeExperience}
      />
      <button
        type="button"
        className="p-3 bg-sky-500 hover:bg-sky-700 rounded-xl"
        onClick={handleAddEntryWorkExperience}
        >
          Add another experience
      </button>

      <button
      type="submit"
      className="p-3 bg-sky-500 hover:bg-sky-700 rounded-xl"
      onClick={handleSubmitForm}>
        Generate CV
      </button>

      
        </div>
    
      ) : (
        <div>
          <SubmitForm 
            data={CVdata}
            // entire CV data
            // a condition for isEditing to be FALSE for Education and WorkExperience entries
          />
        </div>
      )}
  </div>
      </ThemeProvider>
    </> 
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