import styled from 'styled-components/native'
import commonStyles from '../../commonStyles'
export const Container = styled.SafeAreaView`
    flex: 1;
`
export const ContainerLabel = styled.Text`

`
export const ImgHeader = styled.ImageBackground`
    flex: 3;
`
export const TaskContainer = styled.View`
    flex:7;
`
export const Info = styled.View`
    flex:1;
    justify-content: flex-end;
`
export const Title = styled.Text`
    font-family: ${commonStyles.fontFamily};
    font-size: 50px;
    color: ${commonStyles.colors.secondary};
    margin-left: 20px;
    margin-bottom: 20px;
`
export const Date = styled.Text`
    font-family: ${commonStyles.fontFamily};
    font-size: 50px;
    color: ${commonStyles.colors.secondary};
    margin-left: 20px;
    margin-bottom: 30px;
`
export const TaskList = styled.ScrollView.attrs(()=> ({
    horizontal: false,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16
    }
}))`
`