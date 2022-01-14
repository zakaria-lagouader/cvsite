import React from 'react'
import { Typography, Divider, Collapse, Button, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { DeleteFilled } from '@ant-design/icons'
import FormationForm from './FormationForm';
import Store from '../store';

const { Title } = Typography;
const { Panel } = Collapse;
const { confirm } = Modal;



function Formations() {
    const formations = Store.useStoreState(state => state.formations)
    const addFormation = Store.useStoreActions(action => action.addFormation)
    const remove = Store.useStoreActions(action => action.deleteFormation)
    const add = () => {
        message.loading({ content: 'Loading...', key:'updatable'});
        addFormation().then(() => {
            message.success({ content: 'Formation Ajouté!', key: 'updatable', duration: 2 });
        })
    }
    const deleteFormation = (id) => { return (
        <DeleteFilled onClick={e => {
            e.stopPropagation()
            showDeleteModel(id)
        }} />
    )}
    const  showDeleteModel = (id) => {
        confirm({
        title: 'Do you want to delete these items?',
        icon: <ExclamationCircleOutlined />,
        onOk() {
            remove(id).then(() => {
                message.success({ content: 'Formation supprimé!', key: 'updatable', duration: 2 });
            })
        },
        onCancel() {},
        });
    }
    return (
        <>
            <Divider><Title level={2}>Formations</Title></Divider>
            <Collapse style={{marginBottom: '1rem'}}>
                {
                    formations.map((formation, i) => (
                        <Panel header={formation.diplome} key={i} extra={deleteFormation(formation.id)}>
                            <FormationForm formation={formation} />
                        </Panel>
                    ))
                }
            </Collapse>
            <Button type="primary" onClick={add} block>Ajouter Formation</Button>
        </>
    )
}

export default Formations
