import * as S from './styles'

const Main = ({ title = 'React Avançado', description = 'Teste' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="" />
  </S.Wrapper>
)
export default Main
