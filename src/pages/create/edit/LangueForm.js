import React from 'react'
import { Form, Input, Row, Col, Button, Select, message } from 'antd'
import Store from '../store';

const { Option } = Select;

function LangueForm(props) {
    const updateLangue = Store.useStoreActions(action => action.updateLangue)
    const handleSubmit = values => {
        message.loading({ content: 'Loading...', key:'updatable'});
        updateLangue(values).then(() => {
            message.success({ content: 'Changé avec success!', key: 'updatable', duration: 2 });
        })
    }
    return (
        <Form layout="vertical" onFinish={handleSubmit} initialValues={{...props.langue}}>
            <Form.Item hidden={true} name="id">
                <Input />
            </Form.Item>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Langue" name="langue">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Niveau" name="niveau">
                        <Select>
                            <Option value='debutant'>Debutant</Option>
                            <Option value='intermédiaire'>Intermédiaire</Option>
                            <Option value='courant'>courant</Option>
                            <Option value='bilingue'>bilingue</Option>
                            <Option value='maternelle'>maternelle</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Button type="primary" htmlType='submit' block>Editer</Button>
        </Form>
    )
}

export default LangueForm
