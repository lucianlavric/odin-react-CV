

export default function Personal({ data, onChange }){
    // Get input for name, email, phone #
    // 

    return (
        <>
            <h2>Enter Personal Information</h2>
            <form>
                <input
                type="text"
                placeholder="Name"
                value={data.name}
                onChange = {(e) => onChange({...data, name: e.target.value})}
                ></input>
                <input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange = {(e) => onChange({...data, email: e.target.value})}
                ></input>
                <input
                type="tel" // Is there an input type for phone numbers?
                placeholder="Phone Number"
                value={data.phoneNumber}
                onChange = {(e) => onChange({...data, phoneNumber: e.target.value})}
                ></input>
            </form>
        </>
    )
}