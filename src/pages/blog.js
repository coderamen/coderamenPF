import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const Blog = () => (
    <div>
        <Layout>
            <p>Blog</p>
            <button><Link to="/home">back button</Link></button>
        </Layout>
    </div>
)

export default Blog