import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Wakandaplus(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Wakanda+ | ${siteConfig.title}`}
      description="Wakanda Plus">

    </Layout>
  );
}