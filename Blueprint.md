FORMAT: 1A

# Todoshka API

Welcome to the **Todoshka API**. This API provides access to the **To-do** service.

# Group Task

# Tasks collection [/tasks]

A Task object has the following attributes:

+ **id** - Uniq ID of the task;
+ **checked** - Current status of the task;
+ **message** - Text of the task.

## List All Tasks [GET]

+ Response 200 (application/json)

        [
            {
                "id": 1551798626919,
                "checked": false,
                "message": "Task to do"
            }
        ]

## Create a New Task [POST]

To create a new task pass JSON object containing following param:

+ message (string) - Task text.

+ Request (application/json)

        {
            "message": "Task to do"
        }

+ Response 201 (application/json)

    + Body

                {
                    "id": 1551798626919,
                    "checked": false,
                    "message": "Task to do"
                }

# Task [/tasks/{task_id}]

## Update Existed Task [POST]

To update state of existing task pass JSON object containing following param:

+ checked (boolean) - New Task state.

+ Parameters
    + task_id: 1551798626919 (required, number) - ID of the Task

+ Request (application/json)

        {
            "checked": true,
        }

+ Response 201 (application/json)

    + Body

                {
                    "id": 1551798626919,
                    "checked": true,
                    "message": "Task to do"
                }