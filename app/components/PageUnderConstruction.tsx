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
    </div>
  );
};

export default PageUnderConstruction;
