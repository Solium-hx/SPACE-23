import React from 'react'

function Content() {
	const crypEngi = [
		'Design of Cryptographic Primitives',
		'Random Number Generators and PUF',
		'Cryptographic Hardware',
		'Cryptographic Software',
		'Cryptographic Protocols',
		'Formal Methods in Cryptographic Engineering',
		'Evaluation of Cryptosystems',
		'Attacks and Countermeasures'
	]

	const scac = [
		'Fault Analysis and Countermeasures',
		'Reverse Engineering and Tampering',
		'Hardware Trojans and Counterfeit Detection',
		'Cryptanalysis'
	]

	const secuAndPriv = [
		'Security of Cyber-Physical Systems',
		'Secure Networking Protocols',
		'Securing Human-in-the-loop Systems',
		'Authentication',
		'Botnets and Malware',
		'Anonymization Techniques and Attacks',
		'Intrusion Detection',
		'Operating Systems Security',
		'Trustworthy Computing',
		'Verification and Testing for Security',
		'Security of AI'
	]
  return (
    <div>
			<h2>Topics</h2>
      <p>
				We invite authors to submit previously unpublished original research. Topic include but are not limited to:
			</p>
			<h3>Cryptographic Engineering</h3>
			<ul>
				{crypEngi.map((val, index) => {
					return (
						<li key={index}>{val}</li>
					)
				})}
			</ul>
			<h3>Side-channel Analysis and Countermeasures</h3>
			<ul>
				{scac.map((val, index) => {
					return (
						<li key={index}>{val}</li>
					)
				})}
			</ul>
			<h3>Security and Privacy</h3>
			<ul>
				{secuAndPriv.map((val, index) => {
					return (
						<li key={index}>{val}</li>
					)
				})}
			</ul>
		</div>
  )
}

export default Content
