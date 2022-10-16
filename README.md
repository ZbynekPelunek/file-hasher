# File Hasher

Task to make an API that takes file sent in a body and returns its encoded data in SHA1 and the file size, it also saves the same data to database. The sent file is not saved anywhere;

On **POST** /'api/v1/files/upload' it accepts 1 parameter:

**file** (required)

- Parameter **file** can contain any file, extension or size doesn't matter.

## Table of contents

- [Installation](#installation)
- [Technologies](#technologies)
- [Framework](#framework)
- [Status](#status)

## Installation

Initialize git in your folder of choise with

```bash
git init
```

Then clone this repository

```bash
git clone https://github.com/zbynekpelunek/file-hasher
```

Install all needed node modules

```bash
npm i
```

Rename **.env.example** to **.env** and fill the parameters.

Finally, start the server

```bash
npm start
```

Using Postman or similar software, you can now access File-Hasher API on localhost

**POST** `http://localhost:3000/api/v1/files/upload`

### Technologies

- Typescript
- PostgreSQL

### Framework

- Express.JS

### Status

Task is: _complete_
