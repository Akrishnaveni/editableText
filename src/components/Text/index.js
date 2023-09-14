import {Component} from 'react'
import {
  AppContainer,
  CardContainer,
  InputContainer,
  Paragraph,
  Heading,
  InputText,
  Button,
} from './styledComponent'

class Text extends Component {
  state = {
    textInput: '',
    isBtnClicked: false,
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({
      isBtnClicked: !prevState.isBtnClicked,
    }))
  }

  render() {
    const {textInput, isBtnClicked} = this.state
    const btnDisplaytext = isBtnClicked ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isBtnClicked ? (
              <Paragraph>{textInput}</Paragraph>
            ) : (
              <InputText
                type="text"
                value={textInput}
                onChange={this.onChangeTextInput}
              />
            )}
            <Button onClick={this.onClickBtn}>{btnDisplaytext}</Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}
export default Text
