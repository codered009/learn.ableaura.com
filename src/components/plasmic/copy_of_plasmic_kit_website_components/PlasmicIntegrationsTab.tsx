// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: doRwzqJ5VpAr
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
import * as sty from "./PlasmicIntegrationsTab.module.css" // plasmic-import: doRwzqJ5VpAr/css

export type PlasmicIntegrationsTab__VariantMembers = {
  active: "active"
}

export type PlasmicIntegrationsTab__VariantsArgs = {
  active?: SingleBooleanChoiceArg<"active">
}

type VariantPropType = keyof PlasmicIntegrationsTab__VariantsArgs
export const PlasmicIntegrationsTab__VariantProps = new Array<VariantPropType>(
  "active"
)

export type PlasmicIntegrationsTab__ArgsType = {
  children?: React.ReactNode
}

type ArgPropType = keyof PlasmicIntegrationsTab__ArgsType
export const PlasmicIntegrationsTab__ArgProps = new Array<ArgPropType>(
  "children"
)

export type PlasmicIntegrationsTab__OverridesType = {
  root?: p.Flex<"div">
}

export interface DefaultIntegrationsTabProps {
  children?: React.ReactNode
  active?: SingleBooleanChoiceArg<"active">
  className?: string
}

function PlasmicIntegrationsTab__RenderFunc(props: {
  variants: PlasmicIntegrationsTab__VariantsArgs
  args: PlasmicIntegrationsTab__ArgsType
  overrides: PlasmicIntegrationsTab__OverridesType
  dataFetches?: PlasmicIntegrationsTab__Fetches
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
        [sty.root__active]: hasVariant(variants, "active", "active"),
      })}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Frameworks",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildren__active]: hasVariant(
            variants,
            "active",
            "active"
          ),
        }),
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
  PlasmicIntegrationsTab__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIntegrationsTab__VariantsArgs
    args?: PlasmicIntegrationsTab__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicIntegrationsTab__Fetches
  } & Omit<PlasmicIntegrationsTab__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIntegrationsTab__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIntegrationsTab__ArgProps,
      internalVariantPropNames: PlasmicIntegrationsTab__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicIntegrationsTab__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicIntegrationsTab"
  } else {
    func.displayName = `PlasmicIntegrationsTab.${nodeName}`
  }
  return func
}

export const PlasmicIntegrationsTab = Object.assign(
  // Top-level PlasmicIntegrationsTab renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicIntegrationsTab
    internalVariantProps: PlasmicIntegrationsTab__VariantProps,
    internalArgProps: PlasmicIntegrationsTab__ArgProps,
  }
)

export default PlasmicIntegrationsTab
/* prettier-ignore-end */
