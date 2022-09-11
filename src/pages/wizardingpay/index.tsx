import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../../css/tailwind.css";

const Wizardingpay = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`WizardingPay | ${siteConfig.title}`}
      description="WizardingPay">
      <div className={"p-4 text-sm"}>
        <a href={'https://t.me/WizardingPayBot'} target={'_blank'}>https://t.me/WizardingPayBot</a>
      </div>
    </Layout>
  )
}

export default Wizardingpay;