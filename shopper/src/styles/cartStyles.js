import styled from 'styled-components'

export const CartFull = styled.div`
background-color: #beddd1;
`

export const DeleteDiv = styled.div`
display: flex;
justify-content: flex-end;
&:hover{
    cursor: pointer;
}
`

export const CartDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const CartButton = styled.button`
display: flex;
justify-content: flex-end;
color: #2DA77A;
border-radius: 10px;
background-color: white;
&:hover{
background-color: #2DA77A;
cursor: pointer;
color: white;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const AdjustQuantityDiv = styled.div`
display: flex;
justify-content: flex-end;
padding-left: 15px;
margin-bottom: 15px;
&:hover{
    cursor: pointer;
}
`

export const CartInput = styled.input`
border-radius: 10px;
`

export const ProductCart = styled.div`
border: 1px;
border-style: solid;
margin-top: 1vh;
`

export const CartPrice = styled.span`
font-weight: bold;
`

export const CartTotal = styled.div`
margin-top: 10vh;
`