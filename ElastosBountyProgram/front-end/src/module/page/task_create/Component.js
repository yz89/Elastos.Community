import React from 'react';
import StandardPage from '../StandardPage';
import Navigator from '@/module/page/shared/HomeNavigator/Container'
import TaskCreateForm from '@/module/form/TaskCreateForm/Container'

import { Col, Row, Divider } from 'antd'
import {TASK_TYPE, TASK_CATEGORY} from '@/constant'

export default class extends StandardPage {

    ord_renderContent () {

        // default
        let taskType = TASK_TYPE.EVENT
        let taskCategory = TASK_CATEGORY.SOCIAL

        if (this.props.location && this.props.location.search) {
            const typeQry = this.props.location.search.match(/[\\?&]type=([\w]+)/)
            if (typeQry && typeQry.length > 1) {
                taskType = typeQry[1]
            }

            const categoryQry = this.props.location.search.match(/[\\?&]category=([\w]+)/)
            if (categoryQry && categoryQry.length > 1) {
                taskCategory = categoryQry[1]
            }
        }

        return (
            <div className="c_ProfileContainer">
                <div className="ebp-header-divider">

                </div>
                <div className="p_admin_index ebp-wrap">
                    <div className="d_box">
                        <div className="p_admin_breadcrumb">
                            <br/>
                        </div>
                        <div className="p_ProfileTeams p_admin_content">
                            <Row>
                                <Col span={4} className="admin-left-column wrap-box-navigator">
                                    <Navigator selectedItem={'profileTasks'}/>
                                </Col>
                                <Col span={20} className="admin-right-column wrap-box-user">

                                    <Divider className="">
                                        {
                                            taskType === TASK_TYPE.PROJECT
                                            ? 'Create Project'
                                            : 'Create Task / Event'
                                        }
                                    </Divider>
                                    <TaskCreateForm taskType={taskType} taskCategory={taskCategory}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
