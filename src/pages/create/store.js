import { createContextStore, thunk, action } from"easy-peasy"
import axios from '../../api'

const Store = createContextStore({
    // Details Model
    details: {},
    setDeatails: action((state, data) => {
        state.details = data
    }),
    getDetails: thunk(async action => {
        try {
            const res = await axios.get('/api/head')
            action.setDeatails(res.data)
        }catch(err){
            console.log(err);
        }
    }),
    updateDetails: thunk(async (action, data) => {
        try {
            const res = await axios.put('/api/head', data)
            action.setDeatails(res.data)
        }catch(err){
            console.log(err);
        }
    }),
    // Formations Model
    formations: [],
    setFormations: action((state, data) => {
        state.formations = data
    }),
    getFormations: thunk(async action => {
        try {
            const res = await axios.get('/api/formations')
            action.setFormations(res.data)
        }catch(err){
            console.log(err);
        }
    }),
    updateFormation: thunk(async (action, data) => {
        try {
            await axios.put(`/api/formation/${data.id}/edit`, data)
            action.getFormations()
        }catch(err){
            console.log(err);
        }
    }),
    addFormation: thunk(async (action) => {
        try {
            const data = {
                annee: 'annee',
                ville:'ville',
                pays:'pays',
                diplome:'Diplome',
                ecole:'ecole ou université',
            }
            await axios.post('/api/formation', data)
            action.getFormations()
        }catch(err){
            console.log(err);
        }
    }),
    deleteFormation: thunk(async (action, id) => {
        try {
            await axios.delete(`/api/formation/${id}`)
            action.getFormations()
        }catch(err){
            console.log(err);
        }
    }),
    // Experiences Model
    experiences: [],
    setExpriences: action((state, data) => {
        state.experiences = data
    }),
    getExpriences: thunk(async action => {
        try {
            const res = await axios.get('/api/experiences')
            action.setExpriences(res.data)
        }catch(err){
            console.log(err);
        }
    }),
    addExprience: thunk(async (action) => {
        try {
            const data = {
                entreprise: 'entreprise',
                start:'start year',
                end:'end year',
                post:'post',
                taches:'votre taches',
            }
            await axios.post('/api/experience', data)
            action.getExpriences()
        }catch(err){
            console.log(err);
        }
    }),
    updateExperience: thunk(async (action, data) => {
        try {
            await axios.put(`/api/experience/${data.id}/edit`, data)
            action.getExpriences()
        }catch(err){
            console.log(err);
        }
    }),
    deleteExprience: thunk(async (action, id) => {
        try {
            await axios.delete(`/api/experience/${id}`)
            action.getExpriences()
        }catch(err){
            console.log(err);
        }
    }),
    // Langues Model
    langues: [],
    setLangues: action((state, data) => {
        state.langues = data
    }),
    getLangues: thunk(async action => {
        try {
            const res = await axios.get('/api/langues')
            action.setLangues(res.data)
        }catch(err){
            console.log(err);
        }
    }),
    addLangue: thunk(async (action) => {
        try {
            const data = {
                langue: 'langue',
                niveau:'debutant',
            }
            await axios.post('/api/langue', data)
            action.getLangues()
        }catch(err){
            console.log(err);
        }
    }),
    updateLangue: thunk(async (action, data) => {
        try {
            await axios.put(`/api/langue/${data.id}/edit`, data)
            action.getLangues()
        }catch(err){
            console.log(err);
        }
    }),
    deleteLangue: thunk(async (action, id) => {
        try {
            await axios.delete(`/api/langue/${id}`)
            action.getLangues()
        }catch(err){
            console.log(err);
        }
    }),
    // Competences Model
    competences: [],
    setCompetences: action((state, data) => {
        state.competences = data
    }),
    getCompetences: thunk(async action => {
        try {
            const res = await axios.get('/api/competences')
            action.setCompetences(res.data)
        }catch(err){
            console.log(err);
        }
    }),
    addCompetence: thunk(async (action) => {
        try {
            const data = {
                competence: 'competence',
                niveau:'debutant',
            }
            await axios.post('/api/competence', data)
            action.getCompetences()
        }catch(err){
            console.log(err);
        }
    }),
    updateCompetence: thunk(async (action, data) => {
        try {
            await axios.put(`/api/competence/${data.id}/edit`, data)
            action.getCompetences()
        }catch(err){
            console.log(err);
        }
    }),
    deleteCompetence: thunk(async (action, id) => {
        try {
            await axios.delete(`/api/competence/${id}`)
            action.getCompetences()
        }catch(err){
            console.log(err);
        }
    }),
    // Competences Model
    links: [],
    setLinks: action((state, data) => {
        state.links = data
    }),
    getLinks: thunk(async action => {
        try {
            const res = await axios.get('/api/liens')
            action.setLinks(res.data)
        }catch(err){
            console.log(err);
        }
    }),
    addLink: thunk(async (action) => {
        try {
            const data = {
                label: 'nom de site',
                lien:'lien de site',
            }
            await axios.post('/api/lien', data)
            action.getLinks()
        }catch(err){
            console.log(err);
        }
    }),
    updateLink: thunk(async (action, data) => {
        try {
            await axios.put(`/api/lien/${data.id}/edit`, data)
            action.getLinks()
        }catch(err){
            console.log(err);
        }
    }),
    deleteLink: thunk(async (action, id) => {
        try {
            await axios.delete(`/api/lien/${id}`)
            action.getLinks()
        }catch(err){
            console.log(err);
        }
    }),

})

export default Store