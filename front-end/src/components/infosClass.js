'use client'

import './styles/form.css'
import { useState } from 'react'

export default function InfoClass() {

    const [image, setImage] = useState('');
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');

    const onChangeImage = (evt) => {
        setImage(evt.target.files[0])
    }

    const onChangecodigo = (evt) => {
        setCodigo(evt.target.value);
    };

    const onChangeDescricao = (evt) => {
        setDescricao(evt.target.value);
    }

    const onChangeInicio = (evt) => {
        setInicio(evt.target.value);
    }

    const onChangeFim = (evt) => {
        setFim(evt.target.value);
    }

    const sendForm = async (evt) => {
        evt.preventDefault();
        
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('codigo', codigo);
            formData.append('descricao', descricao);
            formData.append('inicio', inicio);
            formData.append('fim', fim);

            const responseFile = await fetch('http://localhost:3000/turmas', {
                method: 'POST',
                body: formData
            });   
                        
            if (!responseFile.ok) {
                throw new Error('Erro na response file ' + responseFile.statusText);
            }

            const json = await responseFile.json()
            console.log(json)
            
            // Handle success response here if needed
            
        } catch (err) {
            console.error('Error:', err.message);
            // Handle error
        }
    }

    return (
        <>
            <form className="form-pai" onSubmit={sendForm} method='post' encType='multipart/form-data'>
                <div className="interaction">
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastrar Turma</h3>
                        <div id="emailHelp" className="form-text">Realize o cadastro com atenção</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nome da turma</label>
                        <input type="text" name='codigo' value={codigo} onChange={onChangecodigo} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira o nome da turma" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Descrição da turma</label>
                        <input type="text" name='descricao' value={descricao} onChange={onChangeDescricao} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira a descrição da turma" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Início</label>
                        <input type="date" name='inicio' value={inicio} onChange={onChangeInicio} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira a data de início" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Fim</label>
                        <input type="date" name='fim' value={fim} onChange={onChangeFim} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira a data de início" />
                    </div>
                    <input type="file" name="image" onChange={onChangeImage} accept="image/*" required/>
                    <div className="form-check">
                    </div>
                    <button type="submit" className="button-avancar btn btn-danger">Aplicar</button>
                </div>
            </form>
        </>
    )
}
