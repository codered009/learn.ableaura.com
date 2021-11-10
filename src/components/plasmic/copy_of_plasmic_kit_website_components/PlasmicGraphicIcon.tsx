// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: e2aIHUlliT40
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

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_components.module.css" // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicGraphicIcon.module.css" // plasmic-import: e2aIHUlliT40/css

import Icon5Icon from "./icons/PlasmicIcon__Icon5" // plasmic-import: Qa2ocDt62Kvq/icon

export type PlasmicGraphicIcon__VariantMembers = {
  colors:
    | "purple"
    | "teal"
    | "green"
    | "yellow"
    | "pink"
    | "coral"
    | "white"
    | "gray"
    | "lightGraySolid"
    | "cyan"
    | "orange"
    | "darkGraySolid"
    | "blue"
    | "red"
    | "lightBlueSolid"
    | "lightPurpleSolid"
    | "lightPinkSolid"
    | "lightCoralSolid"
    | "lightOrangeSolid"
    | "lightYellowSolid"
    | "lightCyanSolid"
  shape: "circle"
}

export type PlasmicGraphicIcon__VariantsArgs = {
  colors?: SingleChoiceArg<
    | "purple"
    | "teal"
    | "green"
    | "yellow"
    | "pink"
    | "coral"
    | "white"
    | "gray"
    | "lightGraySolid"
    | "cyan"
    | "orange"
    | "darkGraySolid"
    | "blue"
    | "red"
    | "lightBlueSolid"
    | "lightPurpleSolid"
    | "lightPinkSolid"
    | "lightCoralSolid"
    | "lightOrangeSolid"
    | "lightYellowSolid"
    | "lightCyanSolid"
  >
  shape?: SingleChoiceArg<"circle">
}

type VariantPropType = keyof PlasmicGraphicIcon__VariantsArgs
export const PlasmicGraphicIcon__VariantProps = new Array<VariantPropType>(
  "colors",
  "shape"
)

export type PlasmicGraphicIcon__ArgsType = {
  children?: React.ReactNode
}

type ArgPropType = keyof PlasmicGraphicIcon__ArgsType
export const PlasmicGraphicIcon__ArgProps = new Array<ArgPropType>("children")

export type PlasmicGraphicIcon__OverridesType = {
  root?: p.Flex<"div">
}

export interface DefaultGraphicIconProps {
  children?: React.ReactNode
  colors?: SingleChoiceArg<
    | "purple"
    | "teal"
    | "green"
    | "yellow"
    | "pink"
    | "coral"
    | "white"
    | "gray"
    | "lightGraySolid"
    | "cyan"
    | "orange"
    | "darkGraySolid"
    | "blue"
    | "red"
    | "lightBlueSolid"
    | "lightPurpleSolid"
    | "lightPinkSolid"
    | "lightCoralSolid"
    | "lightOrangeSolid"
    | "lightYellowSolid"
    | "lightCyanSolid"
  >
  shape?: SingleChoiceArg<"circle">
  className?: string
}

function PlasmicGraphicIcon__RenderFunc(props: {
  variants: PlasmicGraphicIcon__VariantsArgs
  args: PlasmicGraphicIcon__ArgsType
  overrides: PlasmicGraphicIcon__OverridesType
  dataFetches?: PlasmicGraphicIcon__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__colors_blue]: hasVariant(variants, "colors", "blue"),
        [sty.root__colors_coral]: hasVariant(variants, "colors", "coral"),
        [sty.root__colors_cyan]: hasVariant(variants, "colors", "cyan"),
        [sty.root__colors_darkGraySolid]: hasVariant(
          variants,
          "colors",
          "darkGraySolid"
        ),
        [sty.root__colors_gray]: hasVariant(variants, "colors", "gray"),
        [sty.root__colors_green]: hasVariant(variants, "colors", "green"),
        [sty.root__colors_lightBlueSolid]: hasVariant(
          variants,
          "colors",
          "lightBlueSolid"
        ),
        [sty.root__colors_lightCoralSolid]: hasVariant(
          variants,
          "colors",
          "lightCoralSolid"
        ),
        [sty.root__colors_lightCyanSolid]: hasVariant(
          variants,
          "colors",
          "lightCyanSolid"
        ),
        [sty.root__colors_lightGraySolid]: hasVariant(
          variants,
          "colors",
          "lightGraySolid"
        ),
        [sty.root__colors_lightOrangeSolid]: hasVariant(
          variants,
          "colors",
          "lightOrangeSolid"
        ),
        [sty.root__colors_lightPinkSolid]: hasVariant(
          variants,
          "colors",
          "lightPinkSolid"
        ),
        [sty.root__colors_lightPurpleSolid]: hasVariant(
          variants,
          "colors",
          "lightPurpleSolid"
        ),
        [sty.root__colors_lightYellowSolid]: hasVariant(
          variants,
          "colors",
          "lightYellowSolid"
        ),
        [sty.root__colors_orange]: hasVariant(variants, "colors", "orange"),
        [sty.root__colors_pink]: hasVariant(variants, "colors", "pink"),
        [sty.root__colors_purple]: hasVariant(variants, "colors", "purple"),
        [sty.root__colors_red]: hasVariant(variants, "colors", "red"),
        [sty.root__colors_teal]: hasVariant(variants, "colors", "teal"),
        [sty.root__colors_white]: hasVariant(variants, "colors", "white"),
        [sty.root__colors_yellow]: hasVariant(variants, "colors", "yellow"),
        [sty.root__shape_circle]: hasVariant(variants, "shape", "circle"),
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Icon5Icon
            className={classNames(defaultcss.all, sty.svg___0RIE)}
            role={"img"}
          />
        ),

        value: args.children,
      })}
    </div>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGraphicIcon__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGraphicIcon__VariantsArgs
    args?: PlasmicGraphicIcon__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicGraphicIcon__Fetches
  } & Omit<PlasmicGraphicIcon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGraphicIcon__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicGraphicIcon__ArgProps,
      internalVariantPropNames: PlasmicGraphicIcon__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicGraphicIcon__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicGraphicIcon"
  } else {
    func.displayName = `PlasmicGraphicIcon.${nodeName}`
  }
  return func
}

export const PlasmicGraphicIcon = Object.assign(
  // Top-level PlasmicGraphicIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicGraphicIcon
    internalVariantProps: PlasmicGraphicIcon__VariantProps,
    internalArgProps: PlasmicGraphicIcon__ArgProps,
  }
)

export default PlasmicGraphicIcon
/* prettier-ignore-end */
