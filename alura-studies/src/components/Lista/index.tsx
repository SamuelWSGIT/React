import React from "react";

function Lista() {
    const tarefa = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TipeScript',
        tempo: '03:00:00'
    }]
    return (
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefa.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;