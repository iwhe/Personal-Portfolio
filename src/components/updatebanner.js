const updateBanner = () => {
  // Define styles as JavaScript objects
  const bannerStyle = {
    width: '100%',
    height: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
  };

  const linkStyle = {
    color: '#1e90ff',
    textDecoration: 'underline',
    marginLeft: '5px',
  };

  const slidingTextStyle = {
    position: 'absolute',
    whiteSpace: 'nowrap',
    animation: 'slide-left 15s linear infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes slide-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div style={bannerStyle}>
        <span style={slidingTextStyle}>
          This portfolio is under development, Please visit
          <a href="https://www.x.com/codewbhupesh" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            X
          </a>{' '}
          or
          <a href="https://www.github.com/iwhe" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            github
          </a>{' '}
          to know more about my skills and projects. Thank you!
        </span>
      </div>
    </>
  );
};

export default updateBanner;
