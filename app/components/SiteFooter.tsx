import NavItem from './NavItem';
import Copyright from './Copyright';
import AllRightsReserved from './AllRightsReserved';
import Divider from '~/components/Divider';

const SiteFooter = () => {
  return (
    <div style={{ width: '100%', padding: '1rem 0' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',
          justifyContent: 'flex-start',
          padding: '1rem 2rem'
        }}
      >
        {/*{<HeaderLogo src={Logo}/>}*/}
        <NavItem title={'Contact'} route={'/contact'} />
        <NavItem title={'Back to Top'} route={'#'} />
      </div>
      <Divider />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem 2rem'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1rem' }}>
          <Copyright />
          <NavItem title={'Legal'} route={'/legal'} />
          <NavItem title={'Privacy'} route={'/privacy'} />
        </div>
        <AllRightsReserved />
      </div>
    </div>
  );
};

export default SiteFooter;
