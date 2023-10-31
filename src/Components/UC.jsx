import React from 'react';
 
const Uc= () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Under Construction</h1>
      <p style={styles.message}>Rearranging the place! 10/31/2023 </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2', // You can customize the background color
  },
  heading: {
    fontSize: '2rem',
    color: '#333', // Customize the text color
  },
  message: {
    fontSize: '1rem',
    color: '#666', // Customize the text color
  },
};

export default Uc;
