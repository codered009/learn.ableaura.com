// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: w-JITOqsTbyW
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
import Header from "../../Header" // plasmic-import: gm5-8uP8UsM/component
import PriceTier from "../../PriceTier" // plasmic-import: MBoow2FmrUFd/component
import Bullet from "../../Bullet" // plasmic-import: IexO7MBZURmx/component
import ButtonLink from "../../ButtonLink" // plasmic-import: WEYjixTZW6s/component
import PricingFeatureTable from "../../PricingFeatureTable" // plasmic-import: CqTmn5ZfZEy9/component
import Footer from "../../Footer" // plasmic-import: MOxc4yW_hfJ/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme" // plasmic-import: K8kdSftIudYz/globalVariant
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: KSAzOQ4LXGzQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_components.module.css" // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicPricing.module.css" // plasmic-import: w-JITOqsTbyW/css

import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: 0UGn88PbJe7i/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8" // plasmic-import: Zxwffj7XO7S3/icon

export type PlasmicPricing__VariantMembers = {}

export type PlasmicPricing__VariantsArgs = {}
type VariantPropType = keyof PlasmicPricing__VariantsArgs
export const PlasmicPricing__VariantProps = new Array<VariantPropType>()

export type PlasmicPricing__ArgsType = {}
type ArgPropType = keyof PlasmicPricing__ArgsType
export const PlasmicPricing__ArgProps = new Array<ArgPropType>()

export type PlasmicPricing__OverridesType = {
  root?: p.Flex<"div">
  header?: p.Flex<typeof Header>
  body?: p.Flex<"div">
  freeTier?: p.Flex<typeof PriceTier>
  proTier?: p.Flex<typeof PriceTier>
  teamTier?: p.Flex<typeof PriceTier>
  enterpriseTier?: p.Flex<typeof PriceTier>
  pricingFeatureTable?: p.Flex<typeof PricingFeatureTable>
  footer?: p.Flex<typeof Footer>
}

export interface DefaultPricingProps {
  className?: string
}

function PlasmicPricing__RenderFunc(props: {
  variants: PlasmicPricing__VariantsArgs
  args: PlasmicPricing__ArgsType
  overrides: PlasmicPricing__OverridesType
  dataFetches?: PlasmicPricing__Fetches
  forNode?: string
}) {
  const { variants, args, overrides, forNode, dataFetches } = props

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariants(),
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
              [sty.root__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            }
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header, {
              [sty.header__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            })}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            hasGap={true}
            className={classNames(defaultcss.all, sty.body, {
              [sty.body__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            })}
          >
            <div className={classNames(defaultcss.all, sty.freeBox__r3Hbj)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__zlfJk
                )}
              >
                {"Pricing"}
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__tngBz)}
            >
              <PriceTier
                data-plasmic-name={"freeTier"}
                data-plasmic-override={overrides.freeTier}
                className={classNames("__wab_instance", sty.freeTier)}
                subprice={" Forever"}
                title={"Starter"}
                valueProps={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__yWoEx)}
                  >
                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___7THw1
                      )}
                    >
                      {"Unlimited projects"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___38J0C
                      )}
                    >
                      {"Unlimited code-gen"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___5Z5Dl
                      )}
                    >
                      {"Up to 3 editors per team"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__w26Jv
                      )}
                    >
                      {"Up to 3 editors per project"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___5XxuU
                      )}
                    >
                      {"Unlimited viewers"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__kp1P4
                      )}
                    >
                      {"10K monthly page views"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__zyDq2
                      )}
                    >
                      {"30-day version history"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__omBsY
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__hy5KN
                        )}
                      >
                        {"Image optimization"}
                      </div>
                    </Bullet>
                  </p.Stack>
                }
              >
                <ButtonLink
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLink__r7OvG
                  )}
                  href={"https://plasmic.app/signup" as const}
                  icon={
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg___1VLm9)}
                      role={"img"}
                    />
                  }
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__vu6Z9
                      )}
                    >
                      {"Get started"}
                    </div>
                  }
                  type={["purpleSolid"]}
                />
              </PriceTier>

              <PriceTier
                data-plasmic-name={"proTier"}
                data-plasmic-override={overrides.proTier}
                className={classNames("__wab_instance", sty.proTier)}
                price={"$15"}
                subprice={"per collaborator/month"}
                title={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__wNoeK
                    )}
                  >
                    {"Starter"}
                  </div>
                }
                valueProps={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__fkWbJ)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__nn73F
                      )}
                    >
                      {"Everything in Starter, plus…"}
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__rMTqz
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__xrqd6
                        )}
                      >
                        {"Up to 10 collaborators per team"}
                      </div>
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__qAnwP
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__swoJk
                        )}
                      >
                        {"250K monthly page views"}
                      </div>
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__iwa4R
                      )}
                    >
                      {"90-day version history"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__pfg1J
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__mw1AF
                        )}
                      >
                        {"Standard support"}
                      </div>
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___1ZWnO
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text___5AsmJ
                        )}
                      >
                        {"Shared workspaces"}
                      </div>
                    </Bullet>
                  </p.Stack>
                }
              >
                <ButtonLink
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLink__fOi5Q
                  )}
                  href={"https://plasmic.app/basic-team" as const}
                  icon={
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__fcf7M)}
                      role={"img"}
                    />
                  }
                  label={"Sign up"}
                  type={["tomatoSolid"]}
                />
              </PriceTier>

              <PriceTier
                data-plasmic-name={"teamTier"}
                data-plasmic-override={overrides.teamTier}
                className={classNames("__wab_instance", sty.teamTier)}
                price={"$40"}
                subprice={"per collaborator/month"}
                title={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__k84Jm
                    )}
                  >
                    {"Growth"}
                  </div>
                }
                valueProps={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__dn3Yh)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__j4KJc
                      )}
                    >
                      {"Everything in Basic, plus…"}
                    </div>

                    <Bullet
                      className={classNames("__wab_instance", sty.bullet__e2SX)}
                    >
                      {"Up to 30 collaborators per team"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__m5QfR
                      )}
                    >
                      {"500K monthly page views"}
                    </Bullet>

                    {true ? (
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__ujEe8
                        )}
                      >
                        {"Optimization features"}
                      </Bullet>
                    ) : null}
                    {true ? (
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__pfalE
                        )}
                      >
                        {"Segmented content"}
                      </Bullet>
                    ) : null}
                    {true ? (
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__moh1Q
                        )}
                      >
                        {"Scheduled content"}
                      </Bullet>
                    ) : null}
                    {true ? (
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__vx7Ba
                        )}
                      >
                        {"Team permission groups"}
                      </Bullet>
                    ) : null}
                    {true ? (
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__ikHh4
                        )}
                      >
                        {"Advanced team roles"}
                      </Bullet>
                    ) : null}
                  </p.Stack>
                }
              >
                <ButtonLink
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLink__xjDIo
                  )}
                  href={"https://plasmic.app/growth-team" as const}
                  icon={
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__zjiGj)}
                      role={"img"}
                    />
                  }
                  label={"Sign up"}
                  type={["greenSolid"]}
                />
              </PriceTier>

              <PriceTier
                data-plasmic-name={"enterpriseTier"}
                data-plasmic-override={overrides.enterpriseTier}
                className={classNames("__wab_instance", sty.enterpriseTier)}
                price={"Customized"}
                subprice={"Annual billing only"}
                title={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__k3TYx
                    )}
                  >
                    {"Enterprise"}
                  </div>
                }
                valueProps={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox___0Jbev)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__h2Km
                      )}
                    >
                      {"Everything in Growth, plus…"}
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__geQ9F
                      )}
                    >
                      {"Unlimited collaborators"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__hRdaY
                      )}
                    >
                      {"Unlimited page views"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__upLb5
                      )}
                    >
                      {"Unlimited version history"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__xnLnn
                      )}
                    >
                      {"Premium support"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__bJ1XZ
                      )}
                    >
                      {"Uptime SLA"}
                    </Bullet>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__nBgsp
                      )}
                    >
                      {"Custom feature priority"}
                    </Bullet>

                    <Bullet
                      className={classNames("__wab_instance", sty.bullet__g6X1)}
                    >
                      {"Centralized admin"}
                    </Bullet>
                  </p.Stack>
                }
              >
                <ButtonLink
                  className={classNames(
                    "__wab_instance",
                    sty.buttonLink__qq3On
                  )}
                  href={"https://plasmic.app/enterprise-contact" as const}
                  icon={
                    <Icon8Icon
                      className={classNames(defaultcss.all, sty.svg__qhjHl)}
                      role={"img"}
                    />
                  }
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___3WmGq
                      )}
                    >
                      {"Contact us"}
                    </div>
                  }
                  type={["cyanSolid"]}
                />
              </PriceTier>
            </p.Stack>

            <PricingFeatureTable
              data-plasmic-name={"pricingFeatureTable"}
              data-plasmic-override={overrides.pricingFeatureTable}
              className={classNames("__wab_instance", sty.pricingFeatureTable)}
            />
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer, {
              [sty.footer__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
            })}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "body",
    "freeTier",
    "proTier",
    "teamTier",
    "enterpriseTier",
    "pricingFeatureTable",
    "footer",
  ],
  header: ["header"],
  body: [
    "body",
    "freeTier",
    "proTier",
    "teamTier",
    "enterpriseTier",
    "pricingFeatureTable",
  ],
  freeTier: ["freeTier"],
  proTier: ["proTier"],
  teamTier: ["teamTier"],
  enterpriseTier: ["enterpriseTier"],
  pricingFeatureTable: ["pricingFeatureTable"],
  footer: ["footer"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  header: typeof Header
  body: "div"
  freeTier: typeof PriceTier
  proTier: typeof PriceTier
  teamTier: typeof PriceTier
  enterpriseTier: typeof PriceTier
  pricingFeatureTable: typeof PricingFeatureTable
  footer: typeof Footer
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPricing__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPricing__VariantsArgs
    args?: PlasmicPricing__ArgsType
    overrides?: NodeOverridesType<T>
    dataFetches?: PlasmicPricing__Fetches
  } & Omit<PlasmicPricing__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPricing__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPricing__ArgProps,
      internalVariantPropNames: PlasmicPricing__VariantProps,
    })

    const { dataFetches } = props

    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing"
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`
  }
  return func
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    body: makeNodeComponent("body"),
    freeTier: makeNodeComponent("freeTier"),
    proTier: makeNodeComponent("proTier"),
    teamTier: makeNodeComponent("teamTier"),
    enterpriseTier: makeNodeComponent("enterpriseTier"),
    pricingFeatureTable: makeNodeComponent("pricingFeatureTable"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps,
  }
)

export default PlasmicPricing
/* prettier-ignore-end */
