// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: hfvAFdV7n7DZ
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
import ButtonLink from "../../ButtonLink" // plasmic-import: WEYjixTZW6s/component

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_components.module.css" // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicBelowFoldCtaRow.module.css" // plasmic-import: hfvAFdV7n7DZ/css

import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: 0UGn88PbJe7i/icon
import Icon57Icon from "./icons/PlasmicIcon__Icon57" // plasmic-import: FcEY2hwVp-ha/icon
import image42ZEmVkTdake7 from "./images/image42.svg" // plasmic-import: zEmVK-Tdake7/picture

export type PlasmicBelowFoldCtaRow__VariantMembers = {
  hideLevels: "hideLevels"
}

export type PlasmicBelowFoldCtaRow__VariantsArgs = {
  hideLevels?: SingleBooleanChoiceArg<"hideLevels">
}

type VariantPropType = keyof PlasmicBelowFoldCtaRow__VariantsArgs
export const PlasmicBelowFoldCtaRow__VariantProps = new Array<VariantPropType>(
  "hideLevels"
)

export type PlasmicBelowFoldCtaRow__ArgsType = {}
type ArgPropType = keyof PlasmicBelowFoldCtaRow__ArgsType
export const PlasmicBelowFoldCtaRow__ArgProps = new Array<ArgPropType>()

export type PlasmicBelowFoldCtaRow__OverridesType = {
  root?: p.Flex<"div">
  img?: p.Flex<typeof p.PlasmicImg>
}

export interface DefaultBelowFoldCtaRowProps {
  hideLevels?: SingleBooleanChoiceArg<"hideLevels">
  className?: string
}

function PlasmicBelowFoldCtaRow__RenderFunc(props: {
  variants: PlasmicBelowFoldCtaRow__VariantsArgs
  args: PlasmicBelowFoldCtaRow__ArgsType
  overrides: PlasmicBelowFoldCtaRow__OverridesType
  dataFetches?: PlasmicBelowFoldCtaRow__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__hideLevels]: hasVariant(
          variants,
          "hideLevels",
          "hideLevels"
        ),
      })}
    >
      <ButtonLink
        className={classNames("__wab_instance", sty.buttonLink__hwdBi)}
        href={"https://plasmic.app/signup" as const}
        icon={
          <IconIcon
            className={classNames(defaultcss.all, sty.svg__hAe1Y)}
            role={"img"}
          />
        }
        label={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text___8Og2K
            )}
          >
            {"Try Plasmic for free"}
          </div>
        }
        type={["purpleSolid"]}
      />

      {(hasVariant(variants, "hideLevels", "hideLevels") ? false : true) ? (
        <ButtonLink
          className={classNames("__wab_instance", sty.buttonLink__ro1Yf, {
            [sty.buttonLink__hideLevels__ro1YfgsYzX]: hasVariant(
              variants,
              "hideLevels",
              "hideLevels"
            ),
          })}
          href={"https://studio.plasmic.app/starters/game" as const}
          icon={
            <IconIcon
              className={classNames(defaultcss.all, sty.svg___6MFUn)}
              role={"img"}
            />
          }
          label={
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___0Jeeb)}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"24px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"24px" as const}
                src={{
                  src: image42ZEmVkTdake7,
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1,
                }}
              />

              <div className={classNames(defaultcss.all, sty.freeBox__npSOi)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__l5SVv
                  )}
                >
                  {"Play "}
                </div>

                <Icon57Icon
                  className={classNames(defaultcss.all, sty.svg__lqgdy)}
                  role={"img"}
                  title={"Plasmic Levels" as const}
                />
              </div>
            </p.Stack>
          }
          type={["purpleOutline"]}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  img: typeof p.PlasmicImg
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBelowFoldCtaRow__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBelowFoldCtaRow__VariantsArgs
    args?: PlasmicBelowFoldCtaRow__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicBelowFoldCtaRow__Fetches
  } & Omit<PlasmicBelowFoldCtaRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBelowFoldCtaRow__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBelowFoldCtaRow__ArgProps,
      internalVariantPropNames: PlasmicBelowFoldCtaRow__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicBelowFoldCtaRow__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicBelowFoldCtaRow"
  } else {
    func.displayName = `PlasmicBelowFoldCtaRow.${nodeName}`
  }
  return func
}

export const PlasmicBelowFoldCtaRow = Object.assign(
  // Top-level PlasmicBelowFoldCtaRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicBelowFoldCtaRow
    internalVariantProps: PlasmicBelowFoldCtaRow__VariantProps,
    internalArgProps: PlasmicBelowFoldCtaRow__ArgProps,
  }
)

export default PlasmicBelowFoldCtaRow
/* prettier-ignore-end */
