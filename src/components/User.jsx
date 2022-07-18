export default function User({ user }) {
  console.log(user)
  return (
    <div className="user-card">
      <h3>
        {user.name}
      </h3>
      <p>
        Username: {user.username}
      </p>
      <p>
        Email: {user.email}
      </p>
    </div>
  )
}