import React from 'react'
import StandardPage from '../../StandardPage'
import Navigator from '@/module/page/shared/Navigator/Container'

import Profile from '@/module/profile/Container'

import './style.scss'
import '../../admin/admin.scss'

import { Col, Row, Icon, Form, Breadcrumb, Button, Dropdown } from 'antd'
const FormItem = Form.Item

import MediaQuery from 'react-responsive'

export default class extends StandardPage {

    ord_checkLogin(isLogin) {
        if (!isLogin) {
            this.props.history.replace('/home')
        }
    }

    ord_renderContent() {
        return (
            <div>
                <div className="ebp-header-divider">

                </div>
                <div className="p_admin_index ebp-wrap">
                    <div className="d_box">
                        <div className="p_admin_breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">
                                    <Icon type="home" />
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                                <Breadcrumb.Item>Info</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="p_Profile p_admin_content">
                            <MediaQuery maxWidth={720}>
                                <Row>
                                    <Col className="wrap-box-navigator">
                                        <Navigator selectedItem={'profileInfo'} />
                                    </Col>
                                </Row>
                            </MediaQuery>
                            <Row>
                                <MediaQuery minWidth={720}>
                                    <Col span={4} className="admin-right-column wrap-box-navigator">
                                        <Navigator selectedItem={'profileInfo'} />
                                    </Col>
                                </MediaQuery>
                                <Col xs={{span: 24}} md={{span: 20}} className="c_ProfileContainer admin-left-column wrap-box-user">
                                    <Profile user={this.props.user}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <br/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
