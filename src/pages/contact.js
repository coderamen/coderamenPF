import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const Contact = () => (
    <div>
        <Layout>
            <p>Contact</p>
            <button><Link to="/home">back button</Link></button>
        </Layout>
    </div>
)

export default Contact