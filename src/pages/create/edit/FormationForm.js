import React from 'react'
import { Form, Input, Row, Col, Button, message } from 'antd'
import Store from '../store'

function FormationForm(props) {
    const updateFormation = Store.useStoreActions(action => action.updateFormation)
    const handleSubmit = values => {
        message.loading({ content: 'Loading...', key:'updatable'});
        updateFormation(values).then(() => {
            message.success({ content: 'Changé avec success!', key: 'updatable', duration: 2 });
        })
    }
    return (
        <Form layout="vertical" onFinish={handleSubmit} initialValues={{...props.formation}}>
            <Form.Item hidden={true} name="id">
                <Input />
            </Form.Item>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Année" name="annee">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Ville" name="ville">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Pays" name="pays">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item label="Diplome" name="diplome">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Université ou ecole" name="ecole">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Button type="primary" htmlType='submit' block>Editer</Button>
        </Form>
    )
}

export default FormationForm
