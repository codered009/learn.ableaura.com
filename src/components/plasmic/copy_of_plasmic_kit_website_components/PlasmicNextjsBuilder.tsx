// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: 8PdjaHwj5POw
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
import CommonLandingPage from "../../CommonLandingPage" // plasmic-import: 11u5FmBWm_bp/component
import IntegrateAnywhereSection from "../../IntegrateAnywhereSection" // plasmic-import: 09Hpzgjcr6LI/component
import ValuePropListItem from "../../ValuePropListItem" // plasmic-import: eFR6LkfCZMcF/component
import GraphicIcon from "../../GraphicIcon" // plasmic-import: e2aIHUlliT40/component
import Divider from "../../Divider" // plasmic-import: 5YxrxfKmRHtf/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme" // plasmic-import: K8kdSftIudYz/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_components.module.css" // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicNextjsBuilder.module.css" // plasmic-import: 8PdjaHwj5POw/css

import Icon20Icon from "./icons/PlasmicIcon__Icon20" // plasmic-import: 52_x3C6vVI9z/icon
import Icon27Icon from "./icons/PlasmicIcon__Icon27" // plasmic-import: Kgv7x1zin2ho/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22" // plasmic-import: o-cOIgwGaem4/icon

export type PlasmicNextjsBuilder__VariantMembers = {}

export type PlasmicNextjsBuilder__VariantsArgs = {}
type VariantPropType = keyof PlasmicNextjsBuilder__VariantsArgs
export const PlasmicNextjsBuilder__VariantProps = new Array<VariantPropType>()

export type PlasmicNextjsBuilder__ArgsType = {}
type ArgPropType = keyof PlasmicNextjsBuilder__ArgsType
export const PlasmicNextjsBuilder__ArgProps = new Array<ArgPropType>()

export type PlasmicNextjsBuilder__OverridesType = {
  root?: p.Flex<"div">
  commonLandingPage?: p.Flex<typeof CommonLandingPage>
  freeBox?: p.Flex<"div">
}

export interface DefaultNextjsBuilderProps {
  className?: string
}

function PlasmicNextjsBuilder__RenderFunc(props: {
  variants: PlasmicNextjsBuilder__VariantsArgs
  args: PlasmicNextjsBuilder__ArgsType
  overrides: PlasmicNextjsBuilder__OverridesType
  dataFetches?: PlasmicNextjsBuilder__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
  })

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
            sty.root,
            {
              [sty.root__global_theme_altHeadlineFont]: hasVariant(
                globalVariants,
                "theme",
                "altHeadlineFont"
              ),
              [sty.root__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            }
          )}
        >
          <CommonLandingPage
            data-plasmic-name={"commonLandingPage"}
            data-plasmic-override={overrides.commonLandingPage}
            className={classNames("__wab_instance", sty.commonLandingPage)}
            nextjs={"nextjs" as const}
            slot={"The next-generation\npage builder for Next.js"}
            slot3={
              "Starting on something new? Generate a complete Next.js codebase from scratch. Start a GitHub repo straight from within Plasmic, or run the create-plasmic-app CLI."
            }
            slot4={
              <p.Stack
                as={"div"}
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox)}
              >
                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__cx46
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon20Icon
                        className={classNames(defaultcss.all, sty.svg__hx49)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"No-code autonomy."}
                >
                  {
                    "Let marketing and design teams freely iterate, experiment, and optimize. Build visually, publish instantly."
                  }
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider__bjyNo)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__uUQsO
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon27Icon
                        className={classNames(defaultcss.all, sty.svg__qOUp)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"Eliminate development cycles."}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__eeZn2
                    )}
                  >
                    {
                      "Plug into any codebase and free up developers to focus on code, not pixel-pushing."
                    }
                  </div>
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider__eim0H)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__x6LXc
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon22Icon
                        className={classNames(defaultcss.all, sty.svg___6BiDm)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"Deliver outcomes."}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__nUhs0
                    )}
                  >
                    {
                      "Create fast, beautiful, personalized experiences that drive more conversions, revenue, and brand loyalty. In record time."
                    }
                  </div>
                </ValuePropListItem>
              </p.Stack>
            }
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__geuMj
              )}
            >
              {"Make your Next.js site editable to the whole team."}
            </div>
          </CommonLandingPage>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "commonLandingPage", "freeBox"],
  commonLandingPage: ["commonLandingPage", "freeBox"],
  freeBox: ["freeBox"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  commonLandingPage: typeof CommonLandingPage
  freeBox: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNextjsBuilder__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNextjsBuilder__VariantsArgs
    args?: PlasmicNextjsBuilder__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicNextjsBuilder__Fetches
  } & Omit<PlasmicNextjsBuilder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNextjsBuilder__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNextjsBuilder__ArgProps,
      internalVariantPropNames: PlasmicNextjsBuilder__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicNextjsBuilder__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicNextjsBuilder"
  } else {
    func.displayName = `PlasmicNextjsBuilder.${nodeName}`
  }
  return func
}

export const PlasmicNextjsBuilder = Object.assign(
  // Top-level PlasmicNextjsBuilder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    commonLandingPage: makeNodeComponent("commonLandingPage"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicNextjsBuilder
    internalVariantProps: PlasmicNextjsBuilder__VariantProps,
    internalArgProps: PlasmicNextjsBuilder__ArgProps,
  }
)

export default PlasmicNextjsBuilder
/* prettier-ignore-end */
