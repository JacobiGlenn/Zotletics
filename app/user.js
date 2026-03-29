import { time } from "console";

// This is a simple user class that can be used to create new users and store their information. It has a constructor that takes in the username, email, and password of the user and sets the join date to the current date.
//might not be needed in the future if we decide to use a database to store user information, but for now it can be used to create new users and store their information in memory.
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.joinDate = new Date();

    }

}