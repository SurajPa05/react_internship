
const user = { name: 'John Doe',email: 'john.doe@example.com',place:"kochi"};

export default function Profile() {
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h2>{user.place}</h2>
    </div>
  )
}
