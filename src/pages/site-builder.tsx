// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react"
import { ScreenVariantProvider } from "../components/plasmic/copy_of_plasmic_kit_website_components/PlasmicGlobalVariant__Screen"
import { ThemeContext } from "../components/plasmic/copy_of_plasmic_kit_website_components/PlasmicGlobalVariant__Theme"
import { PlasmicSiteBuilder } from "../components/plasmic/copy_of_plasmic_kit_website_components/PlasmicSiteBuilder"

function SiteBuilder() {
  // Use PlasmicSiteBuilder to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicSiteBuilder are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicSiteBuilder is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <ThemeContext.Provider value={undefined}>
      <PlasmicSiteBuilder />
    </ThemeContext.Provider>
  )
}

export default SiteBuilder