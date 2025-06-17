# Chainslake SDK

This is SDK for [Chainslake.io](https://chainslake.io) helps you quickly integrate status charts into your website.

## Install

`npm install chainslake`

## How to use


```typescript

import { ChainslakeContainer, ChainslakeStatus } from "chainslake"

function App() {

  return (
    <>
      <ChainslakeContainer url="https://chainslake.io">
        <ChainslakeStatus id="114599989649904453"></ChainslakeStatus>
      </ChainslakeContainer>
      
    </>
  )
}

export default App

```

## License

MIT
