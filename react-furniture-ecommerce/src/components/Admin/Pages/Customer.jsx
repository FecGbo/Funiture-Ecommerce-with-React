import React from 'react'

function Customer() {
    const [customers, setCustomers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        // Fetch customers data from an API or local JSON file
        fetch('/users.json')
          .then(response => response.json())
          .then(data => {
            // Handle the fetched data
            setCustomers(data);
            setLoading(false);
            console.log(data);
          })
          .catch(error => {
            console.error('Error fetching customers data:', error);
          });
    }, []);

    if (loading) {
        return <p>Loading Customers...</p>;
    }

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.username}</li>
                ))}
            </ul>
        </div>
    );
}

export default Customer