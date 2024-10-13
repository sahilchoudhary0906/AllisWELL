import React, { useState } from 'react';
import Navbar from './Navbar';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Ronak = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingService, setEditingService] = useState({ name: '' });

  const handleAdd = () => {
    if (newService.name.trim()) {
      setServices([...services, { ...newService }]);
      setNewService({ name: '' });
    }
  };

  const editService = (index) => {
    setEditingIndex(index);
    setEditingService(services[index]);
  };

  const updateService = () => {
    if (editingService.name.trim()) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = { ...editingService };
      setServices(updatedServices);
      setEditingIndex(null);
      setEditingService({ name: '' });
    }
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <>
      <Navbar />
      <div id="hero" className='min-h-screen bg-gradient-to-b from-purple-100 via-orange-200 to-transparent'>
        <div className="body-section">
          <div className="first-nav text-4xl mx-2">
            <Link to="/">
              <IoMdArrowRoundBack />
            </Link>
          </div>
          <div className="container text-center">
            <h1 className='text-3xl'>Health-Care Services</h1>
            <div className="firstFlex flex justify-center gap-5 my-9 ">
              <input 
                type="text" 
                placeholder='Add the service' 
                className='p-2' 
                value={newService.name} 
                onChange={(e) => setNewService({ ...newService, name: e.target.value })} 
              /> 
              <button onClick={handleAdd} className='bg-blue-700 text-white p-3 rounded-lg w-32 hover:bg-blue-500 transition hover:scale-110 duration-150'>Add</button>
            </div>

            <ul className="service-list">
              {services.map((service, index) => (
                <li key={index} className="flex justify-between items-center">
                  {editingIndex === index ? (
                    <div className="flex justify-center gap-5">
                      <input 
                        type="text" 
                        value={editingService.name} 
                        onChange={(e) => setEditingService({ ...editingService, name: e.target.value })} 
                        className="p-2"
                      />
                      <button onClick={updateService} className='bg-green-500 text-white p-3 rounded-lg w-32'>Save</button>
                      <button onClick={() => setEditingIndex(null)} className='bg-red-500 text-white p-3 rounded-lg w-32'>Cancel</button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center w-full">
                      <span>{service.name}</span>
                      <div className="flex gap-4">
                        <button onClick={() => editService(index)} className='bg-yellow-500 text-white p-2 rounded-lg'>Edit</button>
                        <button onClick={() => deleteService(index)} className='bg-red-500 text-white p-2 rounded-lg'>Delete</button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ronak;
