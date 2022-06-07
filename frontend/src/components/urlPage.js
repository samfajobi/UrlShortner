import styled from "styled-components"
import useState from "react";


const Container = styled.div`
  
`

const Wrapper = styled.div`
`

const Input = styled.div`

`

const UrlHeader = styled.h2``



const urlPage = () => {

    const [ url, setUrl ] = useState("")

  return (
      <Container>
          <Wrapper>
              <UrlHeader>Insert Your Url Here!!!</UrlHeader>
              <Input placeholder="Type in your URL....."/>
          </Wrapper>
      </Container>
   
  )
}

export default urlPage