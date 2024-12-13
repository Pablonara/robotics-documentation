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



export default function App() {
  const [
    selectedItems,
    setSelectedItems
  ] = React.useState([{ name: "Item 2" }]);
  return (
    <Shell
      breadcrumbs={<Breadcrumbs active={{ text: 'Humans', href: '/members/index.html' }} />}
      navigation={<Navigation />}
    // notifications={<Flashbar items={flashbarItems}></Flashbar>}
    >
      <Container
        // header={
        //   <Header
        //     variant="h2"
        //     description="Humans"
        //   >
        //     Meet the humans

        //   </Header>

        // }
      >
        <SpaceBetween direction="vertical" size="xs">
          <Cards
            ariaLabels={{
              itemSelectionLabel: (e, t) => `select ${t.name}`,
              selectionGroupLabel: "Item selection"
            }}
            cardDefinition={{
              header: item => (
                // <Link href="#" fontSize="heading-m">
                <b>{item.name}</b>
                // </Link>
              ),
              sections: [
                {
                  id: "description",
                  header: "Role",
                  content: item => item.description
                },
                {
                  id: "image",
                  content: item => (
                    <img
                      style={{ width: "100%", objectFit: "cover" }}
                      src={item.src}
                      alt="profile image goes here"
                    />
                  )
                },
                {
                  id: "personDescription",
                  header: "Description",
                  content: item => item.personDescription
                },
              ]
            }}
            cardsPerRow={[
              { cards: 1 },
              { minWidth: 500, cards: 4 }
            ]}
            items={[
              {
                name: "Noah",
                alt: "First",
                description: "Lead programmer",
                personDescription: "Noah has already attended robotics before and likes programming. He mostly writes code and drafts up prototypes for the robot. He built the documentation site in reactjs typescript and python.",
                size: "Test Element",
                src: "https://contentdelivery.pablonara.com/Celia-tea.jpg",
                role: "Lead programmer"
              },
              {
                name: "Daniel",
                alt: "Second",
                description: "Robot builder",
                personDescription: "Daniel is good at coordinating the team and ensuring that everyone is on the same page. He is the one of the builders and assemblers of the robot, focusing on the physical construction, making sure the robot operates as intended from its design. He also brings cubes, apples, and shapes with a lot of sides.",
                size: "Test Element",
                src: "https://contentdelivery.pablonara.com/image19.jpg",
                role: "Builder"
              },
              {
                name: "Nathan",
                alt: "Third",
                description: "Child labour",
                personDescription: "Nathan fills the cracks in with mayonnaise, and is coerced to do work via peer pressure.",
                size: "Test Element",
                src: "https://contentdelivery.pablonara.com/image7.jpg",
                role: ""
              },
              {
                name: "Michael",
                alt: "Fourth",
                description: "Placeholder role description",
                personDescription: "Placeholder description",
                size: "Test Element",
                src: "",
                role: ""
              },
            ]}
            loadingText="Loading resources"
            variant="full-page"
            empty={
              <Box
                margin={{ vertical: "xs" }}
                textAlign="center"
                color="inherit"
              >
                <SpaceBetween size="m">
                  <b>No resources</b>
                  <Button>Create resource</Button>
                </SpaceBetween>
              </Box>
            }
            header={<Header>Meet the humans</Header>}
          />
        </SpaceBetween>
      </Container>
    </Shell>
  );
}
