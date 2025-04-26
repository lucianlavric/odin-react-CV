

export default function SubmitForm({ data }) {
    return (
      <div>
        <p>{data.PersonalInfo.name}</p>
        <p>{data.PersonalInfo.email}</p>
        <p>{data.PersonalInfo.phoneNumber}</p>
        {data.Education
          .filter((entry) => entry.isEditing === false) 
          .map((entry, index) => (                     
            <div key={index}>
              <p>{entry.name}</p>
              <p>{entry.title}</p>
              <p>{entry.date}</p>
            </div>
          ))}
        {data.WorkExperience
          .filter((entry) => entry.isEditing === false) 
          .map((entry, index) => (                     
            <div key={index}>
              <p>{entry.name}</p>
              <p>{entry.title}</p>
              <p>{entry.responsibilities}</p>
              <p>{entry.date}</p>
            </div>
          ))}
      </div>
    );
  }