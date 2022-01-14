import React from 'react'
import { Button } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

function Card(props) {
    const history = useHistory()
    const visit = () => {
        history.push(`/profile/${props.card.id}`)
    }
    return (
        <div className="card">
            <div className="card-img">
                <img src={`http://localhost:8000/storage/uploads/${props.card.image}`} alt="" className="avatar"/>
            </div>
            <div className="card-centent">
                <h3 className="name">{props.card.prenom} {props.card.nom}</h3>
                <p className="cv_title">{props.card.cv_title} <EnvironmentOutlined /> {props.card.ville} - {props.card.pays}</p>
                <p className="description">{props.card.description.slice(0, 150)} ...</p>
            </div>
            <div className="action">
                <Button type="ghost" onClick={visit}>View</Button>
            </div>
        </div>
    )
}

export default Card
