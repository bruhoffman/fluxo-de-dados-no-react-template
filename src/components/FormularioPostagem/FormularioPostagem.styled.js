import styled from 'styled-components';

export const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 16px;
`

export const Form = styled.form`
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const Input = styled.input`
    padding: 8px;
    margin-left: 16px;
    border-radius: 5px;
`

export const StyledLabel = styled.label`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Botao = styled.button`
    background: orange;
    border: 1px solid darkorange;
    padding: 10px;
    border-radius: 5px;
`