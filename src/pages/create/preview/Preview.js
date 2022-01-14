import React from 'react'
import './preview.css'
import Store from '../store'
import { Divider } from 'antd';

function Preview() {
    const details = Store.useStoreState(state => state.details);
    const formations = Store.useStoreState(state => state.formations);
    const experiences = Store.useStoreState(state => state.experiences);
    const langues = Store.useStoreState(state => state.langues);
    const competences = Store.useStoreState(state => state.competences);
    const links = Store.useStoreState(state => state.links);
    return (
        <div id="preview">
            <div id="paper">
                <Divider><h2>Details :</h2></Divider>
                {
                    details.image && (
                        <img src={`http://localhost:8000/storage/uploads/${details.image}`} alt="" className="avatar-preview"/>
                    )
                }
                <div className="inline">
                    <p><strong>Cv titre: </strong>{details.cv_title}</p>
                </div>
                <div className="inline">
                    <p><strong>Prenom :</strong>{details.prenom}</p>
                    <p><strong>Nom :</strong>{details.nom}</p>
                </div>
                <div className="inline">
                    <p><strong>Email :</strong>{details.email}</p>
                    <p><strong>Phone :</strong>{details.phone}</p>
                </div>
                <div className="inline">
                    <p><strong>Ville :</strong>{details.ville}</p>
                    <p><strong>Pays :</strong>{details.pays}</p>
                </div>
                <div className="inline">
                    <p><strong>A propos de moi</strong> </p>
                </div>
                <div className="inline">
                    <p>{details.description}</p>
                </div>
                <Divider><h2>Formations :</h2></Divider>
                
                {
                    formations.map(item => (
                        <div className="formation" key={item.id}>
                            <div className="left">
                                <p>{item.annee}</p>
                                <p>{item.ville} - {item.pays}</p>
                            </div>
                            <div className="right">
                                <p><strong>Diplome: </strong>{item.diplome}</p>
                                <p><strong>Ecole: </strong>{item.ecole}</p>
                            </div>
                        </div>
                    ))
                }
                <Divider><h2>Experiences :</h2></Divider>
                
                {
                    experiences.map(item => (
                        <div className="experience" key={item.id}>
                            <h3><strong>{item.entreprise}({item.start}-{item.end})</strong></h3>
                            <p><strong>Post Occupé: </strong>{item.post}</p>
                            <p><strong>Taches réalisé: </strong>{item.taches}</p>
                        </div>
                    ))
                }
                <Divider><h2>Langues :</h2></Divider>
                
                {
                    langues.map(item => (
                        <div className="langue" key={item.id}>
                            <div className="inline">
                                <p><strong>Langue: </strong>{item.langue}</p>
                                <p><strong>Niveau: </strong>{item.niveau}</p>
                            </div>
                        </div>
                    ))
                }
                <Divider><h2>Competences :</h2></Divider>
                
                {
                    competences.map(item => (
                        <div className="langue" key={item.id}>
                            <div className="inline">
                                <p><strong>Competence: </strong>{item.competence}</p>
                                <p><strong>Niveau: </strong>{item.niveau}</p>
                            </div>
                        </div>
                    ))
                }
                <Divider><h2>Liens :</h2></Divider>
                
                {
                    links.map(item => (
                        <div className="langue" key={item.id}>
                            <div className="inline">
                                <p><strong><a href={item.lien}>{item.label}</a></strong></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Preview
