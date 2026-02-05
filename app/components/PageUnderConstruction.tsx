import { Link } from 'react-router';

const PageUnderConstruction = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--theme-color-off-white)'
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--font-size-xxlarge)',
          color: 'var(--theme-color-cherry-red)'
        }}
      >
        Page Under Construction
      </h2>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--font-size-large)',
          color: 'var(--theme-color-cherry-red)',
          borderBottom: '15px solid var(--theme-color-cherry-red)'
        }}
      >
        <Link to="/">Back to Home</Link>
      </h3>
    </div>
  );
};

export default PageUnderConstruction;
