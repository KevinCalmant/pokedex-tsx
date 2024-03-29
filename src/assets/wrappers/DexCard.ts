import styled from 'styled-components'

const DexCardWrapper = styled.div`
  background-color: var(--color-primary-2);
  width: 450px;
  min-height: 140px;
  cursor: pointer;
  color: var(--color-primary-4);
  
  .pokemon-name {
    text-transform: capitalize;  
    font-size: 1em;
  }
  
  .bg-info {
    background-color: var(--color-primary-3);
  }
  
  .pokemon-container {
    position: relative;
    width: 96px;
    height: 96px;
  }
  
  .pokeball {
    position: absolute;
    z-index: 1;
    width: 100px;
    height: 100px;
  }
  
  .pokemon {
    position: relative;
    z-index: 10;
  }
  
  .bg-pokemon {
    min-width: 82.5px;
    min-height: 85px;
    color: var(--color-primary-3);
  }
  
  .pokemon-number {
    min-width: 55px;
    min-height: 40px;
    color: var(--color-primary-1)
  }
`

export default DexCardWrapper
