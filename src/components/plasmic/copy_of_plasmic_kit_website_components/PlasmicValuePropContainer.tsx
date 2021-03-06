// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: _o3ZwNEmt-hF
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
import GraphicIcon from "../../GraphicIcon" // plasmic-import: e2aIHUlliT40/component
import ButtonLink from "../../ButtonLink" // plasmic-import: WEYjixTZW6s/component

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_components.module.css" // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicValuePropContainer.module.css" // plasmic-import: _o3ZwNEmt-hF/css

import Icon5Icon from "./icons/PlasmicIcon__Icon5" // plasmic-import: Qa2ocDt62Kvq/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9" // plasmic-import: p2_lkkdrOOmY/icon
import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: 0UGn88PbJe7i/icon

export type PlasmicValuePropContainer__VariantMembers = {
  sections: "importTeal"
}

export type PlasmicValuePropContainer__VariantsArgs = {
  sections?: SingleChoiceArg<"importTeal">
}

type VariantPropType = keyof PlasmicValuePropContainer__VariantsArgs
export const PlasmicValuePropContainer__VariantProps =
  new Array<VariantPropType>("sections")

export type PlasmicValuePropContainer__ArgsType = {
  children?: React.ReactNode
  slot?: React.ReactNode
  slot2?: React.ReactNode
}

type ArgPropType = keyof PlasmicValuePropContainer__ArgsType
export const PlasmicValuePropContainer__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
)

export type PlasmicValuePropContainer__OverridesType = {
  container32?: p.Flex<"div">
  graphicIcon?: p.Flex<typeof GraphicIcon>
  buttonLink?: p.Flex<typeof ButtonLink>
}

export interface DefaultValuePropContainerProps {
  children?: React.ReactNode
  slot?: React.ReactNode
  slot2?: React.ReactNode
  sections?: SingleChoiceArg<"importTeal">
  className?: string
}

function PlasmicValuePropContainer__RenderFunc(props: {
  variants: PlasmicValuePropContainer__VariantsArgs
  args: PlasmicValuePropContainer__ArgsType
  overrides: PlasmicValuePropContainer__OverridesType
  dataFetches?: PlasmicValuePropContainer__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"container32"}
      data-plasmic-override={overrides.container32}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.container32,
        {
          [sty.container32__sections_importTeal]: hasVariant(
            variants,
            "sections",
            "importTeal"
          ),
        }
      )}
    >
      <GraphicIcon
        data-plasmic-name={"graphicIcon"}
        data-plasmic-override={overrides.graphicIcon}
        className={classNames("__wab_instance", sty.graphicIcon, {
          [sty.graphicIcon__sections_importTeal]: hasVariant(
            variants,
            "sections",
            "importTeal"
          ),
        })}
        colors={
          hasVariant(variants, "sections", "importTeal")
            ? ("teal" as const)
            : undefined
        }
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "sections", "importTeal")
              ? Icon9Icon
              : Icon5Icon
          }
          className={classNames(defaultcss.all, sty.svg__wDgMm, {
            [sty.svg__sections_importTeal__wDgMmikpSy]: hasVariant(
              variants,
              "sections",
              "importTeal"
            ),
          })}
          role={"img"}
        />
      </GraphicIcon>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__dtT7P)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__bKae)}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__oIv6W)}>
            {p.renderPlasmicSlot({
              defaultContents: "Zero lock-in",
              value: args.children,
              className: classNames(sty.slotTargetChildren),
            })}
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__y9V2K)}>
            {p.renderPlasmicSlot({
              defaultContents: "You own everything you make in Plasmic.",
              value: args.slot,
              className: classNames(sty.slotTargetSlot),
            })}
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__d6Zs6)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Check the React components into your git repository. Want to eject? Walk away any time with plain React code.",
              value: args.slot2,
              className: classNames(sty.slotTargetSlot2),
            })}
          </div>
        </p.Stack>

        <ButtonLink
          data-plasmic-name={"buttonLink"}
          data-plasmic-override={overrides.buttonLink}
          className={classNames("__wab_instance", sty.buttonLink, {
            [sty.buttonLink__sections_importTeal]: hasVariant(
              variants,
              "sections",
              "importTeal"
            ),
          })}
          icon={
            <IconIcon
              className={classNames(defaultcss.all, sty.svg__bDocs)}
              role={"img"}
            />
          }
          label={"Learn more"}
          type={
            hasVariant(variants, "sections", "importTeal") ? ["rightIcon"] : []
          }
        />
      </p.Stack>

      <div
        className={classNames(defaultcss.all, sty.freeBox__kojPj, {
          [sty.freeBox__sections_importTeal__kojPjikpSy]: hasVariant(
            variants,
            "sections",
            "importTeal"
          ),
        })}
      />
    </p.Stack>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  container32: ["container32", "graphicIcon", "buttonLink"],
  graphicIcon: ["graphicIcon"],
  buttonLink: ["buttonLink"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  container32: "div"
  graphicIcon: typeof GraphicIcon
  buttonLink: typeof ButtonLink
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValuePropContainer__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuePropContainer__VariantsArgs
    args?: PlasmicValuePropContainer__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicValuePropContainer__Fetches
  } & Omit<PlasmicValuePropContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuePropContainer__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuePropContainer__ArgProps,
      internalVariantPropNames: PlasmicValuePropContainer__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicValuePropContainer__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "container32") {
    func.displayName = "PlasmicValuePropContainer"
  } else {
    func.displayName = `PlasmicValuePropContainer.${nodeName}`
  }
  return func
}

export const PlasmicValuePropContainer = Object.assign(
  // Top-level PlasmicValuePropContainer renders the root element
  makeNodeComponent("container32"),
  {
    // Helper components rendering sub-elements
    graphicIcon: makeNodeComponent("graphicIcon"),
    buttonLink: makeNodeComponent("buttonLink"),

    // Metadata about props expected for PlasmicValuePropContainer
    internalVariantProps: PlasmicValuePropContainer__VariantProps,
    internalArgProps: PlasmicValuePropContainer__ArgProps,
  }
)

export default PlasmicValuePropContainer
/* prettier-ignore-end */
