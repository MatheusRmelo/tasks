import React, { useState } from 'react'

import { Container, TaskList , ImgHeader, TaskContainer, Info, Title, Date } from './styles'

import todayImg from '../../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../../components/Task'

export default function TaskList(){
    const moment = moment().locale('pt-br').format('ddd, D [de] MMMM')
    const [tasks, setTasks] = useState([
        {
            id: String(Math.random()),
            description: 'Comprar livro de UX Design',
            estimateAt: new Date(),
            doneAt: new Date()
        },
        {
            id: String(Math.random()),
            description: 'Ler livro de UX Design',
            estimateAt: new Date(),
            doneAt: null
        },
    ])

    function toggleTask(taskId){
        const tasksClone = [...tasks]
        tasksClone.forEach(task => {
            if( task.id === taskId){
                task.doneAt = task.doneAt ? null : new Date()
            }
        })
        setTasks(tasksClone)
    }

    return (
        <Container>
            <ImgHeader source={todayImg}>
                <Info>
                    <Title>Hoje</Title>
                    <Date>{moment}</Date>
                </Info>
            </ImgHeader>
            <TaskContainer>
                {tasks.map((item) => (
                    <TaskList>
                        <Task key={item.id} description={item.description} toggleTask={toggleTask} estimateAt={item.estimateAt} doneAt={item.doneAt} />
                    </TaskList>
                ))}
                
            </TaskContainer>
            
        </Container>
    )
}