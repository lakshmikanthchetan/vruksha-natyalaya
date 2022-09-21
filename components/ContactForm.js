import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [feedback, setFeeback] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => setShowModal(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const postData = {
      name,
      phone,
      email,
      interestedCourse: selectedCourse,
      feedback,
    };
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers,
      body: JSON.stringify(postData),
    });
    const content = await response.json();
    if (content.data.tableRange) {
      setShowModal(true);
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSelectedCourse('');
    setFeeback('');
  };

  return (
    <div className="my-10">
      <h2 className="block text-2xl font-large mb-5">Contact Details</h2>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g Kiran"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              maxLength={'10'}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g 9760021041"
              pattern="^[0-9]{10}"
              required={true}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g john.doe@company.com"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Course Name
          </label>
          <input
            type="text"
            id="name"
            name="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g BharatNatyam"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="feedback"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Feedback on our website
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeeback(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <Modal show={showModal} onClose={onCloseModal}>
        <Modal.Header>Contact Request</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Your contact request to Vruksha Natyalaya has been submitted
              successfully. We will contact you as soon as possible on your
              phone/email.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ContactForm;
