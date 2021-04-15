import React, { useContext } from "react"
import { css } from "@emotion/core"
import { useTheme } from "@emotion/react"
import Context from "../store/context"
import Layout from "../components/Layout"

const IndexPage = () => {
  const { state, dispatch } = useContext(Context)

  const theme = useTheme()

  return (
    <Layout>
      <div
        css={css`
          h1,
          h2 {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}
      >
        <h1>Hello World</h1>
        <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
          Toggle Dark Mode
        </button>
        <h2>Dark Mode is {state.isDark ? "on" : "off"}</h2>
      </div>
    </Layout>
  )
}

export default IndexPage
