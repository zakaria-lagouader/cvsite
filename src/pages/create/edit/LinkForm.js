import React from 'react'
import { Form, Input, Button, message } from 'antd'
import Store from '../store';


function LinkForm(props) {
    const updateLink = Store.useStoreActions(action => action.updateLink)
    const handleSubmit = values => {
        message.loading({ content: 'Loading...', key:'updatable'});
        updateLink(values).then(() => {
            message.success({ content: 'Changé avec success!', key: 'updatable', duration: 2 });
        })
    }
    return (
        <Form layout="vertical" onFinish={handleSubmit} initialValues={{...props.link}}>
            <Form.Item hidden={true} name="id">
                <Input />
            </Form.Item>
            <Form.Item label="Nom de site" name="label">
                <Input />
            </Form.Item>
            <Form.Item label="Lien" name="lien">
                <Input />
            </Form.Item>
            <Button type="primary" htmlType='submit' block>Editer</Button>
        </Form>
    )
}

export default LinkForm
