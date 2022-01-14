import React from 'react'
import { Row, Col } from 'antd'
import Edite from './edit/Edite';
import Preview from './preview/Preview';
import 'antd/dist/antd.css';
import Store from './store'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';


function Create() {
    const auth = useStoreState(state => state.auth)
    const checkAuth = useStoreActions(action => action.checkAuth)
    useEffect(() => {
        checkAuth()
    }, [checkAuth])
    return (
        <Store.Provider>
            {
                auth ? (
                    <Row>
                        <Col span={12}>
                            <Edite />
                        </Col>
                        <Col span={12}>
                            <Preview />
                        </Col>
                    </Row>
                ) : ("")
            }
            
        </Store.Provider>
    )
}

export default Create
