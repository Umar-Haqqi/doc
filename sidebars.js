/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  mobileSDKs: [
    {
      type: 'category',
      label: 'Idenfo - Identity SDK Overview',
      items: [
        'intro',
        'features',
        'flow',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'parameters/presets',
        'parameters/responses',
        'parameters/generateApiKeys',
        'parameters/secure',
      ],
    },
    {
      type: 'category',
      label: 'SDK Integration',
      items: [
        'platforms/ios',
        'platforms/android',
        'platforms/customize'
      ],
    },
  ],
  restfulApiSidebar: [
    {
      type: 'category',
      label: 'API Guide',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/api-flow-integration',
        {
          type: 'category',
          label: 'Auth',
          items: ['endpoint/login'],
        },
        {
          type: 'category',
          label: 'Customer Onboarding',
          items: [
            'endpoint/create-customer',
            'endpoint/create-company-by-companyNumber',
            'endpoint/deepLink',
            'endpoint/edit-customer',
            ],
        },
        {
          type: 'category',
          label: 'Fetch Customer Details',
          items: [
            'endpoint/fetch-customer',
            'endpoint/download-pdf',
            'endpoint/getRCA',
            ],
        },
        {
          type: 'category',
          label: 'List Of Values',
          items: [
            'endpoint/countries',
            'endpoint/get-workTypes',
            'endpoint/get-industries',
            'endpoint/get-products',
            ],
        },
        // {
        //   type: 'category',
        //   label: 'Create Company by companyNumber',
        //   items: ['endpoint/create-company-by-companyNumber'],
        // },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Idenfo Direct - API Overview',
    //   items: ['tutorial-basics/create-a-document', 'tutorial-basics/api-flow-integration'],
    // },
    // { 
    //   type: 'category',
    //   label: 'Idenfo Direct - Overview',
    //   items: ['tutorial-basics/api-flow-integration'],
    // },
  ],

};

export default sidebars;
