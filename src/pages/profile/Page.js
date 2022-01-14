import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import { Row, Col, Spin, Image } from 'antd'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import './profile.css'
import axios from '../../api'

export class Page extends Component {
    state = {
        details: {
            cv_title: '',
            nom: '',
            prenom: '',
            email: '',
            phone: '',
            ville: '',
            pays: '',
        },
        formations: [],
        experiences: [],
        langues: [],
        liens: [],
        competences: [],
        loading: false,
    }
    componentDidMount(){
        this.setState({loading: true})
        axios.get(`api/profile/${this.props.match.params.id}`)
            .then(res => {
                this.setState(res.data)
                this.setState({loading: false})  
            })
            .catch(() => {
                this.props.history.push('/')
            })
    }
    render() {
        return (
            <>
            <Navbar />
            <Spin spinning={this.state.loading}>
            <div id="cvs">
                <div className="container">
                    <Row gutter={16}>
                        <Col lg={16} md={24} sm={24} xs={24}>
                            <div id="main">
                                <div className="details">
                                    <h1 className="cv_name">{this.state.details.prenom} {this.state.details.nom}</h1>
                                    <p className="title">{this.state.details.cv_title}</p>
                                    <div className="info">
                                        <p><EnvironmentOutlined /> {this.state.details.ville}-{this.state.details.pays}</p>
                                        <p><MailOutlined /> {this.state.details.email}</p>
                                        <p><PhoneOutlined /> {this.state.details.phone}</p>
                                    </div>
                                    <h3>A propos de moi :</h3>
                                    <p className="about">{this.state.details.description}</p>

                                </div>
                                {
                                    this.state.formations.length > 0 && (
                                        <div className="formations">
                                            <h3>Mes Formations :</h3>
                                            {
                                                this.state.formations.map((item, i) => (
                                                    <div className="forma" key={i}>
                                                        <div className="one">
                                                            <p>{item.annee}</p>
                                                            <p>{item.ville}-{item.pays}</p>
                                                        </div>
                                                        <div className="two">
                                                            <p><strong>Diplome de </strong>{item.diplome}</p>
                                                            <p>{item.ecole}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                                {
                                    this.state.experiences.length > 0 && (
                                    <div className="experiences">
                                        <h3>Mes Experiences :</h3>
                                        {
                                            this.state.experiences.map((item, i) => (
                                                <div className="exper" key={i}>
                                                    <p className="entr"><strong>{item.entreprise} ({item.start}-{item.end})</strong></p>
                                                    <p><strong>Post Occupé </strong>{item.post}</p>
                                                    <p><strong>Taches realisé </strong> {item.taches}</p>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    )
                                }
                            </div>
                        </Col>
                        <Col lg={8} md={24} sm={24} xs={24}>
                            <div id="side">
                                {
                                    this.state.details.image && (
                                        <Image src={`http://localhost:8000/storage/uploads/${this.state.details.image}`} className="cv_image" alt=""/>
                                    )
                                }
                                {
                                    this.state.competences.length > 0 && (
                                        <div className="side">
                                            <h3>Competences :</h3>
                                            <div>
                                                {
                                                    this.state.competences.map((item, i) => (
                                                        <div className="line" key={i}>
                                                            <p><strong>{item.competence}</strong></p><p>{item.niveau}</p>
                                                        </div>

                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    this.state.langues.length > 0 && (
                                        <div className="side">
                                            <h3>Langues :</h3>
                                            <div>
                                                {
                                                    this.state.langues.map((item, i) => (
                                                        <div className="line" key={i}>
                                                            <p><strong>{item.langue}</strong></p><p>{item.niveau}</p>
                                                        </div>

                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    this.state.liens.length > 0 && (
                                        <div className="side">
                                            <h3>Liens :</h3>
                                            <div>
                                                {
                                                    this.state.liens.map((item, i) => (
                                                        <div className="line" key={i}>
                                                            <a href={item.lien}>{ item.label }</a>
                                                        </div>

                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </Spin>
        </>
        )
    }
}

export default Page
