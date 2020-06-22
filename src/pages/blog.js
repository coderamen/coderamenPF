import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const Blog = () => (
    <div>
        <Layout>
            <h1>Blog</h1>
            <p>Post will show up here later on</p>
            <button><Link to="/home">back button</Link></button>
        </Layout>
    </div>
)

export default Blog