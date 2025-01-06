import styled from 'styled-components'

export const Container = styled.div`
  background-color: #25262c;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto', sans-serif;
`

export const Image = styled.img`
  margin-bottom: 20px;
`

export const ButtonList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 10px;
  margin-bottom: 20px;
`

export const ListItem = styled.li``

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => (props.active ? '#faff00' : '#e6e6e6')};
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #1b1c22;
  color: #f8fafc;
  border: 1px solid #334155;
  border-radius: 4px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  resize: none;

  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`
