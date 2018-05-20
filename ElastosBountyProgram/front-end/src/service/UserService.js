import BaseService from '../model/BaseService';
import _ from 'lodash';
import sha512 from 'crypto-js/sha512';

export default class extends BaseService {

    async login(username, password, opts={}){

        const userRedux = this.store.getRedux('user');

        // call API /login

        // sha512 hash the password
        const passwordSHA512 = sha512(password)

        let path = `/user/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(passwordSHA512)}`

        let loginRes = await fetch(
            process.env.SERVER_URL + path
        ).then((res) => res.json())

        if (loginRes.code !== 1) {
            throw new Error('Invalid Login')
        }

        await this.dispatch(userRedux.actions.login_form_reset())
        await this.dispatch(userRedux.actions.is_login_update(true))

        await this.dispatch(userRedux.actions.profile_update(loginRes.data.user.profile))
        await this.dispatch(userRedux.actions.role_update(loginRes.data.user.role))

        sessionStorage.setItem('api-token', loginRes.data['api-token'])

        /*
        if (opts.remember) {
            // set a new flag on
            // path += '&remember=true'
        }
        */

        return true

    }

    async logout(){
        const userRedux = this.store.getRedux('user');
        const tasksRedux = this.store.getRedux('task');

        return new Promise((resolve)=>{
            this.dispatch(userRedux.actions.is_login_update(false));
            this.dispatch(userRedux.actions.profile_reset());
            this.dispatch(tasksRedux.actions.all_tasks_reset());
            sessionStorage.clear()
            resolve(true);
        });
    }
}
