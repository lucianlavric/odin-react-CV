import "../../index.css"


export default function Experience({ data, onChange, toggleEdit, removeExperience }){
    // Get input for School name, Title of study, graduation date
    // 
    return(
        <div className="card-container">
        <h2>Enter Experience</h2>
        {data.map((entry, index) => (
  <div key={index}>
    {entry.isEditing ? (
      <form className="education-and-experience-inputs">
        <input
          type="text"
          placeholder="Company name"
          value={entry.name}
          onChange={(e) =>
            onChange(index, { ...entry, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Title of Role"
          value={entry.title}
          onChange={(e) =>
            onChange(index, { ...entry, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Role Description"
          value={entry.responsibilities}
          onChange={(e) =>
            onChange(index, { ...entry, responsibilities: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="date"
          value={entry.date}
          onChange={(e) =>
            onChange(index, { ...entry, date: e.target.value })
          }
        />
        <button 
        type="button" 
        className="p-2 bg-sky-500 hover:bg-sky-700 rounded-xl"
        onClick={() => {
            toggleEdit(index, false)
        }}>
          Submit
        </button>
        <button 
        type="button" 
        className="p-2 bg-sky-500 hover:bg-sky-700 rounded-xl"
        onClick={() => {
            removeExperience(index)
        }}>
          Delete
        </button>
      </form>
    ) : (
      <div className="entered-card">
        <p><strong>Company:</strong> {entry.name}</p>
        <p><strong>Role:</strong> {entry.title}</p>
        <p><strong>Description:</strong> {entry.responsibilities}</p>
        <p><strong>Date:</strong> {entry.date}</p>
        <button type="button" onClick={() => toggleEdit(index, true)}>
          Edit
        </button>
      </div>
    )}
  </div>
))}
            
        </div>
    )
}