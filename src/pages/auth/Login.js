import React, { useState } from 'react'
import { Form, Input, Button, Typography, Row, Col, message } from 'antd';
import Navbar from '../../components/Navbar';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from '../../api'

const { Title } = Typography

function Login(props) {
    const [loading, setloading] = useState(false)
    const auth = useStoreState(state => state.auth)
    const checkAuth = useStoreActions(action => action.checkAuth)
    const handleSubmit = values => {
        setloading(true)
        axios.get('/sanctum/csrf-cookie').then(() => {
            axios.post('/login', values).then(() => {
                checkAuth().then(() => {
                    props.history.push('/create')
                })
            }).catch((err) => {
                message.error('the given info was invalid');
                setloading(false)
                console.log(err.response.data)
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
                        <Title>Log in</Title>
                        <Form onFinish={handleSubmit} layout="vertical">
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" loading={loading} htmlType="submit" block>Login</Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
            ): ("")
        }
        </>
    )
}

export default Login
