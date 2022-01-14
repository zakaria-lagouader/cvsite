import React from 'react'
import { Typography, Divider, Collapse, Button, message, Modal } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons'
import LangueForm from './LangueForm';
import Store from '../store';

const { Title } = Typography;
const { Panel } = Collapse;
const { confirm } = Modal;


function Langues() {
    const langues = Store.useStoreState(state => state.langues)
    const addLangue = Store.useStoreActions(action => action.addLangue)
    const remove = Store.useStoreActions(action => action.deleteLangue)
    const add = () => {
        message.loading({ content: 'Loading...', key:'updatable'});
        addLangue().then(() => {
            message.success({ content: 'Lanuge Ajouté!', key: 'updatable', duration: 2 });
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
                message.success({ content: 'Langue supprimé!', key: 'updatable', duration: 2 });
            })
        },
        onCancel() {},
        });
    }
    return (
        <>
            <Divider><Title level={2}>Langues</Title></Divider>
            <Collapse style={{marginBottom: '1rem'}}>
                {
                    langues.map(item => (
                        <Panel header={item.langue} key={item.id} extra={deleteLangue(item.id)}>
                            <LangueForm langue={item} />
                        </Panel>
                    ))
                }

            </Collapse>
            <Button type="primary" onClick={add} block>Ajouter Langue</Button>
        </>
    )
}

export default Langues
