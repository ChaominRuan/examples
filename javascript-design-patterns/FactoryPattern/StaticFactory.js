class User {
  constructor(role, pages) {
    this.role = role;
    this.pages = pages;
  }

  static getInstance(role) {
    switch (role) {
      case 'superAdmin':
        return new User('superAdmin', ['home', 'userManage', 'roleManage', 'sysManage']);
        break;
      case 'admin':
        return new User('admin', ['home', 'userManage', 'roleManage']);
        break;
      case 'user':
        return new User('user', ['home']);
        break;
      default:
        throw new Error('Can only be superAdmin or admin or user');
    }
  }
}

const superAdmin = User.getInstance('superAdmin');
const admin = User.getInstance('admin');
const user = User.getInstance('user');
console.log(superAdmin, admin, user);
