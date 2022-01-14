import React from 'react'
import { Typography, Divider, Collapse, Button, message, Modal } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons'
import ExperienceForm from './ExperienceForm';
import Store from '../store'

const { Title } = Typography;
const { Panel } = Collapse;
const { confirm } = Modal;



function Expreiences() {
    const experiences = Store.useStoreState(state => state.experiences)
    const addExprience = Store.useStoreActions(action => action.addExprience)
    const remove = Store.useStoreActions(action => action.deleteExprience)

    const add = () => {
        message.loading({ content: 'Loading...', key:'updatable'});
        addExprience().then(() => {
            message.success({ content: 'Exprience Ajouté!', key: 'updatable', duration: 2 });
        })
    }

    const deleteExprience = (id) => (
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
                message.success({ content: 'Experience supprimé!', key: 'updatable', duration: 2 });
            })
        },
        onCancel() {},
        });
    }

    return (
        <>
            <Divider><Title level={2}>Experiences</Title></Divider>
            <Collapse style={{marginBottom: '1rem'}}>
                {
                    experiences.map((experience, i) => (
                        <Panel header={experience.post} key={i} extra={deleteExprience(experience.id)}>
                            <ExperienceForm experience={experience} />
                        </Panel>
                    ))
                }

            </Collapse>
            <Button type="primary" onClick={add} block>Ajouter Experience</Button>
        </>
    )
}

export default Expreiences
