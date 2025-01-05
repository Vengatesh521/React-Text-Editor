import React, {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Container,
  Heading,
  Image,
  ButtonList,
  ListItem,
  StyledButton,
  Textarea,
} from './StyledComponents'

class App extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  toggleBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <Container>
        <Heading>Text Editor</Heading>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <ButtonList>
          <ListItem>
            <StyledButton
              data-testid="bold"
              active={bold}
              onClick={this.toggleBold}
            >
              <VscBold size={25} />
            </StyledButton>
          </ListItem>
          <ListItem>
            <StyledButton
              active={italic}
              onClick={this.toggleItalic}
              data-testid="italic"
            >
              <GoItalic size={25} />
            </StyledButton>
          </ListItem>
          <ListItem>
            <StyledButton
              active={underline}
              onClick={this.toggleUnderline}
              data-testid="underline"
            >
              <AiOutlineUnderline size={25} />
            </StyledButton>
          </ListItem>
        </ButtonList>

        <Textarea
          bold={bold}
          italic={italic}
          underline={underline}
          data-testid="textarea"
        />
      </Container>
    )
  }
}

export default App
