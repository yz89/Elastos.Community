import BaseService from '../model/BaseService'
import _ from 'lodash'
import {api_request} from '@/util'

export default class extends BaseService {

    async index() {

        const taskRedux = this.store.getRedux('task')

        const result = await api_request({
            path: '/task',
            method: 'get'
        })

        // TODO: why does this set it as a struct?
        this.dispatch(taskRedux.actions.all_tasks_update(result))

        return result
    }

    async create(doc) {

        const res = await api_request({
            path: '/task/create',
            method: 'post',
            data: doc
        })

        // TODO: take user to task detail page
    }
}
