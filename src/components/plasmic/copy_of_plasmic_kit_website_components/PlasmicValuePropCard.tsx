// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: mEoQ9JVsYXZg
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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: KSAzOQ4LXGzQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_components.module.css" // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicValuePropCard.module.css" // plasmic-import: mEoQ9JVsYXZg/css

import codePlasmicloaderOlERkEInmDtr from "./images/codePlasmicloader.png" // plasmic-import: olERkEInmDtr/picture

export type PlasmicValuePropCard__VariantMembers = {}

export type PlasmicValuePropCard__VariantsArgs = {}
type VariantPropType = keyof PlasmicValuePropCard__VariantsArgs
export const PlasmicValuePropCard__VariantProps = new Array<VariantPropType>()

export type PlasmicValuePropCard__ArgsType = {
  descrip?: React.ReactNode
  children?: React.ReactNode
  num?: React.ReactNode
  img?: React.ReactNode
}

type ArgPropType = keyof PlasmicValuePropCard__ArgsType
export const PlasmicValuePropCard__ArgProps = new Array<ArgPropType>(
  "descrip",
  "children",
  "num",
  "img"
)

export type PlasmicValuePropCard__OverridesType = {
  root?: p.Flex<"div">
}

export interface DefaultValuePropCardProps {
  descrip?: React.ReactNode
  children?: React.ReactNode
  num?: React.ReactNode
  img?: React.ReactNode
  className?: string
}

function PlasmicValuePropCard__RenderFunc(props: {
  variants: PlasmicValuePropCard__VariantsArgs
  args: PlasmicValuePropCard__ArgsType
  overrides: PlasmicValuePropCard__OverridesType
  dataFetches?: PlasmicValuePropCard__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  })

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__kNkTj)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__c4Rif)}>
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children,
          })}

          {p.renderPlasmicSlot({
            defaultContents: "1",
            value: args.num,
            className: classNames(sty.slotTargetNum),
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: "Integrate into your code.",
          value: args.descrip,
          className: classNames(sty.slotTargetDescrip),
        })}
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.freeBox__j2PeL)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__tox3E)}
              displayHeight={"100%" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              src={{
                src: codePlasmicloaderOlERkEInmDtr,
                fullWidth: 1092,
                fullHeight: 818,
                aspectRatio: undefined,
              }}
            />
          ),

          value: args.img,
        })}
      </div>
    </p.Stack>
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
  PlasmicValuePropCard__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuePropCard__VariantsArgs
    args?: PlasmicValuePropCard__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicValuePropCard__Fetches
  } & Omit<PlasmicValuePropCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuePropCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuePropCard__ArgProps,
      internalVariantPropNames: PlasmicValuePropCard__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicValuePropCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicValuePropCard"
  } else {
    func.displayName = `PlasmicValuePropCard.${nodeName}`
  }
  return func
}

export const PlasmicValuePropCard = Object.assign(
  // Top-level PlasmicValuePropCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValuePropCard
    internalVariantProps: PlasmicValuePropCard__VariantProps,
    internalArgProps: PlasmicValuePropCard__ArgProps,
  }
)

export default PlasmicValuePropCard
/* prettier-ignore-end */
