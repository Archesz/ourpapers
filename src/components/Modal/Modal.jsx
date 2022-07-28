import React from 'react'
import './Modal.scss'

import {AiOutlineClose} from 'react-icons/ai'
const types = ['Repositório', 'Paper', 'Artigo', 'Thread', 'Website', 'Tutorial']

function Modal(props) {

    function closeModal(root){
        root.unmount()
    }

    return (
        <div className="modal-area">

            <form className="modal-container">

                <div className="modal-header">
                    <span className="modal-title">Adicionar Conteúdo</span>
                    <AiOutlineClose className="close-icon" onClick={() => {closeModal(props.root)}}/>
                </div>

                <div className="form-group">
                    <label className="label" for="">Link</label>
                    <input type="url" className="form-control" required placeholder="Ex: https://example.com" />
                </div>

                <div className="form-group">
                    <label className="label" for="">Seu nome</label>
                    <input type="text" className="form-control" required placeholder="Ex: Arch" />
                </div>

                <div className="form-group">
                    <label className="label" for="">Tipo de Conteúdo</label>
                    <select className="form-control">

                        {types.map((type, i) => {
                            return (
                                <option value={type} key={i}>{type}</option>
                            )
                        })}

                    </select>
                </div>

                <div className="form-group">
                    <label className="label" for="">Titulo do conteúdo</label>
                    <input type="text" className="form-control" required placeholder="Ex: Arch" />
                </div>

                <div className="form-group">
                    <label className="label" for="">Palavras Chaves</label>
                    <div className="keywords-area">
                        <input type="text" className="form-control keyword" placeholder="Ex: Arch" />
                        <input type="text" className="form-control keyword" placeholder="Ex: Arch" />
                        <input type="text" className="form-control keyword" placeholder="Ex: Arch" />
                    </div>
                </div>
                
                <button className="btn-submit" type="submit">Adicionar</button>

            </form>

        </div>
    )
}

export default Modal