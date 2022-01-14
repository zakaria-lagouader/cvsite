import React, { useEffect } from 'react'
import { Typography, Form, Input, Row, Col, Divider, Button, message  } from 'antd';
import Store from '../store'
import UploadImg from './UploadImg';


const { Title } = Typography;
function Details() {
    const [form] = Form.useForm();
    const details = Store.useStoreState(state => state.details)
    const updateDetails = Store.useStoreActions(action => action.updateDetails)
    useEffect(() => {
        form.setFieldsValue({...details})
        // eslint-disable-next-line
    }, [details])
    const handleSubmit = values => {
        message.loading({ content: 'Loading...', key:'updatable'});
        updateDetails(values).then(() =>  {
            message.success({ content: 'Changé avec success!', key: 'updatable', duration: 2 });
        })
    };
    return (
        <>
          <Divider><Title  level={2}>Details Presonnel</Title></Divider>
            <Form layout="vertical" onFinish={handleSubmit} form={form}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Cv Title" name="cv_title">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <UploadImg />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Nom" name="nom">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Prenom" name="prenom">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Email" name="email">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Phone" name="phone">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Ville" name="ville">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Pays" name="pays">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Petite description sur toi" name="description">
                            <Input.TextArea rows="6" />
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType='submit' block>Edite Details</Button>
            </Form>  
        </>
    )
}

export default Details
