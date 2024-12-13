import React, { useState, useEffect } from 'react';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Grid from '@cloudscape-design/components/grid';
import Spinner from '@cloudscape-design/components/spinner';
import Alert from '@cloudscape-design/components/alert';
import Breadcrumbs from './components/breadcrumbs';
import Shell from '../../layouts/shell';
import Header from "@cloudscape-design/components/header";
import Input from '@cloudscape-design/components/input';
import SpaceBetween from "@cloudscape-design/components/space-between";
import Flashbar from '@cloudscape-design/components/flashbar';
import Button from '@cloudscape-design/components/button';
import Checkbox from "@cloudscape-design/components/checkbox";
import { Box, Container, TextContent } from '@cloudscape-design/components';
import Cards from "@cloudscape-design/components/cards";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import Navigation from '../../components/navigation';
import Link from "@cloudscape-design/components/link";



export default function App() {
  const [
    selectedItems,
    setSelectedItems
  ] = React.useState([{ name: "Item 2" }]);
  return (
    <Shell
      breadcrumbs={<Breadcrumbs active={{ text: 'Code', href: '/code/index.html' }} />}
      navigation={<Navigation />}
    // notifications={<Flashbar items={flashbarItems}></Flashbar>}
    >
      <SpaceBetween direction="vertical" size="xs">
        <Header
          variant="h2"
          description="Code for the robot"
        >

          Code
        </Header>
        <Container
          header={<Header>
            Latest
          </Header>}
        >
          <p>
            Code is basically identical to the code from last year except autonomous tweaked to be compatable with the new robot. Some ports also changed.
          </p>
          <SpaceBetween direction="horizontal" size="xs">
          <Button
            ariaLabel="Open code repository"
            href="https://github.com/103-104-team-code/code_104"
            iconAlign="right"
            iconName="external"
            target="_blank"
          >
            Open code repository
          </Button>
          <Button
            ariaLabel="Open engineering notebook site source code"
            href="https://github.com/Pablonara/robotics-documentation/blob/main/README.md"
            iconAlign="right"
            iconName="external"
            target="_blank"
          >
            Open engineering notebook site source code
          </Button>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </Shell>
  );
}
