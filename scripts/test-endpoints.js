import http from 'http';

const urls = [
  'http://localhost:4173/services/power-washing',
  'http://localhost:4173/services/commercial-cleaning',
  'http://localhost:4173/services/industrial-cleaning',
  'http://localhost:4173/services/post-construction-cleaning',
  'http://localhost:4173/services/exterior-cleaning',
  'http://localhost:4173/services/custom-cleaning',
  'http://localhost:4173/services',
  'http://localhost:4173/about',
  'http://localhost:4173/contact',
  'http://localhost:4173/quote'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- Testing Local Endpoints ---');
  for (const url of urls) {
    const res1 = await fetchUrl(url);
    const res2 = await fetchUrl(url); // simulated refresh

    const titleMatch = res1.body.match(/<title>([\s\S]*?)<\/title>/i);
    const h1Match = res1.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const canonicalMatch = res1.body.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
    const rootPopulated = res1.body.includes('<div id="root">') && (res1.body.includes('Commercial Focus:') || res1.body.includes('Comprehensive Commercial Cleaning'));
    const hasTasks = res1.body.includes('What Is Included?') || res1.body.includes('Scope of Service') || res1.body.includes('Explore Our Commercial Services');
    const hasRelated = res1.body.includes('Related Commercial Services');
    const hasCTA = res1.body.includes('Request a') || res1.body.includes('/quote');
    const hasPhone = res1.body.includes('tel:+353874945684');

    console.log(`URL: ${url}`);
    console.log(`  HTTP Direct: ${res1.statusCode} | HTTP Refresh: ${res2.statusCode}`);
    console.log(`  Title: ${titleMatch ? titleMatch[1] : 'NONE'}`);
    console.log(`  H1: ${h1Match ? h1Match[1] : 'NONE'}`);
    console.log(`  Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);
    console.log(`  Root Pre-rendered: ${rootPopulated}`);
    console.log(`  Has Tasks List: ${hasTasks}`);
    console.log(`  Has Related Links: ${hasRelated}`);
    console.log(`  Has Working CTA/Phone: ${hasCTA && hasPhone}`);
    console.log('');
  }
}

run().catch(console.error);
