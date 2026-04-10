import React, { useState, useEffect } from 'react';

const indianUsers = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav.sharma@infosys.com', role: 'Software Engineer', city: 'Bengaluru', state: 'Karnataka', company: 'Infosys' },
  { id: 2, name: 'Priya Patel', email: 'priya.patel@tcs.com', role: 'Data Analyst', city: 'Mumbai', state: 'Maharashtra', company: 'TCS' },
  { id: 3, name: 'Rohan Gupta', email: 'rohan.gupta@wipro.com', role: 'DevOps Lead', city: 'Hyderabad', state: 'Telangana', company: 'Wipro' },
  { id: 4, name: 'Ananya Reddy', email: 'ananya.r@hcltech.com', role: 'UI/UX Designer', city: 'Chennai', state: 'Tamil Nadu', company: 'HCL Tech' },
  { id: 5, name: 'Vikram Singh', email: 'vikram.singh@zoho.com', role: 'Product Manager', city: 'Delhi', state: 'Delhi', company: 'Zoho' },
  { id: 6, name: 'Meera Nair', email: 'meera.nair@techm.com', role: 'QA Engineer', city: 'Kochi', state: 'Kerala', company: 'Tech Mahindra' },
  { id: 7, name: 'Arjun Desai', email: 'arjun.d@reliance.com', role: 'Cloud Architect', city: 'Ahmedabad', state: 'Gujarat', company: 'Jio Platforms' },
  { id: 8, name: 'Kavya Iyer', email: 'kavya.iyer@flipkart.com', role: 'Frontend Dev', city: 'Pune', state: 'Maharashtra', company: 'Flipkart' },
  { id: 9, name: 'Siddharth Joshi', email: 'sid.joshi@ola.com', role: 'ML Engineer', city: 'Jaipur', state: 'Rajasthan', company: 'Ola' },
  { id: 10, name: 'Divya Menon', email: 'divya.m@freshworks.com', role: 'Backend Dev', city: 'Coimbatore', state: 'Tamil Nadu', company: 'Freshworks' },
];

const Exp10ApiLifecycle = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setTimeout(() => {
      setUsers(indianUsers);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Experiment 10: Lifecycle & API</h2>
      <p>Fetch and display user data.</p>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchUsers}>Refresh</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filtered.map(user => (
            <li key={user.id} onClick={() => setSelectedUser(user)}>
              {user.name} - {user.company}
            </li>
          ))}
        </ul>
      )}

      {selectedUser && (
        <div>
          <h3>{selectedUser.name}</h3>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.city}, {selectedUser.state}</p>
        </div>
      )}
    </div>
  );
};

export default Exp10ApiLifecycle;