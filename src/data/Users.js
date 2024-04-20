class Users {
  /**
   * @type {Array<Users>}
   * @type {Number}
   */
  static users = [];
  static count = 0;

  /**
   * @param {string} username
   * @param {string} userage
   */
  constructor(username, userage) {
    Users.count += 1;
    this.id = Users.count;
    this.username = username;
    this.userage = userage;
  }

  /**
   * @param {Users} newUser
   */
  static addUser(newUser) {
    this.users.push(newUser);
  }

  /**
   * @return {Users}
   * @param {Number} id
   */
  static getUserById(id) {
    return this.users.find((user) => {
      return user.id === id;
    });
  }

  static deleteUser(id) {
    const userId = this.users.findIndex((user) => {
      return (user.id = id);
    });
    this.users.splice(userId, 1);
  }
}

export default Users;
