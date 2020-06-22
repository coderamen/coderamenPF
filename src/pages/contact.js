import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const Contact = () => (
    <div>
        <Layout>
            <h1>Contact</h1>
            <p>The best way to reach me via email</p>
            <button><Link to="/home">back button</Link></button>
        </Layout>
    </div>
)

export default Contact