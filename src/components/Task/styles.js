import styled from 'styled-components/native'
import commonStyles from '../../commonStyles'

export const Container = styled.View`
    flex-direction: row;
    border-color: #AAA;
    border-bottom: 1px;
    align-items: center;
    padding: 10px 0px;
`

export const Description = styled.Text`
    font-family: ${commonStyles.fontFamily};
    color: ${commonStyles.colors.mainText};
    font-size: 15px;
`

export const EstimateAt = styled.Text`
    font-family: ${commonStyles.fontFamily};
    color: ${commonStyles.colors.subText};
    font-size: 15px;
`

export const DoneAt = styled.Text``

export const CheckContainer = styled.View`
    width: 20%;
    align-items: center;
    justify-content: center;
`

export const InfoContainer = styled.View``

export const Pending = styled.View`
    height:25px;
    width: 25px;
    border-radius: 13px;
    border-width: 1px;
    border-color: #555;
`
export const Done = styles.View`
    height:25px;
    width: 25px;
    border-radius: 13px;
    border-color: #4D7031;
    align-items: center;
    justify-content: center;
`

export const ClickCheck = styled.TouchableWithoutFeedback`
    
`