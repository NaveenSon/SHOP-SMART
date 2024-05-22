import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, address, contact, email } = formData;

    if (name && address && contact && email) {
      const res = await fetch(
        "https://firstform-172af-default-rtdb.firebaseio.com/reactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            address,
            contact,
            email,
          }),
        }
      );

      if (res) {
        setFormData({
          name: '',
          address: '',
          contact: '',
          email: ''
        });
        alert("Data stored successfully");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16">Contact Us</h2>
        <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg" method="POST" onSubmit={postData}>
          <div className="rounded-md shadow-sm ">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="sr-only">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Contact"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="sr-only">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Address"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
