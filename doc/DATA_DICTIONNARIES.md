# Data dictionnary

| number | Name               | Code               | Type           | Size | Constraint | Null  |
| ------ | ------------------ | ------------------ | -------------- | ---- | ---------- | ----- |
| 0      | Customer_id        | CUSTOMER_ID        | Auto_increment | Size |            | false |
| 1      | Customer_firstname | CUSTOMER_FIRSTNAME | Varchar        | 50   |            | false |
| 2      | Customer_lastname  | CUSTOMER_LASTNAME  | Varchar        | 50   |            | false |
| 3      | Customer_password  | CUSTOMER_PASSWORD  | Varchar        | 50   |            | false |
| 4      | Customer_username  | CUSTOMER_USERNAME  | Varchar        | 50   |            | false |
| 5      | Account_id         | ACCOUNT_ID         | Auto_increment |      |            | false |
| 6      | Account_Balance    | ACCOUNT_AMOUNT     | Float          |      |            | false |
| 7      | Account_RIB        | ACCOUNTRIB         | Varchar        | 50   |            | false |
| 8      | Log_id             | LOGS_ID            | Auto_increment |      |            | false |
| 9      | Operation_date     | OPERATION_DATE     | Date           |      |            | false |
| 10     | Operation_type     | OPERATION_TYPE     | Int            |      |            | false |
| 11     | Operation_state    | OPERATION_STATE    | Bool           |      |            | false |
| 12     | Admin_id           | ADMIN_ID           | Auto_increment |      |            | false |
| 13     | Admin_password     | ADMIN_PASSWORD     | Varchar        | 50   |            | false |