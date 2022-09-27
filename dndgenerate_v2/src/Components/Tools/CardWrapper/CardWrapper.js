import styled from 'styled-components'

export default styled.div`
    display: inline-block;
    flex: 1 0 21%;
    box-shadow: 0 4px 8px 0 white;
    transition: 0.3s;
    transition: transform 0.3s;
    color: white;
    font-size: 30px;
    margin: 50px;
    background-color: rgba(84, 84, 84, 0.8);
  
    &:hover {
      transition: 0.3s;
      box-shadow: 0 8px 16px 0 #d72323;
      transform: scale(1.1);
      background-color: rgba(84, 84, 84, 1);
    }
  }
`