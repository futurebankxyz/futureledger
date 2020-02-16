import React from "react"


import { Grommet, Main, Box, Heading} from "grommet"


const theme = {
	global: {
		font: {
			family: "Roboto",
			size: "18px",
			height: "20px"
        },
        colors: {
            darkFuture: "#333639",
            pinkFuture: ""
        }
	}
}

const App = () => {
  return (
		<Grommet theme={theme}>
            <Main pad="large" background="darkFuture">
                <Box pad="medium" align="center">
				    <Heading size="small" textAlign="center">Future Ledger</Heading>
			    </Box>
            
            </Main>
		</Grommet>
  )
}

export default App;
