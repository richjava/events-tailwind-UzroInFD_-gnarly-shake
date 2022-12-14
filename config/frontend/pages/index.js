import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import Block6 from "@/templates/blocks/block-6/block-6";
import NewsletterForm1 from "@/templates/forms/newsletter-form-1/newsletter-form-1";
import Cards1 from "@/templates/cards/cards-1/cards-1";
import HeroCover from "@/templates/covers/hero-cover/hero-cover";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.homeSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <HeroCover content={props.eventsHeroContent} />
			 <Cards1 content={props.eventsListContent} />
			 <NewsletterForm1 content={props.newsletterLrgContent} />
			 <Block6 content={props.aboutTeaserContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'home'});
  return {
    props: props,
    revalidate: 10
  };
}