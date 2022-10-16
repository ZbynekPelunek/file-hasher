# File Hasher

Task to make an API that takes file sent in a body and returns its SHA1 hashed data and the file size, it also saves the same data to database. The sent file is not saved anywhere.

On **POST** /'api/v1/files/upload' it accepts 1 parameter:

- **file** (required) | Can contain any file, extension or size doesn't matter.

## Table of contents

- [File Hasher](#file-hasher)
  - [Table of contents](#table-of-contents)
- [Installation](#installation)
  - [Technologies](#technologies)
  - [Framework](#framework)
  - [Status](#status)

# Installation

1. Initialize git in your folder of choise with

```bash
git init
```

2. Then clone this repository

```bash
git clone https://github.com/zbynekpelunek/file-hasher
```

3. Install all needed node modules

```bash
npm i
```

4. Rename **.env.example** to **.env** and fill the parameters.

5. Finally, start the server

```bash
npm start
```

Using Postman or similar software, you can now access File-Hasher API on localhost

**POST** `http://localhost:3000/api/v1/files/upload`

## Technologies

- Typescript
- Node.JS
- PostgreSQL

## Framework

- Express.JS

## Status

Task is: _complete_
