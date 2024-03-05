# Distributed Systems - RESTful APIs

A codelab for implementing a Web API using the RESTful interface pattern.
The training examples here comes with setup for either a JavaScript API through ExpressJs or a C# Minimal Web API through ASP.NET Core.

## Prerequisites

- [Container Runtime (Docker Desktop)](https://docs.docker.com/desktop/)
- [VS Code Extension Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Start Project

1. Clone Repository

   ```sh
   git clone <git-repository-url>
   ```

2. Open folder in VS Code

   ```sh
   cd <project-name>
   code .
   ```

3. Start Services

   ```sh
   docker compose up
   ```

## Architecture

```mermaid
---
title: "Version 1.0 of the task model"
---
 classDiagram
   class Task
   Task : +int taskId
   Task : +string title
   Task : +bool isComplete
```

```mermaid
---
title: "Version 2.0 of the task model"
---
 classDiagram
   class Task
   Task : +int taskId
   Task : +string title
   Task : +bool isComplete
   Task : +DateTime createdAt
   Task : +DateTime updatedAt
```

```mermaid
---
title: "Sequeence for adding a new task"
---
sequenceDiagram
    actor Alice
    participant Web Client
    participant Rest API
    participant Data Store

    Alice ->>+ Web Client: Initiates adding a new Task
    Web Client ->>+ Rest API: Sends request to create new Task
    Rest API ->>+ Data Store: Saves new Task
    Data Store ->>- Rest API: Confirms Task creation
    Rest API ->>- Web Client: Responds with success message
    Web Client ->>- Alice: Displays success message


```

[Short description of a Layered API architecture](https://chat.openai.com/share/755593e0-92a6-495b-8ad5-79f2341b519f)

```mermaid
---
title: "Request Traversal through Layers in REST API"
---
sequenceDiagram
    participant Router
    participant Controller
    participant Service Layer
    participant Data Access Layer

    Router ->>+ Controller: Routes incomming requests to controllers
    Controller ->>+ Service Layer: Transform input and invoke required services
    Service Layer ->>+ Data Access Layer: Performs data operation
    Data Access Layer ->>- Service Layer: Returns data operation result
    Service Layer ->>- Controller: Returns result to controller
    Controller ->>- Router: Returns response to router
```

## Links

- [HTTP Message](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
- [REST API](https://en.wikipedia.org/wiki/REST)
- [Open API](https://www.openapis.org/)
- [Node Express](https://expressjs.com/)
- [Layered API Architecture for Node Express](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/)
- [C# ASP.NET Core Minimal API](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis?view=aspnetcore-8.0)