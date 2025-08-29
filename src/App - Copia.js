import { motion } from 'framer-motion';
import './App.css';
import { Button } from './components/ui/Button';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a, #111827)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px', textAlign: 'center' }}
      >
        <h1 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '12px' }}>Crypto Job</h1>
        <p style={{ fontSize: '18px', opacity: 0.85, marginBottom: '24px' }}>
          A moeda digital que valoriza o esforço humano. Transforme trabalho em valor real e faça parte da revolução econômica.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => window.open('/whitepaper.pdf', '_blank')}>Whitepaper</Button>
          <Button variant="outline" onClick={() => window.open('https://t.me/crypto_job', '_blank')}>Comunidade</Button>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          width: '100%',
          maxWidth: '1100px',
          marginTop: '48px',
        }}
      >
        <div style={cardStyle}>
          <h3 style={cardTitle}>💼 Valoriza o Trabalho</h3>
          <p style={cardText}>Cada contribuição conta. Crypto Job transforma esforço humano em riqueza digital sustentável.</p>
        </div>
        <div style={cardStyle}>
          <h3 style={cardTitle}>⚡ Rápido & Seguro</h3>
          <p style={cardText}>Transações rápidas, transparentes e protegidas por tecnologia blockchain moderna.</p>
        </div>
        <div style={cardStyle}>
          <h3 style={cardTitle}>🌍 Comunidade Global</h3>
          <p style={cardText}>Junte-se à rede de trabalhadores e inovadores construindo a nova economia.</p>
        </div>
      </motion.div>

      <footer style={{ marginTop: '56px', opacity: 0.6, fontSize: '14px' }}>
        © {new Date().getFullYear()} Crypto Job — Todos os direitos reservados.
      </footer>
    </div>
  );
}

const cardStyle = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
  padding: '20px',
  backdropFilter: 'blur(6px)',
  boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
};

const cardTitle = { fontSize: '18px', fontWeight: 800, marginBottom: '6px' };
const cardText = { opacity: 0.8, lineHeight: 1.5 };
