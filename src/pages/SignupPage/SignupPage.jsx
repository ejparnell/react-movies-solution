import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./SignupPage.css"

export default function SignupPage(props) {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.setUser(inputValue)
    }

    return (
        <div className="signup-form-container">
            <div>
                <h3 >Please enter your desired username below</h3>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={handleChange} />
                    </div>
                    <Button type="submit">Sign In</Button>
                </Form>
            </div>
        </div>
    )
}