import styled from 'styled-components'

const DexCardWrapper = styled.aside`
  background-color: var(--color-primary-2);
  width: 370px;
  min-height: 129px;
  cursor: pointer;
  color: var(--color-primary-4);
  
  .bg-info {
    background-color: var(--color-primary-3);
  }
  
  .bg-pokemon {
    min-width: 82.5px;
    min-height: 85px;
  }
  
  .pokemon-number {
    min-width: 55px;
    min-height: 40px;
    color: var(--color-primary-2);
  }
`

export default DexCardWrapper;
