import React, { useEffect, useState } from 'react'
import Details from './Details'
import Formations from './Formations'
import Expreiences from './Expreiences'
import Langues from './Langues'
import Store from '../store'
import { Spin, Menu, Button } from 'antd'
import { useStoreState } from 'easy-peasy';
import Competences from './Competences'
import Links from './Links'
import { useHistory } from 'react-router-dom'


function Edite() {
    const getDetails = Store.useStoreActions(action => action.getDetails)
    const getFormations = Store.useStoreActions(action => action.getFormations)
    const getExpriences = Store.useStoreActions(action => action.getExpriences)
    const getLangues = Store.useStoreActions(action => action.getLangues)
    const getCompetences = Store.useStoreActions(action => action.getCompetences)
    const getLinks = Store.useStoreActions(action => action.getLinks)
    const [loading, setLoading] = useState(true)
    const id = useStoreState(state => state.cv_id)
    const history = useHistory()

    const visit = () => {
        history.push(`/profile/${id}`)
    }

    useEffect(() => {
        getDetails()
        getFormations()
        getExpriences().then(() => {
            setLoading(false)
        })
        getLangues()
        getCompetences()
        getLinks()
    }, [getDetails, getFormations, getExpriences, getLangues, getCompetences, getLinks])
    return (
        <Spin spinning={loading}>
            <Menu mode="horizontal" style={{boxShadow: '0 2px 8px #f0f1f2'}}>
                <Menu.Item key="home" onClick={() => history.push('/')}>
                    Go Home
                </Menu.Item>
                <Menu.Item key="download">
                    <Button type="primary" onClick={visit}>Voir mon cv</Button>
                </Menu.Item>
            </Menu>
            <div style={{padding: '1rem'}}>
                <Details />
                <Formations />
                <Expreiences />
                <Langues />
                <Competences />
                <Links />
            </div>
        </Spin>
    )
}

export default Edite
