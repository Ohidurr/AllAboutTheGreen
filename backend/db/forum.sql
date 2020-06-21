DROP DATABASE IF EXISTS forum_db1;
CREATE DATABASE forum_db1;

-- \c forum_db1;

DROP TABLE IF EXISTS Upload;
DROP TABLE IF EXISTS Comments;



CREATE TABLE Uploads (
    id SERIAL PRIMARY KEY,
    username TEXT,
    description_text TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    plant_image VARCHAR
);

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    upload_id INT REFERENCES Uploads(id) ON DELETE CASCADE,
    username TEXT, 
    user_comment TEXT
);



-- INSERT INTO Uploads (id, username, description_text, plant_image)
-- VALUES  (1, 'xoxoGG', 'Is my plant dying?', 'https:www.lookatmyplant.com');



