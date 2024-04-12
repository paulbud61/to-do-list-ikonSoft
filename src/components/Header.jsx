import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.header}>
      <span>My Task List</span>
      <button className={styles.button} onClick={toggleModal}>
        Click me for Info&Details
      </button>
      {modalOpen && (
        <>
          <div className={styles.modalBackdrop}></div>
          <div className={styles.modal} ref={modalRef}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                x
              </button>
              <h2>Info Point and Instructions</h2>
              <p>This is a To-Do-List project I made for IkonSoft Company.</p>
              <h3>How does the site work?</h3>
              <ul>
                <li>
                  Type in the tasks you have to do today and select a category
                </li>
                <li>
                  If you wrote the wrong word or letter, you can edit the task
                </li>
                <li>
                  When you are done with one task, just click/press on it and it
                  will be cut through with a line
                </li>
              </ul>
              <h3>How I created the website and my experience so far</h3>
              <ul>
                <li>I created the site by using React + Vite</li>
                <li>I first started working on Task.jsx</li>
                <li>
                  After creating the head, the form, the functionality with
                  handle Functions and e.current.target, I split the code in
                  Header, TaskItem, Task Name and Form components, to make it
                  readable for other less experienced users
                </li>
                <li>
                  For storing the data, I used LocalStorage (setItem and
                  getItem). Probably in the near future I will work with Redux
                  Persist, for personal reasons
                </li>
                <li>
                  This is simply a project I worked on, on the last 5 days. Have
                  a nice day and I hope it meets User's requirments!
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
