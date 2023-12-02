import { useState } from "react";

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });

    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
