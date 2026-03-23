# Database — Neon PostgreSQL

This folder contains all database-related files for the Online Quiz System.

## Structure

```
db/
├── schema.sql       # Table definitions
├── seed.sql         # Sample data
├── migrations/      # Migration scripts
└── README.md
```

## Setup

1. Create a Neon project at [neon.tech](https://neon.tech)
2. Copy the connection string from the Neon dashboard
3. Run `schema.sql` to create tables
4. (Optional) Run `seed.sql` to insert sample data

## Connection

The Neon connection string follows this format:
```
postgresql://<user>:<password>@<host>/<dbname>?sslmode=require
```
