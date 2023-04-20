\c transactions_dev
INSERT INTO transactions (
    date,
    details,
    amount,
    time_type,
    category, 
    vendor
) VALUES 
(NOW(), 'A celebration for starting a new project', 50, 'once', 'celebration', 'Wine Warehouse'),
(NOW(), 'Groceries', 150, 'weekly', 'food', 'Wine Warehouse'),
(NOW(), 'Hulu Subscription', 12, 'monthly', 'entertainment', 'Hulu'),
(NOW(), 'Gas', 35, 'regular', 'transportation', 'Speedway');