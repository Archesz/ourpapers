import React, { useState } from 'react'
import Menu from '../components/Menu/Menu'
import '../styles/main.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import Card from '../components/Card/Card';

import content from '../data/card.json'

const papers = content["Papers"]
const types = ["Paper", "Artigo", "Social", "Website", "Repositório", "Medium"]

function getAllKeywords(papers){
    let all_keywords = []
    for(let i = 0; i !== papers.length; i++){
        let keywords = papers[i]["Keywords"].split(",")
        for(let j = 0; j !== keywords.length; j++){
            if(all_keywords.indexOf(keywords[j]) === -1){
                all_keywords.push(keywords[j])
            }
        }
    }
    return all_keywords
}

function Main() {

    const keywords = getAllKeywords(papers)

    const [view, setView] = useState("hide");
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [type, setType] = useState("")

    function searchTag(){
        let tag = document.querySelector("#tag_input").value
        setTag(tag)
    }

    function searchTitle(){
        let title = document.querySelector("#title_input").value
        setTitle(title.toLowerCase());
    }

    function searchType(){
        let type = document.querySelector("#type_input").value
        setType(type)
    }

    function filterView() {
        if (view === "hide") {
            setView("show");
        } else {
            setView("hide");
        }
    }

    return (

        <div className="container">

            <Menu />

            <div className="content-field">

                <div className="content-header">
                    <div className="content-row">
                        <span className="content-title">Conteúdos</span>
                        <AiOutlineSearch className="header-icon" onClick={filterView} />
                    </div>

                    <div className={`search-${view}`}>

                        <div className="search-group">
                            <label className="search-label">Título</label>
                            <input type="text" className="form-control" placeholder="Ex: Segmentantion image with Watershed" id="title_input" onChange={searchTitle}/>
                        </div>

                        <div className="search-group">
                            <label className="search-label">Keyword</label>
                            <select className="search-select" id="tag_input" onChange={searchTag}>
                                <option value="">Selecionar Tag</option>
                                {keywords.map((keyword, index) => {
                                    return(
                                        <option value={keyword} key={index}>{keyword}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="search-group">
                            <label className="search-label">Type</label>
                            <select className="search-select" id="type_input" onChange={searchType}>
                                <option value="">Selecionar tipo</option>
                                <option value="red">Paper</option>
                                <option value="green">Artigo</option>
                                <option value="blue">Social</option>
                                <option value="pink">Website</option>
                                <option value="purple">Repositório</option>
                                <option value="yellow">Medium</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className="content-area">

                    {papers.map((paper, index) => {
                        if(paper["Title"].toLowerCase().includes(title) && paper["Keywords"].includes(tag) && paper["Theme"].includes(type)){
                            return(
                                <Card author={paper["Author"]} link={paper["Link"]} theme={paper["Theme"]} title={paper["Title"]} keywords={paper["Keywords"]} key={index}/>
                            )
                        }
                    })}

                </div>

            </div>


            <div id="modal-area"></div>

        </div>

    )
}

export default Main