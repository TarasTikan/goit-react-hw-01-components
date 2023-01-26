import styled from '@emotion/styled'

export const ContainerFriendList = styled.ul`
list-style:none;
display:flex;
flex-direction: column;
align-items: center;
padding-bottom: 50px;
`

export const Name = styled.p`
font-weight: 700;
`
export const FriendItem = styled.li`
display:flex;
align-items: center;
border: 1px solid #eeeeee;
width: 250px;
padding-top: 10px;
padding-bottom: 10px;
gap: 10px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
        0px 2px 2px rgba(0, 0, 0, 0.12);
`
export const IsOnlaine = styled.span`
width: 20px;
height: 20px;
margin-left: 10px;
border-radius: 50%;
background-color: ${props => {
    switch (props.type) {
        case "true":
            return 'green'
         case "false":
            return 'red'
         default:
            return '#5c7171'
    }
}};
`