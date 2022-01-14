import React from 'react'
import { Typography, Divider, Collapse, Button, message, Modal } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons'
import CompetenceForm from './CompetenceForm';
import Store from '../store';

const { Title } = Typography;
const { Panel } = Collapse;
const { confirm } = Modal;


function Competences() {
    const competences = Store.useStoreState(state => state.competences)
    const addCompetence = Store.useStoreActions(action => action.addCompetence)
    const remove = Store.useStoreActions(action => action.deleteCompetence)
    const add = () => {
        message.loading({ content: 'Loading...', key:'updatable'});
        addCompetence().then(() => {
            message.success({ content: 'Competence Ajouté!', key: 'updatable', duration: 2 });
        })
    }

    const deleteLangue = (id) => (
        <DeleteFilled onClick={e => {
            e.stopPropagation()
            showDeleteModel(id)
        }} />
    )
    const  showDeleteModel = (id) => {
        confirm({
        title: 'Do you want to delete these items?',
        icon: <ExclamationCircleOutlined />,
        onOk() {
            remove(id).then(() => {
                message.success({ content: 'Competence supprimé!', key: 'updatable', duration: 2 });
            })
        },
        onCancel() {},
        });
    }
    return (
        <>
            <Divider><Title level={2}>Competences</Title></Divider>
            <Collapse style={{marginBottom: '1rem'}}>
                {
                    competences.map(item => (
                        <Panel header={item.competence} key={item.id} extra={deleteLangue(item.id)}>
                            <CompetenceForm competence={item} />
                        </Panel>
                    ))
                }

            </Collapse>
            <Button type="primary" onClick={add} block>Ajouter Competence</Button>
        </>
    )
}

export default Competences
