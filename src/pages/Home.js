import ParticlesGrowing from 'components/BgHomeParticles/BgHomeParticles';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
};

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const screenWidth = window.innerWidth;

let fontSize = 24;
if (screenWidth >= breakpoints.sm && screenWidth < breakpoints.md) {
  fontSize = 28;
} else if (screenWidth >= breakpoints.md && screenWidth < breakpoints.lg) {
  fontSize = 32;
} else if (screenWidth >= breakpoints.lg && screenWidth < breakpoints.xl) {
  fontSize = 40;
} else if (screenWidth >= breakpoints.xl) {
  fontSize = 48;
}

styles.title.fontSize = fontSize;

export default function Home() {
  return (
    <div style={styles.container}>
      <ParticlesGrowing />
      <h1 style={styles.title}>
        <p>
          Hi!
          <span role="img" aria-label="hi icon" style={{ padding: '0 10px' }}>
            👋🏻
          </span>
          This is phonebook app for your contacts.
        </p>
        <p>
          Here you can log in and save the necessary numbers of people
          <span
            role="img"
            aria-label="people icon"
            style={{ padding: '0 10px' }}
          >
            👥
          </span>
          you need in your account.
        </p>
        <p>
          You can register several times to create separate accounts that will
          store the phones of colleagues,friends or relatives separately.
          <span role="img" aria-label="Phone icon">
            📲
          </span>
        </p>
      </h1>
    </div>
  );
}
