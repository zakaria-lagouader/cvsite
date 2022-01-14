import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import {Form, Input, Row, Col, Button, Empty, Spin} from 'antd'
import './home.css'
import Card from './Card'
import axios from '../../api'

function Home() {
    const [posts, setposts] = useState([])
    const [term, setterm] = useState('')
    const [loading, setloading] = useState(false)
    const handelSubmit = values => {
        setloading(true)
        setterm(values.search)
        if (!values.ville) {
            axios.get(`/api/search/${values.search}`).then(res =>{
                setposts(res.data)
                setloading(false)
            })
        }else {
            axios.get(`/api/search/${values.search}/${values.ville}`).then(res =>{
                setposts(res.data)
                setloading(false)
            })
        }
    }
    return (
        <>
            <Navbar />
            <section id="showcase">
                <div className="overlay"></div>
                <div className="container">
                    <h1 className="page-title">CV Site vous offre une grande base de données <br/> pour trouver votre prochain employé</h1>
                    <Form onFinish={handelSubmit}>
                        <Row gutter={16}>
                            <Col lg={14} md={14} sm={24} xs={24}>
                                <Form.Item name="search" rules={[{ required: true, message: 'Please enter a keyword !' }]}>
                                    <Input placeholder="Recherche ici" size="large" />
                                </Form.Item>
                            </Col>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <Form.Item name="ville">
                                    <Input placeholder="Ville (optionnele)" size="large" />
                                </Form.Item>
                            </Col>
                            <Col lg={2} md={2} sm={24} xs={24}>
                                <Form.Item name="ville">
                                    <Button htmlType="submit" size="large" type="primary">Search</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
            <Spin spinning={loading} >
                <section id="cvs">
                    <div className="container">
                        {
                            posts.length ? (
                                <>
                                <h2 className="section-title">Resultat Pour {term} :</h2>
                                <Row justify="center">
                                {
                                    posts.map((item, i) => (
                                        <Col lg={16} md={18} sm={24} xs={24} key={i}>
                                            <Card card={item}  />
                                        </Col>
                                    ))
                                }
                                </Row>
                                </>
                            ) : (
                                <Empty description="Pas de cv dans cette recherche" />
                            )
                        }
                    </div>
                </section>
            </Spin>
        </>
    )
}

export default Home
