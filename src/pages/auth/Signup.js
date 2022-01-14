import React, {useState} from 'react'
import { Form, Input, Button, Typography, Row, Col } from 'antd';
import Navbar from '../../components/Navbar';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from '../../api'

const { Title } = Typography

function Signup(props) {
    const checkAuth = useStoreActions(action => action.checkAuth)
    const auth = useStoreState(state => state.auth)
    const [loading, setloading] = useState(false)
    const handleSubmit = values => {
        setloading(true)
        axios.get('/sanctum/csrf-cookie').then(() => {
            axios.post('/register', values).then(() => {
                checkAuth()
                props.history.push('/create')
            }).catch(err => {
                setloading(false)
                console.log(err.response.data);
            })
        })
    }
    return (
        <>
        <Navbar></Navbar>
        {
            !auth ? (
                <Row align="middle" justify="center" style={{height: 'calc(100vh - 55px)'}}>
                    <Col lg={10} md= {12} sm={16} xs={20}>
                        <Title>Signup</Title>
                        <Form onFinish={handleSubmit} layout="vertical">
                            <Form.Item
                                label="prenom"
                                name="prenom"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="nom"
                                name="nom"
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!', type:'email' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'the password chould be more then 8 chars', min:8 }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Confirme password"
                                name="password_confirmation"
                                rules={[{ required: true, message: 'Please input your passwordthe password chould be more then 8 chars!', min:8 }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" loading={loading} htmlType="submit" block>Sign up</Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
            ) : ("")
        }
        </>
    )
}

export default Signup
