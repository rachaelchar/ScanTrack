import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';

const LoginForm = props => {

    const { setIsAuth } = useContext(AuthContext)
    const emptyCreds = { emailInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'
    const [formData, setFormData] = useState(emptyCreds)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const inputCreds = {
            code: formData.code
        }
        login(inputCreds)
        setFormData(emptyCreds)
    }

    const login = loginCreds => {
        Axios.post('/api/auth/login', loginCreds)
            .then(user => {
                console.log("login response ", user)
                setIsAuth(true)
            })
            .catch(err => {
                setCredsAreInvalid(errorMessage)
                console.log(err)
            })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="emailInput">
                <Form.Label>Scan Badge to Log In</Form.Label>
                <Form.Control name="scanCode" type="text" placeholder=" " value={formData.code} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
                <Form.Text className="text-danger">
                    {credsAreInvalid}
                </Form.Text>
            </Form.Group>
            <Button className='m-1' variant="primary" type="submit">
                Submit
            </Button>
            <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/signup')
            }}>Signup</Button>
            <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/')
            }}>Home</Button>
        </Form>
    )
}

export default LoginForm;