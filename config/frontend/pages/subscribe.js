import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import NewsletterBanner1 from "@/templates/banners/newsletter-banner-1/newsletter-banner-1";
import FAQBlock from "@/templates/blocks/faq-block/faq-block";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
    <><Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <FAQBlock content={props.subscribeFaqContent} />
			 <NewsletterBanner1 content={props.newsletterContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'subscribe'});
  return {
    props: props,
    revalidate: 10
  };
}