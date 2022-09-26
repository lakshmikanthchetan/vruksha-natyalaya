import {
  Button,
  Label,
  Modal,
  Select,
  Spinner,
  Textarea,
  TextInput,
} from 'flowbite-react';
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onCloseModal = () => setShowModal(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      setIsLoading(false);
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSelectedCourse('');
    setFeedback('');
    setIsLoading(false);
  };

  return (
    <div className="my-10 bg-gray-400 md:border md:border-gray p-4 rounded md:p-10 md:w-3/4 lg:w-1/2 mx-auto">
      <h2 className="text-2xl font-large mb-5">Contact Us</h2>
      <form
        onSubmit={onSubmit}
        className={`max-w-md text-left ${
          isLoading ? 'pointer-events-none' : ''
        }`}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div className="mb-1 sm:mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              type="text"
              id="name"
              name="fullname"
              placeholder="e.g Kiran"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-1 sm:mb-2 block">
              <Label htmlFor="phone" value="Phone number" />
            </div>
            <TextInput
              type="number"
              id="phone"
              name="phone"
              maxLength={10}
              placeholder="e.g 9760021041"
              pattern="^[0-9]{10}"
              required={true}
              value={phone}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setPhone(e.target.value);
                }
              }}
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="mb-1 sm:mb-2 block">
            <Label htmlFor="email" value="Email address" />
          </div>
          <TextInput
            type="email"
            id="email"
            name="email"
            placeholder="e.g john.doe@company.com"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div className="mb-1 sm:mb-2 block">
            <Label
              htmlFor="selected_course"
              value="Select the course you are interested in"
            />
          </div>
          <Select
            id="selected_course"
            required={true}
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option selected="">Choose Course</option>
            <option value="Bharatanatyam">Bharatanatyam</option>
            <option value="Dance fitness">Dance fitness</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Kathak">Kathak</option>
            <option value="Kuchipudi">Kuchipudi</option>
            <option value="Yoga">Yoga</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        <div className="mb-6">
          <div className="mb-1 sm:mb-2 block">
            <Label htmlFor="feedback" value="Feedback on our website" />
          </div>

          <Textarea
            id="feedback"
            name="feedback"
            rows="4"
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="flex gap-6 ${isLoading justify-center">
          <button
            type="submit"
            className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            {isLoading ? (
              <>
                <Spinner aria-label="Spinner button example" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              'Submit'
            )}
          </button>
          <button
            color="light"
            onClick={resetForm}
            className="text-secondary bg-white font-medium hover:opacity-8 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </form>
      <Modal show={showModal} onClose={onCloseModal}>
        <Modal.Header>Contact Request</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-secondary opacity-6">
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
