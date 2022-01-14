import React from 'react'
import { Form, Input, Row, Col, Button, Select, message } from 'antd'
import Store from '../store';

const { Option } = Select;

function CompetenceForm(props) {
    const updateCompetence = Store.useStoreActions(action => action.updateCompetence)
    const handleSubmit = values => {
        message.loading({ content: 'Loading...', key:'updatable'});
        updateCompetence(values).then(() => {
            message.success({ content: 'Changé avec success!', key: 'updatable', duration: 2 });
        })
    }
    return (
        <Form layout="vertical" onFinish={handleSubmit} initialValues={{...props.competence}}>
            <Form.Item hidden={true} name="id">
                <Input />
            </Form.Item>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Competence" name="competence">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Niveau" name="niveau">
                        <Select>
                            <Option value='debutant'>Debutant</Option>
                            <Option value='intermédiaire'>intermédiaire</Option>
                            <Option value='expert'>Expert</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Button type="primary" htmlType='submit' block>Editer</Button>
        </Form>
    )
}

export default CompetenceForm
