export async function addUser(firstName, lastName, email) {

    const response = await fetch( getServerURL() + "/users" )
    const users = await response.json();

    const nextId = users.length +1;

    const responseAdd = await fetch(getServerURL() + /users, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            id: nextId
        })
    });
}