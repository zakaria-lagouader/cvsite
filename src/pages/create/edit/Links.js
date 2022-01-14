import React from 'react'
import { Typography, Divider, Collapse, Button, message, Modal } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons'
import LinkForm from './LinkForm';
import Store from '../store';

const { Title } = Typography;
const { Panel } = Collapse;
const { confirm } = Modal;


function Links() {
    const links = Store.useStoreState(state => state.links)
    const addLink = Store.useStoreActions(action => action.addLink)
    const remove = Store.useStoreActions(action => action.deleteLink)
    const add = () => {
        message.loading({ content: 'Loading...', key:'updatable'});
        addLink().then(() => {
            message.success({ content: 'Lien Ajouté!', key: 'updatable', duration: 2 });
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
                message.success({ content: 'Lien supprimé!', key: 'updatable', duration: 2 });
            })
        },
        onCancel() {},
        });
    }
    return (
        <>
            <Divider><Title level={2}>Liens</Title></Divider>
            <Collapse style={{marginBottom: '1rem'}}>
                {
                    links.map(item => (
                        <Panel header={item.label} key={item.id} extra={deleteLangue(item.id)}>
                            <LinkForm link={item} />
                        </Panel>
                    ))
                }

            </Collapse>
            <Button type="primary" onClick={add} block>Ajouter Lien</Button>
        </>
    )
}

export default Links
