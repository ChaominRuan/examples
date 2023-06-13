class User {
  constructor(name, role, pages) {
    if (new.target === User) {
      throw new Error('Abstract classes cannot be instantiated');
    }

    this.name = name;
    this.role = role;
    this.pages = pages;
  }
}

class SuperAdmin extends User {
  constructor(name) {
    super(name, 'superAdmin', ['home', 'userManage', 'roleManage', 'sysManage']);
  }

  method() {
    // ...
  }
}
class Admin extends User {
  constructor(name) {
    super(name, 'admin', ['home', 'userManage', 'roleManage']);
  }
}

class Users extends User {
  constructor(name) {
    super(name, 'user', ['home']);
  }
}

function getAbstractUserFactory(role) {
  switch (role) {
    case 'superAdmin':
      return SuperAdmin;
      break;
    case 'admin':
      return Admin;
      break;
    case 'user':
      return Users;
      break;
    default:
      throw new Error('Can only be superAdmin or admin or user');
  }
}

const adminClass = getAbstractUserFactory('admin');

const admin = new adminClass('zs');

console.log(admin); // {name: 'zs', role: 'admin', pages: Array(3)}
