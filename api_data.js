define({ "api": [
  {
    "type": "get",
    "url": "/projects/:id",
    "title": "Request a project",
    "name": "GetProject",
    "group": "Project",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "project",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "project.id",
            "description": "<p>Id of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project.title",
            "description": "<p>The title of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project.description",
            "description": "<p>The description of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "project.createdAt",
            "description": "<p>The project's creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "project.updatedAt",
            "description": "<p>The date for the last time the projects was updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/projects/:id/tasks",
    "title": "Request all tasks for a project",
    "name": "GetProjectTask",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The project's id you want to get the tasks out of</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Id of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.description",
            "description": "<p>The task's description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.createdAt",
            "description": "<p>The creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.updatedAt",
            "description": "<p>The date the tasks was last updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/projects",
    "title": "Request all projects",
    "name": "GetProjects",
    "group": "Project",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projects",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projects.id",
            "description": "<p>Id of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.title",
            "description": "<p>The title of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projects.description",
            "description": "<p>The description of the project</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "projects.createdAt",
            "description": "<p>The project's creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "projects.updatedAt",
            "description": "<p>The date for the last time the projects was updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/projects/:id",
    "title": "Delete a project",
    "name": "RemoveProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the project to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message saying &quot;Project updated successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/projects/:id",
    "title": "Change a project informations",
    "name": "SetProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the project to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message saying &quot;Project updated successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/projects",
    "title": "Create a new project",
    "name": "CreateTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message &quot;Project added successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/projects.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Create a new Task",
    "name": "CreateTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A short description of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>The id of the projects the task is part of</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "userId",
            "description": "<p>Optional id of the user in charge of the task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message &quot;Task added successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/tasks/:id",
    "title": "Get a single task",
    "name": "GetTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the desired task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "task",
            "description": "<p>Task informations</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "task.id",
            "description": "<p>Id of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.title",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.description",
            "description": "<p>The task's description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "task.createdAt",
            "description": "<p>The creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "task.updatedAt",
            "description": "<p>The date the tasks was last updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "Request all tasks",
    "name": "GetTasks",
    "group": "Task",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Id of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.description",
            "description": "<p>The task's description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.createdAt",
            "description": "<p>The creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.updatedAt",
            "description": "<p>The date the tasks was last updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "delete",
    "url": "/tasks/:id",
    "title": "Delete a task",
    "name": "RemoveTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the task to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message saying &quot;Task updated successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "put",
    "url": "/tasks/:id",
    "title": "Change a tasks informations",
    "name": "SetTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the task to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message saying &quot;Task updated successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a new User",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": "<p>The user's pseudo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user's pseudo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user's e-mail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional user's description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message saying &quot;User added successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Request all users",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.pseudo",
            "description": "<p>The user's pseudo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.description",
            "description": "<p>The user's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>The user's description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>The user's creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.updatedAt",
            "description": "<p>The date the user's profile was last updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/tasks",
    "title": "Request all tasks a user is linked to",
    "name": "GetUserTasks",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user's id you want to get the tasks out of</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Id of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>The title of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.description",
            "description": "<p>The task's description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.createdAt",
            "description": "<p>The creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.updatedAt",
            "description": "<p>The date the tasks was last updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request all users",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.pseudo",
            "description": "<p>The user's pseudo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.description",
            "description": "<p>The user's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>The user's description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.createdAt",
            "description": "<p>The user's creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.updatedAt",
            "description": "<p>The date the user's profile was last updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete a user",
    "name": "RemoveUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message saying &quot;Task deleted successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Change a user's informations",
    "name": "SetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>A short message saying &quot;User updated successfuly.&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
