function makeAjaxRequest(url, method = 'GET') {
    console.log(`Make method ${method} to URL ${url}`);
}
makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');
makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com', undefined);

//
function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 9999999;
}

const user = new User(1);

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

createAdminUser(new User(generateId()));
createAdminUser();