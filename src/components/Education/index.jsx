import "../../index.css"


export default function Education({ data, onChange, toggleEditEducation, removeEducation }){
    // Get input for School name, Title of study, graduation date
    // 
    return(
        <div className="card-container">
        <h2>Enter Education</h2>
        {data.map((entry, index) => (
  <div key={index}>
    {entry.isEditing ? (
      <form className="education-inputs">
        <input
          type="text"
          placeholder="School Name"
          value={entry.name}
          onChange={(e) =>
            onChange(index, { ...entry, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Title of Study"
          value={entry.title}
          onChange={(e) =>
            onChange(index, { ...entry, title: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Graduation Date"
          value={entry.date}
          onChange={(e) =>
            onChange(index, { ...entry, date: e.target.value })
          }
        />
        <button 
        type="button" 
        className="p-2 bg-sky-500 hover:bg-sky-700 rounded-xl"
        onClick={() => {
            toggleEditEducation(index, false)
        }}>
          Submit
        </button>
        <button 
        type="button" 
        className="p-2 bg-sky-500 hover:bg-sky-700 rounded-xl"
        onClick={() => {
            removeEducation(index)
        }}>
          Delete
        </button>
      </form>
    ) : (
      <div className="education-card">
        <p><strong>School:</strong> {entry.name}</p>
        <p><strong>Title:</strong> {entry.title}</p>
        <p><strong>Date:</strong> {entry.date}</p>
        <button type="button" onClick={() => toggleEditEducation(index, true)}>
          Edit
        </button>
      </div>
    )}
  </div>
))}
            
        </div>
    )
}