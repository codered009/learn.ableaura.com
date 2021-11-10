// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: 0VR75-HO9pg3
import * as React from "react"

import { Link, GatsbyLinkProps as LinkProps } from "gatsby"

import * as p from "@plasmicapp/react-web"

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import DesignLandingPage from "../../DesignLandingPage" // plasmic-import: 4vgBZ-6TeYno/component
import IntegrateAnywhereSection from "../../IntegrateAnywhereSection" // plasmic-import: 09Hpzgjcr6LI/component

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_components.module.css" // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicWebDesignTool.module.css" // plasmic-import: 0VR75-HO9pg3/css

export type PlasmicWebDesignTool__VariantMembers = {}

export type PlasmicWebDesignTool__VariantsArgs = {}
type VariantPropType = keyof PlasmicWebDesignTool__VariantsArgs
export const PlasmicWebDesignTool__VariantProps = new Array<VariantPropType>()

export type PlasmicWebDesignTool__ArgsType = {}
type ArgPropType = keyof PlasmicWebDesignTool__ArgsType
export const PlasmicWebDesignTool__ArgProps = new Array<ArgPropType>()

export type PlasmicWebDesignTool__OverridesType = {
  root?: p.Flex<"div">
  designLandingPage?: p.Flex<typeof DesignLandingPage>
}

export interface DefaultWebDesignToolProps {
  className?: string
}

function PlasmicWebDesignTool__RenderFunc(props: {
  variants: PlasmicWebDesignTool__VariantsArgs
  args: PlasmicWebDesignTool__ArgsType
  overrides: PlasmicWebDesignTool__OverridesType
  dataFetches?: PlasmicWebDesignTool__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <DesignLandingPage
            data-plasmic-name={"designLandingPage"}
            data-plasmic-override={overrides.designLandingPage}
            className={classNames("__wab_instance", sty.designLandingPage)}
            slot4={"The most powerful web design tool is here."}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "designLandingPage"],
  designLandingPage: ["designLandingPage"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  designLandingPage: typeof DesignLandingPage
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWebDesignTool__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWebDesignTool__VariantsArgs
    args?: PlasmicWebDesignTool__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicWebDesignTool__Fetches
  } & Omit<PlasmicWebDesignTool__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWebDesignTool__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicWebDesignTool__ArgProps,
      internalVariantPropNames: PlasmicWebDesignTool__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicWebDesignTool__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicWebDesignTool"
  } else {
    func.displayName = `PlasmicWebDesignTool.${nodeName}`
  }
  return func
}

export const PlasmicWebDesignTool = Object.assign(
  // Top-level PlasmicWebDesignTool renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    designLandingPage: makeNodeComponent("designLandingPage"),

    // Metadata about props expected for PlasmicWebDesignTool
    internalVariantProps: PlasmicWebDesignTool__VariantProps,
    internalArgProps: PlasmicWebDesignTool__ArgProps,
  }
)

export default PlasmicWebDesignTool
/* prettier-ignore-end */