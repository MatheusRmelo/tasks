import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import moment from 'moment'
import 'moment/locale/pt-br'

import  { Container, Description, EstimateAt, ClickCheck, CheckContainer, InfoContainer, Pending, Done } from './styles'



export default function Tasks(props){

    const doneOrNotStyle = props.doneAt != null ? {textDecorationLine: 'line-through'} : null
    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    function getCheckView(doneAt){
        if ( doneAt !== null){
            return (
                <Done>
                    <FontAwesome name="check" size={20} color="#FFF" />
                </Done>
            )
        }else{
            return (
                <Pending></Pending>
            )
        }
    }
    return (
        <Container>
            <ClickCheck onPress={() => props.toggleTask(props.id)}>
                <CheckContainer>
                    {getCheckView(props.doneAt)}
                </CheckContainer>
            </ClickCheck>
            
            <InfoContainer>
                <Description style={doneOrNotStyle}>{props.description}</Description>
                <EstimateAt>{formattedDate}</EstimateAt>
            </InfoContainer>
            
            
        </Container>
    )
}