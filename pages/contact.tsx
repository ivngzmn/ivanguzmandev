import { Navbar, ContactMe, Footer } from '../components';
import Head from 'next/head'

function Contact() {
	return (
		<>
		<Head>
		<title>Contact</title>
		</Head>

		<Navbar />
		<ContactMe />	
        <Footer />
		</>
	);
}

export default Contact;