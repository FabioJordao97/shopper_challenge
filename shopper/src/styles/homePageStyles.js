import styled from 'styled-components'

export const ProductPhoto = styled.img`
height:120px;
width: 120px;

`

export const ProductBox = styled.div`
display: flex;
justify-content: center;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;
  padding: 5px;
  margin-top: 2vh;
  margin-bottom: 2vh;
`

export const TitleDiv = styled.div`
display: flex;
justify-content: center;
`

export const TitleGreen = styled.h2`
color: #2DA77A;
padding-left: 5px;
`

export const ProductCard = styled.div`
border: 1px;
box-shadow: 0px 2px 11px 1px rgba(0, 0, 29, 0.22);
margin-top: 2vh;
`

export const ProductName = styled.p`
text-align: center;
font-size: 12px;
font-weight: bold;
`

export const ProductPrice = styled.p`
display: inline;
color: #2DA77A;
font-weight: bold;
`

export const ProductButton = styled.button`
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

export const ButtonBox = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 2vh;
`