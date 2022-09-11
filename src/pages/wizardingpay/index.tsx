import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Wizardingpay = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`WizardingPay | ${siteConfig.title}`}
      description="WizardingPay">
      <div>
        <a href={'https://t.me/WizardingPayBot'} target={'_blank'}>https://t.me/WizardingPayBot</a>
      </div>
    </Layout>
  )
}

export default Wizardingpay;