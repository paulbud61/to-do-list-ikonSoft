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
        Click for Information & Details
      </button>
      {modalOpen && (
        <>
          <div className={styles.modalBackdrop}></div>
          <div className={styles.modal} ref={modalRef}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                x
              </button>
              <h2>Information and Instructions</h2>
              <p>
                This is a To-Do-List project developed for IkonSoft Company.
              </p>
              <h3>How does the site work?</h3>
              <ul>
                <li>
                  Enter the tasks you need to accomplish today and select a
                  category.
                </li>
                <li>
                  If you make a mistake while typing, you can edit the task.
                </li>
                <li>
                  Once you have completed a task, simply click or tap on it, and
                  it will be crossed out with a line.
                </li>
              </ul>
              <h3>Development process and experience</h3>
              <ul>
                <li>I developed the site using React + Vite.</li>
                <li>I began by working on Task.jsx.</li>
                <li>
                  After creating the header, the form, and implementing
                  functionality with event handlers and e.current.target, I
                  organized the code into Header, TaskItem, TaskName, and Form
                  components to improve readability for less experienced users.
                </li>
                <li>
                  For data storage, I utilized LocalStorage (setItem and
                  getItem). In the near future, I may explore Redux Persist for
                  personal reasons.
                </li>
                <li>
                  This project represents 4 days of work. I hope it meets the
                  requirements of the users. Have a great day!
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
