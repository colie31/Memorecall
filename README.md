![Banner](https://readmecontent.s3.us-east-2.amazonaws.com/memorecall_fixed+(1).gif)

# Memorecall
![GitHub Pipenv locked Python version](https://img.shields.io/github/pipenv/locked/python-version/colie31/Memorecall?style=flat-square) ![GitHub language count](https://img.shields.io/github/languages/count/colie31/Memorecall?color=green&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/colie31/Memorecall?color=brown&style=flat-square) ![npm](https://img.shields.io/npm/v/eslint-config-react-app?style=flat-square)

### An application that allows a user to create and store personal journals

## Table of Contents

- [Project Title](#memorecall)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
<!--- [Development](#development)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [Footer](#footer) --->

## Installation
[(Back to top)](#table-of-contents)

To use this project, first clone the repo on your device using the command below:

* Create a git repository
```git init```

* Clone Memorecall application
```git clone https://github.com/colie31/Memorecall.git```

* Install dependencies from root directory
```pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt```

* Create a **.env** file using the following template:

```
>FLASK_APP=app  
>FLASK_ENV=development  
>SECRET_KEY=((Insert your own secret key here))  
>DATABASE_URL=postgresql://((Admin Username)):((Admin Password))@((Host Address))/((Database Name))
```

* Set up a PostgreSQL database user with a username, password and database name that you provided in the **.env** file.

* Follow sqeuence to go into the pipenv shell and migrate, then seed the database:

```pipenv shell```

```flask db upgrade```

```flask seed all```

```flask run```

* Once you have the database set up and the flask app running, you should be able to install the react app and run it to connect to the backend. On a new terminal, change from the root directory into the **./react-app** directory and run the following:

```npm install```

* Once dependencies are installed, create a **.env** file here with the following template:

>REACT_APP_BASE_URL=((Host Address, such as http://localhost:5000))

* You should be able to run the following:

```npm start```

## Usage
[(Back to top)](#table-of-contents)

Log in with by clicking `Demo Login` or **Sign Up**!

![Demo Login](https://readmecontent.s3.us-east-2.amazonaws.com/brainbust_demo_login.png)

Every User has there own bookcase where they will be able to add/delete/view there journals. Once you have created your own personalized journal, You can start creating entries!!

![Creating a journal](https://readmecontent.s3.us-east-2.amazonaws.com/new_journal.png)

Now lets create some entries! Select a journal and view your journal to add entries by clicking `add` on the journal nav bar. App uses `react-modern-calendar-datepicker` library, more info @ [github link](https://github.com/Kiarash-Z/react-modern-calendar-datepicker) - so you can find your journal entries easier, so make as many as you want!

![Memorecall App](https://readmecontent.s3.us-east-2.amazonaws.com/journal_entry.png)
