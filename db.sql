-- Active: 1732192820148@@meija-demo-test-db.postgres.database.azure.com@5432@todo
CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);

INSERT INTO task (description) VALUES ('My test task');
INSERT INTO task (description) VALUES ('Another test task');