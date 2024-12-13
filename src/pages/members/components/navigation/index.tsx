// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

const items: SideNavigationProps['items'] = [
  { type: 'link', text: 'Home page', href: '/home/index.html' },
  { type: 'link', text: 'Humans', href: '/members/index.html' },
  { type: 'link', text: 'Logs', href: '/logs/index.html' },
];

export default function Navigation() {
  return (
    <>
      <SideNavigation
        activeHref={location.pathname}
        header={{ href: '/home/index.html', text: 'Pages' }}
        items={items}
      />
    </>
  );
}
