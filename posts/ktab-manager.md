---
title: 'KTab Manager'
metaTitle: 'KTab Manager: Organize your ideas in web (A tab management system for chrome)'
metaDesc: 'Organize your ideas in web right in your web browser'
socialImage: images/22-09-2021.jpg
date: '2022-11-03'
tags:
  - project
---
# ktab
### KTab Manager
#### Organize your ideas in web (A tab management system for chrome)

<div class="center images" markdown="1">

![The home view of ktab manager.](https://i.imgur.com/Pr5DTFx.png)
<caption>The home view of ktab manager</caption>

</div>

Project URL: [ktab manager](https://ktab-manager.web.app/)

Organize notes, todos, reminders, tabs, links, videos, images and more using the KTab manager webapp. Its fast, responsive, snappy and is beautiful. Use the public Guest dashboard to keep items in a publically available board or create your own account or login with your Google account to use your private boards. Boards are called Organizations. Each Organization has multiple Collections and Collections contain several Items that is the basic unit of data. 
The app uses Firestore database to store all the data of each user in its NoSQL database. 
Other packages and technologies used in KTab manager are;
- Mantine UI
- Firebase Auth
- Firestore
- DnD kit
- CRA React

<div class="center images" markdown="1">

![The home view of ktab manager.](https://i.imgur.com/Pr5DTFx.png)
<caption>The home view of ktab manager</caption>
![An open item within a collection.](https://i.imgur.com/m0KMEo3.png)
<caption>An open item within a collection</caption>
{<video src='https://i.imgur.com/S2EsqB8.mp4' autoplay="true" loop muted></video>}
<caption>Ordering a set of collections</caption>
{<video src='https://i.imgur.com/eeViQwh.mp4' autoplay="true" loop muted></video>}
<caption>Changing the view of the dashboard</caption>
{<video src='https://i.imgur.com/G3hmFIw.mp4' autoplay="true" loop muted></video>}
<caption>Changing the background color of the organization</caption>
{<video src='https://i.imgur.com/ms6RWP3.mp4' autoplay="true" loop muted></video>}
<caption>Deleting an organization</caption>
{<video src='https://i.imgur.com/Sz7j0Nw.mp4' autoplay="true" loop muted></video>}
<caption>Filtering organization data items</caption>
![An open link within a collection with its settings expanded.](https://i.imgur.com/KfaYamV.png)
<caption>An open link within a collection with its settings expanded</caption>
![Modal for adding organizations, collections, and items.](https://i.imgur.com/D0TvVy8.png)
<caption>Modal for adding organizations, collections, and items</caption>
![Trash modal where items, collections, organizatoins can be restored to the dashboard.](https://i.imgur.com/xao9hYJ.png)
<caption>Trash modal where items, collections, organizatoins can be restored to the dashboard</caption>
![Changing the view of the dashboard.](https://i.imgur.com/Ubi7LKu.png)
<caption>Changing the view of the dashboard</caption>

</div>

### Application structure
User A (User based access)
- Organization A
- - Collection AA
- - Collection AB
- - --- Item 1 : link
- - --- Item 2 : note
- - --- Item 3 : reminder
- Organization B
- - Collection BA
- - Collection BB

### Database structure
User A (ID)
- Organizations
- - Organization A (parent: user)
- - Organization B
- Collections
- - Collection AA (parent: organization)
- - Collection AB
- - Collection BA
- - Collection BB
- Items
- - Item 1 (parent: collection)
- - Item 2
- - Item 3

### TODO
- Create a context and keep states in the context ✔
- CURD from organization tabs
- CURD form collections box
- Other types of items
- Refresh
- Sync with server
- Set background
- Edit profile
- Add functional entries to the spotlight
- Maybe cache orgs, collections, items to localStorage for faster init 

Organization Firestore collection
  Each entry is a new organization
  Each organization has:
  ```
  "Container": [
    "A1", //array  of objects
    "A3"
  ],
  "Container": [
    "B3"
  ]
  ```
  Each item within the container is an object:
  ```
  {
    id: UniqueIdentifier,
    name: "Name of the item",
    type: link|todo|note|reminder|countdown|calender
    link: "http://link.com",
    content: "String content/RTE content",
    color: Color Code,
    tags: important|password|etc
    created_on: timestamp,
    is_deleted: boolean //Shows up in trash
  }
  ```
  name, content, link is used in Search.
  Hierarchy is like:
  ```
  {
    Organization: {
      "Container": [
          "A1",
          "A3"
      ],
      "Container": [
          "B3"
      ]
    },
    Organization: {
      "Container": [
          "A3"
      ]
    }
  }
  ```
  TODO:
  * Notifications in header
  * Firestore sync
  * Trash drag
  * Login using socials
  * Settings
  * Search
  * Theme color swachtes
  * Checklists