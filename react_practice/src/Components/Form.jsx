import { useState } from 'react'

export default function Form() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [isShow,setIsShow] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const submitForm = () => {
        setIsShow(true)
    }

    return (
        <div>
            {!isshow ?
            <div>
                <input onChange={handleName} type='text' placeholder='Your name' />  <br /><br />
                <input onChange={handlePhone} type='tel' placeholder='Your Phone Number' />  <br /><br />
                <input onChange={handleEmail} type='email' placeholder='Your Email' />  <br /><br />
                <button onClick={submitForm}>Submit</button>
            </div>
            : null}

            {isshow ? 
            <div>
                <h1>Name : {name}</h1>
                <h1>Phone : {phone}</h1>
                <h1>Email : {email}</h1>
                <h3>Form is Submitted Sucessfully !!!!</h3>
            </div>
            : null}

        </div>
    );
}