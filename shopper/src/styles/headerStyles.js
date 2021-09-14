import styled from 'styled-components'

export const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
background-color: #2DA77A;
width: 100%;
`

export const CartCounter = styled.div`
display: flex;
justify-content: flex-end;
`

export const CartIcon = styled.div`
padding-top: 3vh;
padding-right: 4%;
&:hover{
    cursor: pointer
}
`

export const Logo = styled.img`
max-width: 120px;
max-height: 120px;
&:hover{
    cursor: pointer
}
`