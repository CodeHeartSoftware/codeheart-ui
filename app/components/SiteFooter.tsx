import FooterLogo from './../assets/CodeHeartFooter.svg';
import Copyright from '~/components/Copyright';

const SiteFooter = () => {
  return (
    <div style={{ width: '100%', padding: '1rem' }}>
      <img src={FooterLogo} style={{ width: '100%' }} />
      <div style={{ paddingTop: '1rem', borderBottom: `15px solid var(--theme-color-off-white)` }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Copyright />
        <a
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--font-size-small)',
            color: 'var(--theme-color-off-white)'
          }}
        >
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default SiteFooter;
