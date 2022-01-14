import React from 'react'
import { Form, Input, Row, Col, Button, message } from 'antd'
import Store from '../store';

function ExperienceForm(props) {

    const updateExperience = Store.useStoreActions(action => action.updateExperience)

    const handleSubmit = values => {
        message.loading({ content: 'Loading...', key:'updatable'});
        updateExperience(values).then(() => {
            message.success({ content: 'Changé avec success!', key: 'updatable', duration: 2 });
        })
    }

    return (
        <Form layout="vertical" onFinish={handleSubmit} initialValues={{...props.experience}}>
            <Form.Item hidden={true} name="id">
                <Input />
            </Form.Item>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Experience" name="entreprise">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Annee de debut" name="start">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Annee de fin" name="end">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item label="Post Occupé" name="post">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Taches réalisées" name="taches">
                        <Input.TextArea rows="6" />
                    </Form.Item>
                </Col>
            </Row>
            <Button type="primary" htmlType='submit' block>Editer</Button>
        </Form>
    )
}

export default ExperienceForm
