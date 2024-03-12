import { FormContainer, Form, Input, StyledLabel, Botao } from "./FormularioPostagem.styled";

export const FormularioCadastro = (props) => {
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form onSubmit={props.atualizar}>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange={props.onChangeTitulo} />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={props.onChangeImagem} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={props.onChangeDescricao} />
        </StyledLabel>

        <Botao>
          Atualizar Imagem
        </Botao>

      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
