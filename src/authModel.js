import { thunk, action } from "easy-peasy";
import axios from './api'

export default {
    auth: false,
    cv_id: 0,
    setAuth: action((state, data) => {
        state.auth = data === 'false' ? false : true
    }),
    setId: action((state, data) => {
        state.cv_id = Number(data)
    }),
    checkAuth: thunk(async action => {
        
        const res = await axios.get('/api/check')
        action.setAuth(res.data.auth)
        action.setId(res.data.cv_id)
        
    })
}