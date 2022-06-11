import styled from 'styled-components'

const DexCardWrapper = styled.aside`
  background-color: var(--color-primary-2);
  width: 370px;
  min-height: 125px;
  cursor: pointer;
  color: var(--color-primary-4);
  
  .bg-pokemon {
    background-color: var(--color-primary-3);
  }
  
  .pokemon-number {
    min-width: 55px;
    min-height: 40px;
    color: var(--color-primary-2);
  }
`

export default DexCardWrapper;
