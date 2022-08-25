import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Wizardingpay = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`WizardingPay | ${siteConfig.title}`}
      description="WizardingPay">

    </Layout>
  )
}

export default Wizardingpay;