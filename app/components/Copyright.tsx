const Copyright = () => {
  const thisYear = new Date().getFullYear();

  return (
    <h4
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--font-size-small)',
        color: 'var(--theme-color-off-white)'
      }}
    >
      ©{thisYear} CodeHeart Software, LLC
    </h4>
  );
};

export default Copyright;
