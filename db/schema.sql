DROP DATABASE IF EXISTS transactions_dev;
CREATE DATABASE transactions_dev;

\c transactions_dev;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    date DATE,
    details TEXT,
    amount NUMERIC,
    time_type TEXT,
    category TEXT, 
    is_income BOOLEAN DEFAULT FALSE,
    vendor TEXT,
    is_recurring BOOLEAN DEFAULT FALSE
)