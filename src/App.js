import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Grid,
  Dimmer,
  Loader,
  Image,
  Segment,
  Divider,
  Header,
  Icon,
  Search,
  Button,
  Placeholder,
  List,
  Table,
  Menu,
  Label
 } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <br />
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment placeholder>
              <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>

                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                    <Header icon>
                      <Icon name='search' />
                      Cari document
                    </Header>

                    <Search placeholder='Search document...' icon={<Icon name='search' />} />
                  </Grid.Column>

                  <Grid.Column>
                    <Header icon>
                      <Icon name='file pdf outline' />
                      Tambah Document Baru
                    </Header>
                    <Button primary>Create Document</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Dimmer active>
                <Loader />
              </Dimmer>

              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='5'>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          </Grid.Column>
          <Grid.Column width='7'>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          </Grid.Column>
          <Grid.Column width='4'>
            <h3>Website Terkait</h3>
            <List>
              <List.Item
                icon='linkify'
                content={<a href='/'>Google</a>}
              />
              <List.Item
                icon='linkify'
                content={<a href='/'>Facebook</a>}
              />
              <List.Item
                icon='linkify'
                content={<a href='/'>Semantic UI</a>}
              />
              <List.Item
                icon='linkify'
                content={<a href='/'>Niomic</a>}
              />
              <List.Item
                icon='linkify'
                content={<a href='/'>React</a>}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <Table celled>
               <Table.Header>
                <Table.Row textAlign='right'>
                  <Table.HeaderCell colSpan='3'>
                    <Search placeholder='Search document...' icon={<Icon name='search' />} />
                  </Table.HeaderCell>
                </Table.Row>
                 <Table.Row textAlign='center'>
                   <Table.HeaderCell>Nama Document</Table.HeaderCell>
                   <Table.HeaderCell>Jenis File</Table.HeaderCell>
                 </Table.Row>
               </Table.Header>

               <Table.Body>
                 <Table.Row>
                   <Table.Cell warning>
                     <Label ribbon>Panduan Belajar Javascript</Label>
                   </Table.Cell>
                   <Table.Cell>PDF</Table.Cell>
                 </Table.Row>
                 <Table.Row>
                   <Table.Cell>Panduan Belajar CSS</Table.Cell>
                   <Table.Cell>PDF</Table.Cell>
                 </Table.Row>
                 <Table.Row>
                   <Table.Cell>Panduan Belajar React JS</Table.Cell>
                   <Table.Cell>PDF</Table.Cell>
                 </Table.Row>
               </Table.Body>

               <Table.Footer>
                 <Table.Row>
                   <Table.HeaderCell colSpan='3'>
                     <Menu floated='right' pagination>
                       <Menu.Item as='a' icon>
                         <Icon name='chevron left' />
                       </Menu.Item>
                       <Menu.Item as='a'>1</Menu.Item>
                       <Menu.Item as='a'>2</Menu.Item>
                       <Menu.Item as='a'>3</Menu.Item>
                       <Menu.Item as='a'>4</Menu.Item>
                       <Menu.Item as='a' icon>
                         <Icon name='chevron right' />
                       </Menu.Item>
                     </Menu>
                   </Table.HeaderCell>
                 </Table.Row>
               </Table.Footer>
              </Table>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
