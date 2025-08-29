import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import { Button } from './components/ui/Button';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ maxWidth: '1100px', textAlign: 'center', margin: '0 auto', padding: '60px 20px' }}
    >
      <h1 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '12px' }}>Crypto Job</h1>
      <p style={{ fontSize: '18px', opacity: 0.85, marginBottom: '32px' }}>
        A moeda digital que valoriza o esforço humano. Transforme trabalho em valor real e faça parte da revolução econômica.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/whitepaper"><Button>Whitepaper</Button></Link>
        <Link to="/comunidade"><Button variant="outline">Comunidade</Button></Link>
      </div>

      {/* Features Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          width: '100%',
          marginTop: '60px',
        }}
      >
        <div style={cardStyle}>
          <h3 style={cardTitle}>💼 Valoriza o Trabalho</h3>
          <p style={cardText}>
            Cada contribuição conta. Crypto Job transforma esforço humano em riqueza digital sustentável.
          </p>
        </div>
        <div style={cardStyle}>
          <h3 style={cardTitle}>⚡ Rápido & Seguro</h3>
          <p style={cardText}>
            Transações rápidas, transparentes e protegidas por tecnologia blockchain moderna.
          </p>
        </div>
        <div style={cardStyle}>
          <h3 style={cardTitle}>🌍 Comunidade Global</h3>
          <p style={cardText}>
            Junte-se à rede de trabalhadores e inovadores construindo a nova economia.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Whitepaper() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={pageStyle}>
      <h2 style={pageTitle}>Whitepaper</h2>
      <p style={pageText}>
        Aqui você pode explicar a proposta do projeto, como funciona a prova de trabalho humano, visão de futuro e aplicação prática.
      </p>
      <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
        Baixar PDF
      </a>
    </motion.div>
  );
}

function Carteira() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={pageStyle}>
      <h2 style={pageTitle}>Carteira</h2>
      <p style={pageText}>Faça o download da carteira oficial para começar a minerar e usar a moeda.</p>
      <ul>
        <li><a href="#" style={linkStyle}>Download para Windows</a></li>
        <li><a href="#" style={linkStyle}>Download para Linux</a></li>
        <li><a href="#" style={linkStyle}>Download para Android</a></li>
      </ul>
    </motion.div>
  );
}

function Comunidade() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={pageStyle}>
      <h2 style={pageTitle}>Comunidade</h2>
      <p style={pageText}>Junte-se à comunidade e participe da revolução do trabalho digital.</p>
      <ul>
        <li><a href="#" style={linkStyle}>Telegram</a></li>
        <li><a href="#" style={linkStyle}>Discord</a></li>
        <li><a href="#" style={linkStyle}>Twitter</a></li>
      </ul>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f172a, #111827)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Navbar */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', background: 'rgba(0,0,0,0.4)', position: 'sticky', top: 0 }}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/whitepaper" style={navLinkStyle}>Whitepaper</Link>
          <Link to="/carteira" style={navLinkStyle}>Carteira</Link>
          <Link to="/comunidade" style={navLinkStyle}>Comunidade</Link>
        </nav>

        {/* Pages */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/carteira" element={<Carteira />} />
            <Route path="/comunidade" element={<Comunidade />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={{ padding: '20px', textAlign: 'center', opacity: 0.6, fontSize: '14px' }}>
          © {new Date().getFullYear()} Crypto Job — Todos os direitos reservados.
        </footer>
      </div>
    </Router>
  );
}

// Styles
const navLinkStyle = { color: '#fff', textDecoration: 'none', fontWeight: 600 };
const pageStyle = { maxWidth: '700px', padding: '40px 20px', textAlign: 'center' };
const pageTitle = { fontSize: '32px', fontWeight: 800, marginBottom: '16px' };
const pageText = { fontSize: '18px', opacity: 0.85, marginBottom: '20px' };
const linkStyle = { color: '#3b82f6', textDecoration: 'underline' };

const cardStyle = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
  padding: '24px',
  backdropFilter: 'blur(6px)',
  boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};
const cardTitle = { fontSize: '20px', fontWeight: 800, marginBottom: '10px' };
const cardText = { opacity: 0.85, lineHeight: 1.5 };
